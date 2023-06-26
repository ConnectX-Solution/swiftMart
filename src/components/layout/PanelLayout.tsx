import {
  HomeFilled,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationFilled,
  SettingFilled,
  ShopFilled,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  theme,
  Tooltip,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
const PanelLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { state } = useLocation();
  const { uId } = useParams();
  const navigate = useNavigate();
  const [selecteditems, setSelecteditems] = useState<any>(useParams()["*"]);

  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icons: <HomeFilled />,
    },
    {
      key: "product",
      label: "Product",
      icons: <ShopFilled />,
    },
    {
      key: "order",
      label: "Order",
      icons: <UploadOutlined />,
    },
    {
      key: "myaccount",
      label: "My Account",
      icons: <SettingFilled />,
    },
  ];

  const handleSelect = (select: any) => {
    setSelecteditems(select.key);
  };
  return (
    <>
      <Layout style={{ width: "100%" }}>
        {/* sidebar component  */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "120vh",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[`${selecteditems}`]}
            onSelect={handleSelect}
          >
            {menuItems.map((item: any) => (
              <Menu.Item key={item.key} icon={item.icons}>
                <Link
                  state={{ path: item.key }}
                  to={{ pathname: `/panel/${uId}/${item.key}` }}
                >
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        {/* header component  */}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#E9E3FB",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <Typography.Text strong>swftMart Admin panel</Typography.Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginRight: "20px",
              }}
            >
              <Tooltip title="Notifications">
                <Button
                  icon={<NotificationFilled />}
                  onClick={() => navigate(`/panel/${uId}/notification`)}
                />
              </Tooltip>
              <Tooltip title="My Account">
                <Button
                  icon={<UserOutlined />}
                  onClick={() => navigate(`/panel/${uId}/myaccount`)}
                />
              </Tooltip>
              <Tooltip title="Logout">
                <Button
                  icon={<LogoutOutlined />}
                  onClick={() => navigate(`/auth/login`)}
                />
              </Tooltip>
            </div>
          </Header>

          {/* breadcrumb for active page  */}
          <Breadcrumb style={{ margin: "16px 10px" }}>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>
              {state !== null ? state.path : "dashboard"}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            www.swiftmart.com ©2024 Created by @ejaz&@sami
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default PanelLayout;
