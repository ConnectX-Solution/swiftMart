/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { hideNotification } from "./Actions";
// import ShowMessage from './Components/Other/Message/ShowMessage';
import Auth from "./components/auth";
import Panel from "./components/Panel/Panel";
import { DI, DIProps } from "./Core";
// import "./style.css";

interface PropsI extends DIProps {
  hideNotification: (id: number | string) => void;
}
function App(Props: PropsI): JSX.Element {
  const userId = Props.di.globalState.get(`user_id`);
  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<></>}>
              <Auth />
            </Suspense>
          }
        >
          <Route path="*" element={<>NO Page Found 2</>} />
        </Route>
        <Route
          // path="/panel/:uId/*"
          path="/panel/:uId/*"
          element={
            <Suspense fallback={<></>}>
              <Panel />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
      <RenderToasts {...Props} />
    </>
  );
}

function RenderToasts(props: PropsI): JSX.Element {
  const { redux } = props;
  const { showToast } = redux;
  return (
    <></>
    // <h1>Toast Message</h1>
    // <ToastWrapper>
    //   {Object.keys(showToast).map((key: any) => {
    //     const toast = showToast[key];
    //     let type: any = 'success';
    //     if (toast.error) type = 'error';
    //     if (toast.warn) type = 'warning';
    //     return (
    //       <Toast
    //         key={key}
    //         type={type}
    //         // error={toast.error}
    //         onDismiss={() => props.hideNotification(key)}
    //         message={toast.message}
    //       />
    //     );
    //   })}
    // </ToastWrapper>
  );
}
export default DI(App, { stateNeeded: true, func: { hideNotification } });
