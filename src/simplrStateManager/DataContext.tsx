import { createContext, memo, ReactNode, useContext, useEffect, useState } from "react";


// surface this


// input
const getInitialState = () => ({
  user: {
    isLoading: false,
    name: 'Jhon',
    age: 35,
  }
});

// input
const actions = {
  setName: async () => {
    const currentState = { ...SharedContextState.getInstance().state };
    currentState.user.name = `John ${ Math.round(Math.random() * 100) }`;
    SharedContextState.getInstance().setState(currentState);
  },

  setAge: async () => {
    const currentState = { ...SharedContextState.getInstance().state };
    currentState.user.age += 1;
    SharedContextState.getInstance().setState(currentState);
  },
};

// output
// <Provider>

// output
// use()




// hide this

class SharedContextState {
  public state = getInitialState();
  private static instance: SharedContextState | undefined;
  static getInstance = () => {
    if (!SharedContextState.instance) {
      SharedContextState.instance = new SharedContextState();
    }
    return SharedContextState.instance;
  };

  private listeners: Set<(arg: ReturnType<typeof getInitialState>) => void> = new Set();

  setState(state: ReturnType<typeof getInitialState>) {
    this.state = { ...this.state, ...state };
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  sub(listener: (arg: ReturnType<typeof getInitialState>) => void): () => void {
    this.listeners.add(listener);
    return () => this.unSub(listener);
  }

  unSub(listener: (arg: ReturnType<typeof getInitialState>) => void) {
    this.listeners.delete(listener);
  }
}



const dataConext = createContext<ReturnType<typeof getInitialState> & typeof actions>({
  ...SharedContextState.getInstance().state,
  ...actions,
});

function _DataContextProvider({ children }: { children: ReactNode }) {
  const sharedStateObserver = SharedContextState.getInstance();
  const [state, setState] = useState(sharedStateObserver.state);

  useEffect(() => {
    const unSub = sharedStateObserver.sub(setState);
    return unSub;
  }, []);


  return (
    <dataConext.Provider value={{ ...state, ...actions }}>
      {children}
    </dataConext.Provider>
  )
}

export const DataContextProvider = memo(_DataContextProvider);
export const useLiftedConext = () => useContext(dataConext);
