import { Route } from "react-router";
import { RouteController } from "../com/Router/RouteController";
import { MenuController } from "../Layout/MenuController";
import ApplesList from "./ApplesList";

MenuController.addMenuEl({
  label: "Apples",
  url: '/apples'
});

RouteController.add(<Route path="apples" element={<ApplesList />} />);