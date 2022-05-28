import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navigations/Navbar";
import Sidebar from "../navigations/Sidebar";
import SwitchPath from "./SwitchPaths";
import Login from "../components/auth/Login";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import Breadcrumbs from "../components/widgets/Breadcrumbs";

const drawerWidth = 250;
export const backgroundMain = " #eeeeee";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      // width: `calc(100% - ${drawerWidth}px)`,
    }),
    //custumuze
    color: "black",
    backgroundColor: backgroundMain,
    margin: 0,
    padding: 0,
    boxShadow: "none",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    height: "100%",
    background: "red",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },

  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  // const { Uid } = useContext(keysUserContext);
  const [login, selLogin] = useState(false);
  const [sidebar, selSidebar] = useState("");

  const Uid = false;
  // useEffect(() => {
  //   selSidebar(<Sidebar sideOpen={open} />);
  // }, [open]);
  const [state, setState] = React.useState({
    left: false,
  });
  const LEFT = false;
  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    showToast({ message: "ok", typeToast: "error" });
    setState({ ...state, [anchor]: open });
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  };
  const anchor = "left";

  return (
    <div className={classes.root}>
      <Router>


        {Uid ? (
          <>
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
              style={{
                paddingLeft: !open ? 75 : 3,
              }}
            >
              <Navbar
                statutDrawer={open}
                openDrawer={handleDrawerOpen}
                closeDrawer={handleDrawerClose}
              />
              {/* <TemporaryDrawer /> */}
            </AppBar>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
              <div
                className="sidebar-block"
                style={{ marginBottom: "0px", paddingBottom: "0px" }}
              >
                <Sidebar sideOpen={open} />
              </div>
            </Drawer>

            <main className={classes.content}>
              <div className={classes.toolbar} />
              <div>
                {/* <Breadcrumbs /> */}
                <SwitchPath />
              </div>
            </main>
          </>
        ) : (
          <div>
            <Login />
          </div>
        )}
      </Router>
    </div>
  );
}


