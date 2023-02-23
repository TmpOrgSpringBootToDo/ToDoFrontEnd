import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./Login";
import {SignUp} from "./SignUp";
import Center from "../Center";
import {NavBar} from "./NavBar";

export const RouteView = () => {
  return(
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/todo" element={<Center/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}