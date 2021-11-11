import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "../../Home/Home/Local.css";
import AddAProduct from "../AddAProduct/AddAProduct";
import DashChart from "../DashChart/DashChart";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllOrders from "../MangeAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";

const drawerWidth = 200;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { user, logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ marginTop: "35%" }} className="dashboard-link">
      {user.displayName && (
        <p className="user-Info">
          <i className="fas fa-user"> </i> {user.displayName}
        </p>
      )}
      <Link to="/home">
        <span className="me-3">
          <i class="fas fa-home"></i>
        </span>{" "}
        <span className="text-start ">Home</span>
      </Link>{" "}
      {admin && (
        <Link to={`${url}/admin`}>
          <span className="me-3">
            <i class="fas fa-user-shield "></i>
          </span>{" "}
          <span className="text-start">Admin</span>
        </Link>
      )}
      <Link to={`${url}/my_orders`}>
        <span className="me-3">
          <i class="fab fa-shopify"></i>
        </span>{" "}
        <span className="text-start">My orders</span>
      </Link>
      {admin && (
        <Box>
          <Link to={`${url}/manage_orders`}>
            <span className="me-3">
              <i class="fas fa-tasks"></i>
            </span>{" "}
            <span className="text-start">Mange Orders</span>
          </Link>{" "}
          <Link to={`${url}/manage_product`}>
            <span className="me-3">
              <i class="fas fa-tasks"></i>
            </span>{" "}
            <span className="text-start">Products</span>
          </Link>{" "}
          <Link to={`${url}/add_product`}>
            <span className="me-3">
              <i class="far fa-plus-square"></i>
            </span>{" "}
            <span className="text-start">Add Prodcuts</span>
          </Link>{" "}
        </Box>
      )}
      <Link to={`${url}/payment`}>
        <span className="me-3">
          <i class="far fa-handshake"></i>
        </span>{" "}
        <span className="text-start">Payment</span>
      </Link>{" "}
      {!admin && (
        <Link to={`${url}/review`}>
          <span className="me-3">
            <i class="fab fa-replyd"></i>
          </span>{" "}
          <span className="text-start">Review</span>
        </Link>
      )}
      <Link to={`${url}`}>
        {" "}
        <span className="me-3">
          <i class="far fa-chart-bar "></i>
        </span>
        <span className="text-start">Dashboard</span>
      </Link>{" "}
      <Link to={`${url}`}>
        <span className="me-3">
          <i class="fas fa-sign-out-alt "></i>
        </span>{" "}
        <span className="text-start " onClick={logout}>
          Log out
        </span>
      </Link>{" "}
      <br />{" "}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashChart />
          </Route>
          <Route path={`${path}/admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/add_product`}>
            <AddAProduct />
          </Route>
          <Route path={`${path}/manage_orders`}>
            <ManageAllOrders />
          </Route>

          <Route path={`${path}/my_orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/manage_product`}>
            <ManageProducts />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
