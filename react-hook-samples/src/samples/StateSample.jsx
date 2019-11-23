import React, { useState, useEffect, useRef } from "react";
import { tsPropertySignature } from "@babel/types";

/**
 * Sample I:
 * This is the first sample in this article https://reactjs.org/docs/hooks-state.html
 *
 */
function StateSample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>State Hook sample </h1>
      <hr />
      <p> this is current count {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment Count </button>
    </div>
  );
}

/** Sample II More real time example
 * The inspiration is from this url https://reactjs.org/docs/hooks-state.html.
 * The variation is to show case a more real time scafolding w.r.t the component hierachy and the interaction
 * from parent to respective children
 * This demostrates how to set up a component hierarchy and pass parent state to its children.
 * Four components are in play here :
 * Parent - Compaonent Container
 * Count component - To trigger persisting  count and the previous history item
 * HistoryContainer - to render each history instance
 * History component - to render each history item
 */
function Parent(props) {
  const [count, setCount] = useState(0);
  const [prevCountHistory, setCountHistory] = useState([]);

  const addPrev = prev => {
    setCountHistory([...prevCountHistory, prev]);
  };
  return (
    <div>
      <h1>State Hook sample with history</h1>
      <hr />
      <p>This is the {count}</p>
      <Count setCount={setCount} storeHistory={addPrev} curCnt={count} />
      <HistoryContainer history={prevCountHistory} />
    </div>
  );
}
function HistoryContainer({ history }) {
  console.log(history);
  const anyHistory = Array.isArray(history) && history.length > 0;
  return (
    <div>
      <p> Click history </p>
      {anyHistory ? (
        <ul>
          {history.map((val, idx) => {
            return <History index={idx} value={val} />;
          })}
        </ul>
      ) : (
        <h6>no history</h6>
      )}
    </div>
  );
}
function History({ index, value }) {
  return (
    <p>
      {" "}
      click={index} value ={value}{" "}
    </p>
  );
}

function Count(props) {
  const prev = props.curCnt;
  return (
    <div>
      <button
        onClick={e => {
          props.setCount(cnt => cnt + 1);
          props.storeHistory(prev);
        }}
      >
        click
      </button>
      ;
    </div>
  );
}
export { Count, History, Parent };
