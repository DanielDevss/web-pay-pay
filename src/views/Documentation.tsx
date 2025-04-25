import useDocumentTitle from "@/hooks/useDocumentTitle";
import GettingStarted from "./documentation/GettingStarted";
import Aside from "@/components/pages/documentation/Aside";
import Payments from "./documentation/Payments";

const Documentation = () => {
  useDocumentTitle("Documentación");

  return (
    <article className="documentation mx-auto">

      <header className="font-bold text-xl mb-4">
        <h1>Documentación del API</h1>
      </header>

      <div className="grid grid-cols-4 gap-4 relative">

        <Aside />

        <div className="col-span-3">
          <GettingStarted />
          <Payments />
        </div>

      </div>

    </article>
  );
};

export default Documentation;
