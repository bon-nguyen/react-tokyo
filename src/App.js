import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const options = [
  {
    label: "bon",
    value: "bon",
  },
  {
    label: "beo",
    value: "beo",
  },
];

function App() {
  const [selected, setSelected] = useState();
  return (
    <>
      <div>
        <div>Block</div>
      </div>

      <div>
        <div>Inline</div>
        <div>lorem</div>
        <div>lorem6666</div>
        <div>lorem1111</div>
        <div>lorem22222</div>
        <div>lorem3333333</div>
      </div>

      <div>
        <div>None</div>
      </div>
    </>
  );
}

export default App;
