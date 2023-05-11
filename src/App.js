import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Components/Store";
import { store } from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Store />
      </Provider>
    </div>
  );
}

export default App;
