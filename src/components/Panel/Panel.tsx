import React, { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DI, DIProps } from "../../Core";
import ScrollToTop from "./ScrollToTop";
import { StoreDispatcher } from "../..";
import {
  loginStatus,
  syncConnectorInfo,
  syncNecessaryInfo,
  syncProfileInfo,
  syncServices,
} from "../../Actions";

import { PanelLayout } from "../layout";
import Dashboard from "./Dashboards/Dashboard";
import Product from "./Products/Product";
import Order from "./Orders/Order";
import Myaccount from "./Myaccount/Myaccount";
import CreateProduct from "./Products/components/CreateProduct";
import EditProduct from "./Products/components/EditProduct";
import ViewOrder from "./Orders/components/ViewOrder";
import Notification from "./Notification/Notification";
export interface PanelProps extends DIProps {
  name?: string;
  syncNecessaryInfo: () => void;
  syncConnectorInfo: (props: any, shop_url?: string | null) => void;
  syncProfileInfo: () => void;
  loginStatus: () => void;
  syncServices: () => void;
}

function Panel(props: PanelProps): JSX.Element {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  const dispatcher = useContext(StoreDispatcher);
  useEffect(() => {
    dispatcher({
      type: "user_id",
      state: {
        user_id: props.match.uId,
      },
    });
    con();
  }, [props.match.uId, props.di.globalState.get("shop")]);

  // handle key press and navigate accordingly

  function con(): void {
    /****  pause for now, if we need step data data on redux level, un-comment it /****/
    // props.syncNecessaryInfo(); //ADD AWAIT DURING PRODUCTION

    const shop = props.di.globalState.get(`shop`);
    // myshopify_domain: "gaurav-fb.myshopify.com"
    // props.syncConnectorInfo(props, shop); //Don't add AWAIT DURING PRODUCTION

    /****  pause for now, if we need profile data on redux level, un-comment it /****/
    // props.syncProfileInfo();

    /****  pause for now, if we need services data on redux level, un-comment it /****/
    //props.syncServices();
    setHasBeenCalled(true);
  }
  return renderApp();

  function renderApp(): JSX.Element {
    return (
      <>
        <PanelLayout>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product/*" element={<Product />} />
            <Route path="product/createproduct" element={<CreateProduct />} />
            <Route path="product/editproduct" element={<EditProduct />} />

            <Route path="order/*" element={<Order />} />
            <Route path="order/vieworder" element={<ViewOrder />} />

            <Route path="notification" element={<Notification />} />
            <Route path="myaccount" element={<Myaccount />} />

            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </PanelLayout>
      </>
    );
  }
}

export default DI(Panel, {
  func: {
    syncNecessaryInfo,
    syncConnectorInfo,
    syncProfileInfo,
    loginStatus,
    syncServices,
  },
});
