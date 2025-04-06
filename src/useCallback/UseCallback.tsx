import React from "react";
import { useState, memo, useCallback, useEffect, useMemo } from "react";


let updateCounter = 0;


/////////////////////////// FUCTIONAL ///////////////////////////

function ClickMe(props: { callback: (inp: number) => void }) {
  updateCounter++;
  return (
    <>
      <button onClick={() => props.callback(Math.floor(Math.random() * 2000))}>add one</button>
      <div>{updateCounter}</div>
    </>
  );
}
const MemoedClicker = memo(ClickMe);





let setFunc = (nr: number) => { };
const callbackerCallback = (nr: number) => {
  setFunc(nr);
}

export function UseCallback() {
  const [count, setCount] = useState(1);

  // - the actual problem
  // const onSetcount = (inp: number) => {
  //   setCount(inp);
  // };

  // - How the dogma goes
  const onSetcount = useCallback((inp: number) => {
    setCount(inp);
  }, []);

  // - Purity
  // setFunc = setCount;
  // const onSetcount = callbackerCallback;

  return (
    <div>
      <MemoedClicker callback={onSetcount} />
      <p>currentCount {count}</p>
    </div>
  );
}


///////////////////////////// CLASS /////////////////////////////


class ClickMeCl extends React.PureComponent<{ callback: ((inp: number) => void) }, {}> {
  render(): React.ReactNode {
    updateCounter++;
    return (
      <>
        <button onClick={() => this.props.callback(Math.floor(Math.random() * 2000))}>add one</button>
        <div>{updateCounter}</div>
      </>
    );
  }
}


export class UseCallbackCl extends React.PureComponent<{}, { count: number }> {

  state = { count: 12 };


  private onUpdate: () => void = (
    (count: number) => {
      this.setState({ count })
    }
  ).bind(this);

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Something went wong :(');
  }


  render(): React.ReactNode {
    return (
      <div>
        <ClickMeCl callback={this.onUpdate} />
        <p>currentCount {this.state.count}</p>
      </div>
    );
  }
}