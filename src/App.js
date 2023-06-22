import { createContext } from "react";
import "./App.css";
import DemoReducer from "./UseReducerDemo/DemoReducer";
import DemoContext from "./ContextApiDemo/DemoContext"

const Context = createContext();

function App(props) {
  const detailsObj = {
    name: "Anuj",
    dob: '03-09-1994'
  }
  // use DemoReducer inside app if we use reducer
  // use DemoContext and context api related inside app if we use context
  return (
    <Context.Provider value={detailsObj}>
      <div className="App">
        <DemoContext context={Context} />
      </div>
    </Context.Provider>
  );
}

export default App;
