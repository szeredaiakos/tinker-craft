import React from "react";
import { useState, memo, useCallback } from "react";

///////////////////////////// FUNC /////////////////////////////

function ClickMe(props: { callback: (randomNr: number) => void }) {
  return (
    <button onClick={() => props.callback(Math.floor(Math.random() * 2000))}>Random it</button>
  );
}
const MemoedClickMe = memo(ClickMe);

export function UseCallback() {
  const [currentRN, setCurrentRN] = useState(1);
  const handleCallback = useCallback((randomN: number) => {
    setCurrentRN(randomN);
  }, []);

  return (
    <div>
      <MemoedClickMe callback={handleCallback} />
      <p>currentRN: {currentRN}</p>
    </div>
  );
}

///////////////////////////// CLASS /////////////////////////////

class ClickMeCl extends React.PureComponent<{ callback: ((randomNr: number) => void) }, {}> {
  render(): React.ReactNode {
    return (
      <button onClick={() => this.props.callback(Math.floor(Math.random() * 2000))}>Random it</button>
    );
  }
}

export class UseCallbackCl extends React.PureComponent<{}, { currentRN: number }> {
  state = { currentRN: 1 };

  private handleCallback: () => void = (
    (currentRN: number) => {
      this.setState({ currentRN });
    }
  ).bind(this);

  render(): React.ReactNode {
    return (
      <div>
        <ClickMeCl callback={this.handleCallback} />
        <p>currentRN: {this.state.currentRN}</p>
      </div>
    );
  }
}