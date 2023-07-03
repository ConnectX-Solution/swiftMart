import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import "./App.css";

// primeflex css
// import "primeflex/primeflex.scss";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

import { store } from "./Reducers";
import { ConfigProvider } from "antd";

export const StoreDispatcher = React.createContext(store.dispatch);

const App = lazy(() => import("./App"));
const persistor = persistStore(store);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.route ?? ""}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Suspense fallback={<>Loading...</>}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "indigo",
                },
              }}
            >
              <App />
            </ConfigProvider>
          </Suspense>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);
