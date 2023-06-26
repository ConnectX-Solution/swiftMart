/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Col, Row, Typography } from "antd";
import React, { Suspense, lazy, useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoreDispatcher } from "../..";
import { DI, DIProps } from "../../Core";
import SignUp from "./Signup";
import "./AuthStyle.css";

const Login = lazy(() => import("./Login"));

function Auth(_props: DIProps): JSX.Element {
  const dispacher = useContext(StoreDispatcher);
  useEffect(() => {
    dispacher({
      type: "logout",
      state: {},
    });
    _props.di.globalState.removeLocalStorage("auth_token");
  }, []);
  const { Text, Link } = Typography;
  return (
    <>
      <Card>
        <div className="auth_wrapper">
          <Row>
            <Col span={12} className="gutter-row">
              <div
                className="auth_left"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  //   marginRight: "20px",
                  //   fontSize: "50px",
                }}
              >
                <div>
                  <Typography.Title type="success" level={1}>
                    SwiftMart Admin panel
                  </Typography.Title>
                  <Typography.Title type="secondary" level={3}>
                    grow your bussiness{" "}
                  </Typography.Title>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="auth_right" style={{}}>
                <Routes>
                  <Route
                    path="login"
                    element={
                      <Suspense fallback={<></>}>
                        <Login />
                      </Suspense>
                    }
                  />
                  <Route
                    path="signup"
                    element={
                      <Suspense fallback={<></>}>
                        <SignUp />
                      </Suspense>
                    }
                  />
                  {/* <Route
                path="forgot-password"
                element={
                    <Suspense fallback={<></>}>
                        <ForgetPassword />
                    </Suspense>
                }
            /> */}

                  <Route path="*" element={<Navigate to={"/auth/login"} />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
}

export default DI(Auth);
