import Prealoader from "@features/preloader/ui/Prealoader";
import { useImagesLoaded } from "@hooks/useImagesLoaded";
import { Contacts } from "@widgets/constacts";
import { CV } from "@widgets/cv";
import { Preview } from "@widgets/preview";
import { Resume } from "@widgets/resume";
import { Text } from "@widgets/text";

function App() {
  const { isReady } = useImagesLoaded();

  return (
    <>
      {!isReady && <Prealoader />}
      <div className="flex flex-col items-center justify-center">
        <Preview />
        <Resume />
        <CV />
        <Text />
        <Contacts />
        <div className="inset-0 fixed pointer-events-none z-[9999]">
          <div className="pattern-image" />
        </div>
      </div>
    </>
  );
}

export default App;
