import { Route } from "react-router";
import { RouteController } from "../com/Router/RouteController";
import { MenuController } from "../Layout/MenuController";
import ApplesList from "./ApplesList";
import { AppleStore } from "./Apples.store";

MenuController.add({
  label: "Apples",
  url: '/apples'
});

RouteController.add(<Route path="apples" element={<AppleStore.Provider><ApplesList /></AppleStore.Provider>} />);