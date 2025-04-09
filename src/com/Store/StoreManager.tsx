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

  /**
   * 
   * @param updater method of updating the shared state, if returns false or null, no update will occur.
   * @returns the action you can use in your component
   */
  trigger<T>(
    updater: (state: StateType, payload: T) => Partial<StateType> | null | false
  ): (payload: T, age: number) => void {

    return (actPayload: T, age?: number) => {
      const currentState = this.contextObserver.state;
      const newState = updater(structuredClone(currentState), actPayload);
      if (newState === null || newState === false) { return }
      this.contextObserver.setState(newState);
    }
  }


  private dataContext = createContext<StateType>(this.contextObserver.state);
  public getProviderComponent() {
    const contextObserver = this.contextObserver;
    const Context = this.dataContext;

    const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    return Provider;
  }


  Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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







































