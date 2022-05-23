import "./style.css";
import Nav from "./components/Nav";
import TodoPage from "./pages/TodoPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NoteState from "./context/notes/NoteState";
import userContext from "./context/user/userContext";

function App() {
  const { loggedIn } = useContext(userContext);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            !loggedIn ? <Homepage /> : <Redirect to="/todo" />
          }
        />
        <Route
          exact
          path="/login"
          render={(props) =>
            !loggedIn ? <LoginPage /> : <Redirect to="/todo" />
          }
        />
        <Route
          exact
          path="/signup"
          render={(props) =>
            !loggedIn ? <SignupPage /> : <Redirect to="/todo" />
          }
        />
        <NoteState>
          <Route
            exact
            path="/todo"
            render={() => (loggedIn ? <TodoPage /> : <Redirect to="/login" />)}
          />
        </NoteState>
      </Switch>
    </div>
  );
}

export default App;
