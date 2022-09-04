import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CreateCategory from "../pages/CreateCategory";
import HomeShop from "../pages/shop";
import DetailShopping from "../pages/shop/DetailShopping";
import AddNewProduct from "../pages/shop/addNewProduct";
import TablePaniers from "../components/client/TablePanier";
import DetailProduct from "../pages/shop/DetailShopping";
import { DetailCommand } from "../pages/shop/DetailCommand";
import PageAdmin from "../pages/portailAdmin/PageAdmin";
import Loading from "../pages/Loading";
import AddNewCategory from "../pages/shop/addNewCategory";

function SwitchPath() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route path='/' exact component={HomeShop} />
      <Route path='/monPanier' exact component={TablePaniers} />
      <Route path='/shop/detail-product/:id' exact component={DetailProduct} />
      <Route path='/admin/:TAB' exact component={PageAdmin} />
      <Route
        path='/command/detail/:idCommand/:idClient'
        exact
        component={DetailCommand}
      />
      <Route path='/shop/shopping/:idUser' exact component={DetailShopping} />
      <Route path='/login' exact component={SignIn} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='/create-blog' exact component={CreateCategory} />
      <Route path='/loading' exact component={Loading} />
      <Route path='/admin' exact component={PageAdmin} />
      <Route path='/product/create' exact component={AddNewProduct} />
      <Route path='/category/create' exact component={AddNewCategory} />
    </Switch>
  );
}

export default SwitchPath;
