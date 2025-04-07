import { Preview } from "@widgets/preview";
function App() {
  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <Preview />
      <div className="inset-0 fixed pointer-events-none z-10">
        <div className="pattern-image"/>
      </div>
    </div>
  );
}

export default App;
