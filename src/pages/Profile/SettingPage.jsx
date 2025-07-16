import { Box, Card, CardHeader, Container, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../components/Profile";
import userService from "../../services/userService";
import AuthorizationContext from "../../context/authorizationContext";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function ProfileSetting() {
  const { user } = useContext(UserDataContext);
  const { authorization } = useContext(AuthorizationContext);
  const [userInformation, setUserInformation] = useState(null);
  const [settingStatus, setSettingStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUserInformation(user);
  }, [user]);

  function setInformation(id, value) {
    const newUser = { ...userInformation };
    newUser[`${id}`] = value;
    setUserInformation(newUser);
  }

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  function onSubmit() {
    const data = compareData();

    if (isEmpty(data)) {
      return;
    }

    userService.update(userInformation.userId, authorization, data, (e) => {
      console.log(e);
    });
  }

  function compareData() {
    const data = {};
    for (const [key, value] of Object.entries(userInformation)) {
      if (user[key] != value) {
        data[key] = value;
      }
    }
    return data;
  }

  function onCancel() {
    setUserInformation({ ...user });
  }

  function onExit() {
    navigate(`/profile/${userInformation.userId}`);
  }

  return (
    <Box
      component={Container}
      flex={"auto"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Card sx={{ padding: 4 }}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <CloseIcon onClick={onExit}></CloseIcon>
        </Box>
        {userInformation != null &&
          Object.keys(userInformation)?.map((key) => {
            const outPut = toName(key, userInformation[`${key}`]);
            if (outPut.editable == false) {
              return;
            }
            return (
              <EditDiv
                key={outPut.id}
                outPut={outPut}
                setInformation={setInformation}
              ></EditDiv>
            );
          })}

        <Box id="options">
          <button type="submit" onClick={onSubmit}>
            Save
          </button>
          <button onClick={onCancel}>Cancel</button>
        </Box>
      </Card>
    </Box>
  );
}

function EditDiv({ outPut, setInformation }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const newValue = outPut?.value ?? "";
    setValue(newValue);
  }, [outPut]);

  function onChange(e) {
    setValue(e.target.value);
    setInformation(outPut.id, e.target.value);
  }

  return (
    <div>
      <legend>{outPut.name}</legend>
      {outPut.type == "singleSelect" ? (
        <select
          name={outPut.id}
          id={outPut.id}
          value={value}
          onChange={onChange}
        >
          {outPut.valueOptions.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type="text"
          name={outPut.id}
          id={outPut.id}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

function toName(input, value) {
  const outPut = [
    { id: "userId", name: "User Id", editable: false, value: value },
    { id: "userName", name: "User Name", editable: true, value: value },
    { id: "phoneNumber", name: "Phone Number", editable: true, value: value },
    {
      id: "userAvatarUrl",
      name: "User Avatar Url",
      editable: true,
      value: value,
    },
    {
      id: "userBackgroundUrl",
      name: "User Background Url",
      editable: true,
      value: value,
    },
    {
      id: "predictFlavour",
      name: "Predict Flavour",
      type: "singleSelect",
      valueOptions: ["ARIMA", "SARIMA", "SARIMAX", "AUTO"],
      editable: true,
      value: value,
    },
    { id: "userReviews", name: "User Review", editable: false, value: value },
    { id: "Location", name: "Location", editable: false, value: value },
  ];
  return outPut.find((i) => i.id == input);
}

export default ProfileSetting;
