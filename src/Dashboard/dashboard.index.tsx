import { Route } from "react-router";
import { RouteController } from "../com/Router/RouteController";
import { Dashboard } from "./Dashboard";
import { MenuController } from "../Layout/MenuController";

RouteController.add(<Route index element={<Dashboard />} />);
MenuController.addMenuEl({ label: 'Dasboard', url: '/' });