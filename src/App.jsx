import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    username: "yogi",
    age: "27",
    sex: "Male",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
