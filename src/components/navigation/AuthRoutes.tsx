import { Navigate, Route, Routes } from "react-router-dom";
import {  Login, Signup } from "../auth";

const AuthRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/forgot-password" element={<Forget />} /> */}
    
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRoutes;
