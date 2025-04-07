
interface IMenuEl {
  label: string;
  url?: string;
  action?: () => any;
}

interface IMenuState {
  menuItems: Array<IMenuEl>;
}


class _MenuController {

  private static currentInstance: _MenuController;
  public static get instace() {
    if (!_MenuController.currentInstance) { _MenuController.currentInstance = new _MenuController() }
    return _MenuController.currentInstance;
  }

  state: IMenuState = {
    menuItems: [],
  };
  private listeners: Set<(state: IMenuState) => void> = new Set();


  unSubscribe: () => void = (() => {
  }).bind(this);


  subscribe(listener: (state: IMenuState) => void) {
    this.listeners.add(listener);
    return this.unSubscribe;
  }


  addMenuEl(element: IMenuEl) {
    this.state.menuItems.push(element);
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }


}

export const MenuController = _MenuController.instace;