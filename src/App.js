import "./App.css";
import ClassCounterOne from "./Components/ClassCounterOne";
import ClassMouse from "./Components/ClassMouse";
import HookCounterOne from "./Components/HookCounterOne";
import HookMouse from "./Components/HookMouse";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import MouseContainer from "./Components/MouseContainer";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
    </div>
  );
}

export default App;
