import React, { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DI, DIProps } from "../../Core";
import ScrollToTop from "./ScrollToTop";

// import {
//     Button,
//     Card,
//     FlexLayout,
//     Notification as Note,
//     Select,
//     TextStyles
// } from '@cedcommerce/ounce-ui';
import { StoreDispatcher } from "../..";
import {
  loginStatus,
  syncConnectorInfo,
  syncNecessaryInfo,
  syncProfileInfo,
  syncServices,
} from "../../Actions";
import { capitalizeFirstLetter } from "./Function";
// import { Menu, SubMenu } from './Panel/Menu';

// import { PlusCircle } from 'react-feather';
import { PanelLayout } from "../layout";
import Dashboard from "./Dashboards/Dashboard";
import Product from "./Products/Product";
import Order from "./Orders/Order";
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
    props.syncConnectorInfo(props, shop); //Don't add AWAIT DURING PRODUCTION

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
            <Route
              path="product/product-view"
              element={<h1>Product-view</h1>}
            />
            <Route
              path="product/product-edit"
              element={<h1>Product-edit</h1>}
            />
            <Route path="order/*" element={<Order />} />
            <Route path="order/order-view" element={<h1>Order view</h1>} />

            <Route path="activities" element={<h1>activities Section</h1>} />

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
