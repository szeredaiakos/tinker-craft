
interface IMenuEl {
  label: string;
  url?: string;
  action?: () => any;
}

interface IMenuState {
  menuItems: Array<IMenuEl>;
}

type TListener = (state: IMenuState) => void;


class _MenuController {

  private static currentInstance: _MenuController;
  public static get instace() {
    if (!_MenuController.currentInstance) { _MenuController.currentInstance = new _MenuController() }
    return _MenuController.currentInstance;
  }

  store: IMenuState = {
    menuItems: [],
  };
  private listeners: Set<(state: IMenuState) => void> = new Set();


  unSubscribe(listener: TListener) {
    this.listeners.delete(listener);
  }


  subscribe(listener: (state: IMenuState) => void) {
    this.listeners.add(listener);
    return () => this.unSubscribe(listener);
  }


  addMenuEl(element: IMenuEl) {
    const store = { ...this.store };
    store.menuItems.push(element);

    for (const listener of this.listeners) {
      listener(store);
    }
    this.store = store;
  }


}

export const MenuController = _MenuController.instace;