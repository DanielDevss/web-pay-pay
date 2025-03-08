import Accordion from "@/components/Accordion";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const Documentation = () => {
  useDocumentTitle("Documentación");

  return (
    <article className="max-w-5xl mx-auto">
      <header className="font-bold text-xl mb-4">
        <h1>Documentación del API</h1>
      </header>

        <Accordion>
            <Accordion.Section title="Getting Started">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aspernatur voluptatibus maiores inventore consequatur, suscipit nam
            nobis doloribus impedit enim cupiditate, veniam similique atque ipsum.
            Illo, placeat. Iste, pariatur veritatis.
            </Accordion.Section>

            <Accordion.Section title="Obtener los pagos">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem
            temporibus rerum excepturi ex? Perspiciatis sed sequi unde odio, nulla
            cupiditate aliquid, natus suscipit iure minima voluptate soluta
            obcaecati magnam.
            </Accordion.Section>

            <Accordion.Section title="Checkouts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            voluptatem. Magnam nisi neque obcaecati esse minus voluptas? Sequi
            esse odit dolore facere cumque voluptatum dolor, atque repellendus
            similique asperiores debitis!
            </Accordion.Section>
        </Accordion>
    </article>
  );
};

export default Documentation;
