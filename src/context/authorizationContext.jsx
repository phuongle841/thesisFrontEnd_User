import PropTypes from "prop-types";
import { createContext } from "react";
const AuthorizationContext = createContext({
  authorization: null,
  setAuthorization: () => {},
  removeAuthorization: () => {},
});
AuthorizationContext.PropTypes = { authorization: PropTypes.string };
export default AuthorizationContext;
