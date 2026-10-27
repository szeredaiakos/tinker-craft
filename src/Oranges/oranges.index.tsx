import { Route } from "react-router";
import { RouteController } from "../com/Router/RouteController";
import { MenuController } from "../Layout/MenuController";
import OrangesList from "./OrangesList";
import { OrangeStore } from "./Oranges.store";

MenuController.add({
  label: "Oranges",
  url: '/oranges'
});

RouteController.add(<Route path="oranges" element={<OrangeStore.Provider><OrangesList /></OrangeStore.Provider>} />);
