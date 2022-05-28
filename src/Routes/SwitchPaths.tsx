import React, { useState, useEffect, useContext } from "react";
import userEntiteIDContext from "../context/AppContext";

// import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
// import { Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../../src/components/auth/SignIn";
import HomePage from "../pages/adminUniversity";
// import Profil from "../pages/Profil";
// import Trending from "../pages/Trending";
import HomeBlog from "../pages/blog";
import DetailBlog from "../pages/blog/DetailBlog";
import CreateNewBlog from "../pages/blog/CreateNewBlog";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProfileUser from "../pages/ProfileUser";
import Actions from "../pages/Actions";
import CreateCategory from "../pages/CreateCategory";
import Loading from "../pages/Loading";
import HomePorfolio from "../pages/index";
import PageAdmin from "../pages/portailAdmin/PageAdmin";

import HomeShop from "../pages/shop";
import DetailShopping from "../pages/shop/DetailShopping";
import PageMessageMailFromProfileUser from "../pages/mail/PageMessageMailFromProfileUser";
// Route Reception
// import DashboardReception from "../pages/reception";

// Mainstock
// import DashboardMainStock from "../pages/stock";

// import NotFound from "../pages/NotFound";

// import {
//   PATH_RECEPTION as RECEPTION,
//   //
//   PATH_CONSULTATION as CONSULTATION,
// } from "./interfacePaths";
// import { FONCTIONALITIES as ROLE } from "../components/shared/constantes/fonctionalities";
//--------------
// import {
//   ROLE,
//   SUPER_ADMIN,
//   ADMIN_UNIV,
//   DECANAT_I,
//   DECANAT_II,
//   TEACHER,
//   CP_PROMOTION,
// } from "../constants/role";
// import Statistic from "../pages/adminUniversity/Statistic";

function SwitchPath() {
  const fonction = "SUPER_ADMIN";

  // const { fonction } = useContext(userEntiteIDContext);
  const [RoutesSelectedFromRoleUser, setRoutes] = useState<any>("");
  useEffect(() => {
    setRoutes(SelectRoutes());
  }, [fonction]);

  const SelectRoutes = () => {
    let route = "";
    if (route === "") {
      switch (fonction) {
        // case ROLE.SUPER_ADMIN:
        case "SUPER_ADMIN":
          return <RoutesBolg />;
        // case ROLE.ADMIN_UNIV:
        //   return <RouteConsultation dataPaths={CONSULTATION} />;
        // case ROLE.DECANAT_I:
        //   return <RouteLaboratoire dataPaths={LABORATOIRE} />;
        // case ROLE.DECANAT_II:
        //   return <RouteCaisseRecette dataPaths={CAISSE_RECETTE} />;
        // case ROLE.TEACHER:
        //   return <RouteCaisseCentrale dataPaths={CAISSE_CENTRALE} />;
        // case ROLE.CP_PROMOTION:
        //   return <RouteMainStock dataPaths={MAINSTOCK} />;
        default:
          return console.log("default");
      }
    } else return <div> {route} </div>;
  };

  const location = useLocation();
  // <Switch location={location} key={location.pathname}>

  return (
    <Switch location={location} key={location.pathname}>
      {RoutesSelectedFromRoleUser}
    </Switch>
  );
}

export default SwitchPath;

const RoutesBolg = ({ dataPaths }: any) => {
  return (
    <>
      <Route path='/' exact component={PageAdmin} />
      {/* <Route path='/' exact component={HomePorfolio} />
      <Route path='/' exact component={Actions} /> */}
      <Route path='/blog' exact component={HomeBlog} />
      <Route path='/blog/detail/:id' exact component={DetailBlog} />
      <Route path='/blog/new' exact component={CreateNewBlog} />
      <Route path='/shop' exact component={HomeShop} />
      <Route
        path='/mailsended'
        exact
        component={PageMessageMailFromProfileUser}
      />

      <Route path='/shop/shopping/:idUser' exact component={DetailShopping} />

      <Route path='/login' exact component={SignIn} />
      <Route path='/profile-user/:id' exact component={ProfileUser} />
      <Route path='/logout' exact component={HomeBlog} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='/actions' exact component={Actions} />
      <Route path='/create-blog' exact component={CreateCategory} />
      <Route path='/loading' exact component={Loading} />
      <Route path='/admin' exact component={PageAdmin} />

      {/* <Route path="/login" exact component={Login} /> */}
      {/* <Route path="/statistic" exact component={Statistic} /> */}
      {/* <Route path={dataPaths.patients} exact component={Patients} /> */}

      <CommunRoutes />
    </>
  );
};
const RoutesDecanat = ({ dataPaths }: any) => {
  return (
    <>
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/home" exact component={HomePage} /> */}

      {/* <Route path="/login" exact component={Login} /> */}
      {/* <Route path={dataPaths.patients} exact component={Patients} /> */}

      {/* <CommunRoutes /> */}
    </>
  );
};

const CommunRoutes = ({ dataPaths }: any) => {
  return (
    <div>
      <Route path='/dashboard/clientss' exact component={Home} />
      {/* <Route component={NotFound} /> */}
    </div>
  );
};
