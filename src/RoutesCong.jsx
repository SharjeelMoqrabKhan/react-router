import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Product,
  NotFound,
  ProductItems,
} from "./components/index.js";
const RoutesConfig = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesConfig;
