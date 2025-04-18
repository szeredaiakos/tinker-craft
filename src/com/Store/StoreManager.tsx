import { createContext, useContext, useEffect, useState } from "react";


class _StoreManager {
  private contextStores: ContextStore<unknown>[] = [];
  create<TState>(initialState: TState): ContextStore<TState> {
    const newContextStore = new ContextStore<TState>(structuredClone(initialState));
    this.contextStores.push(newContextStore);
    return newContextStore;
  }
}
export const StoreManager = new _StoreManager();


class SharedContextObserver<StateType> {
  constructor(
    public state: StateType,
  ) { }

  private listeners: Set<(arg: StateType) => void> = new Set();

  setState(state: Partial<StateType>) {
    const newState = { ...this.state, ...state };
    for (const listener of this.listeners) {
      listener(newState);
    }
    this.state = newState;
  }

  sub(listener: (arg: StateType) => void): () => void {
    this.listeners.add(listener);
    return () => this.unSub(listener);
  }

  unSub(listener: (arg: StateType) => void) {
    this.listeners.delete(listener);
  }
}



class ContextStore<StateType> {
  constructor(
    public initialState: StateType,
  ) { }

  private contextObserver = new SharedContextObserver(this.initialState);
  public state = this.contextObserver.state;
  
  public trigger<T>(
    updater: (state: StateType, payload?: T) =>
      (Partial<StateType> | null | false) |
      Promise<Partial<StateType> | null | false>
  ): (payload?: T, age?: number) => void {

    return async (actPayload?: T, age?: number) => {
      const currentState = this.contextObserver.state;
      const newState = await updater(structuredClone(currentState), actPayload);
      if (newState === null || newState === false) { return }
      this.contextObserver.setState(newState);
    }
  }


  private dataContext = createContext<StateType>(this.contextObserver.state);


  public Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const Context = this.dataContext;
    const contextObserver = this.contextObserver;
    const [state, setState] = useState(contextObserver.state);
    useEffect(() => {
      const unSub = contextObserver.sub(setState);
      return unSub;
    }, []);

    return (
      <Context.Provider value={state}>
        {children}
      </Context.Provider>
    );
  };


  public use = () => useContext(this.dataContext);
}







































