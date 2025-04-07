// singleton
// exports controller
import { Fragment, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";


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
}

export const RouteController = _RouteController.instace;
export function RouterProvider({ children }: { children?: ReactNode }) {
  return (
    <BrowserRouter>
      <Routes>
        {_RouteController.instace.routes}
      </Routes>
      {children}
    </BrowserRouter>
  );
}