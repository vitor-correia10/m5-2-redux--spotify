import { combineReducers } from "redux";

import Auth from "./Auth-reducer";
import Artists from "./Artists-reducer";

export default combineReducers({ Auth, Artists });
