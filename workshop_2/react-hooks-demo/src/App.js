import Effect from "./hooks/Effect";
import State from "./hooks/State";
import Custom from "./hooks/Custom";
import Ref from "./hooks/Ref";

function App() {
  return (
    <div className="App">
      <State />
      <Effect />
      <Custom />
      <Ref />
    </div>
  );
}

export default App;
