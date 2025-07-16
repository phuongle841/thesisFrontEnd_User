import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import DirectoryLink from "./DirectoryLink";
import reviewService from "../services/reviewService";
import AuthorizationContext from "../context/authorizationContext";

function CommentSection({ data }) {
  const { authorization } = useContext(AuthorizationContext);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);
  const [updateStatus, setUpdateStatus] = useState(null);

  function onChangeComment(event) {
    setComment(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeRating(event, value) {
    setRating(value);
  }

  async function onClickSend() {
    const reviewTitle = title;
    const reviewDescription = comment;
    const reviewRating = rating;
    const productId = data.productId;
    const postReview = reviewService.post;

    await postReview(
      authorization,
      {
        reviewTitle,
        reviewDescription,
        reviewRating,
        productId,
      },
      // setUpdateStatus
      // cancelled out with react?
      window.location.reload
    );
  }

  const sxCommentSection = {
    display: "flex",
    gap: "20px",
  };

  const sxCommentBox = {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const commentDisplay = {
    flex: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
  };
  return (
    <Box component={Container} id="comment-section" sx={sxCommentSection}>
      <Box id="comment-box" sx={sxCommentBox}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          minLength="1"
          maxLength="224"
          rows="5"
          cols="33"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          minLength="1"
          maxLength="224"
          value={comment}
          onChange={onChangeComment}
        ></textarea>
        <Rating
          value={rating}
          onChange={onChangeRating}
          sx={{ width: "1", maxWidth: "max-content" }}
        />
        <Button onClick={onClickSend}>Send!</Button>
      </Box>
      <Box id="comment-display" sx={commentDisplay}>
        {data.reviewed.map((e) => {
          const sx = { display: "flex", gap: "10px" };
          return (
            <Card
              key={e.reviewId}
              sx={{ padding: 1, border: "1px solid #000", height: "230px" }}
            >
              <DirectoryLink
                link={`/profile/${e.reviewer.userId}`}
                buttonValue={e.reviewer.userName}
                icon={<Avatar src={e.reviewer.userAvatarUrl}></Avatar>}
                sx={sx}
              ></DirectoryLink>
              <Typography variant="h5"> {e.reviewTitle}</Typography>
              <p>{e.reviewDescription}</p>
              <Rating
                defaultValue={e.reviewRating}
                sx={{ width: "1", maxWidth: "max-content" }}
                readOnly
              />
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
export default CommentSection;
