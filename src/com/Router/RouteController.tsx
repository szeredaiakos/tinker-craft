import { Fragment, ReactNode } from 'react';
import { BrowserRouter, Routes, useNavigate } from "react-router";


class _RouteController {
  private static currentInstance: _RouteController;
  public static get instace() {
    if (!_RouteController.currentInstance) { _RouteController.currentInstance = new _RouteController() }
    return _RouteController.currentInstance;
  }

  routes: Set<ReactNode> = new Set();
  private routeCounter = 1;

  add(route: ReactNode) {
    this.routes.add(<Fragment key={this.routeCounter++}>{route}</Fragment>);
  }

  navigate: (url: string) => void = () => { };
}



function Navigator() {
  const navigate = useNavigate();
  _RouteController.instace.navigate = navigate;
  return false;
}



export const RouteController = _RouteController.instace;
export function RouterProvider({ children }: { children?: ReactNode }) {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        {_RouteController.instace.routes}
      </Routes>
      {children}
    </BrowserRouter>
  );
}