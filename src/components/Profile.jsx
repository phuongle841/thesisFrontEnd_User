import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { Outlet, useParams } from "react-router-dom";

import "../styles/Profile.css";
import { createContext, useEffect, useState } from "react";
import userService from "../services/userService";

export const UserDataContext = createContext();

function Profile() {
  const [user, setUserInformation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchUser = userService.fetch;
    fetchUser(id, setUserInformation);
  }, []);
  return (
    <>
      <UserDataContext value={{ user }}>
        <NavBar></NavBar>
        <NavBarShopping></NavBarShopping>
        <Outlet></Outlet>
        <NavFooter></NavFooter>
      </UserDataContext>
    </>
  );
}
export default Profile;
