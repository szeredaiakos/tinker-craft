import { Route } from "react-router";
import { RouteController } from "../com/Router/RouteController";
import { MenuController } from "../Layout/MenuController";
import ApplesList from "./OrangesList";

MenuController.add({
  label: "Oranges",
  url: '/oranges'
});

RouteController.add(<Route path="/oranges" element={<ApplesList />} />);
