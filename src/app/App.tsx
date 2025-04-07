import { Preview } from "@widgets/preview";
import { Resume } from "@widgets/resume";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Preview />
      <Resume />
      <div className="inset-0 fixed pointer-events-none z-10">
        <div className="pattern-image"/>
      </div>
    </div>
  );
}

export default App;
