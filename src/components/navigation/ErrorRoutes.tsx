import { Navigate, Route, Routes } from "react-router-dom";

const ErrorRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/no-internet" element={"no internate"} />
      <Route path="/token-expire" element={"Token exp"} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default ErrorRoutes;
