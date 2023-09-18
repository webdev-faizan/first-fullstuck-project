import { memo, useState } from "react";

const AboutTabs = () => {
  const [tooglestate, setstate] = useState(1);
  const toogletab = (va) => {
    setstate(va);
  };

  return (
    <div>
      <h2 className="tabheading">
        Neque officiis dolore maiores et exercitationem quae est seda lidera pat
        claero
      </h2>
      <div className="toogleButton">
        <h2
          onClick={() => toogletab(1)}
          style={{ textDecoration: tooglestate === 1 ? "underline" : "" }}
        >
          {" "}
          SAEPE FUGA
        </h2>
        <h2
          onClick={() => toogletab(2)}
          style={{ textDecoration: tooglestate === 2 ? "underline" : "" }}
        >
          VOLUPTATES
        </h2>
        <h2
          onClick={() => toogletab(3)}
          style={{ textDecoration: tooglestate === 3 ? "underline" : "" }}
        >
          CORRUPTI
        </h2>
      </div>

      <div className="tooglecontent">
        <div className={tooglestate === 1 ? "tabscontent" : "none"}>
          <p>
            {" "}
            'Consequuntur inventore voluptates consequatur aut vel et. Eos
            doloribus expedita. Sapiente atque consequatur minima nihil quae
            aspernatur quo suscipit voluptatem.',
          </p>
          <h2>Repudiandae rerum velit modi et officia quasi facilis</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            commodi!
          </p>
          <h3>Incidunt non veritatis illum ea ut nisi</h3>
          <p>
            Non quod totam minus repellendus autem sint velit. Rerum debitis
            facere soluta tenetur. Iure molestiae assumenda sunt qui inventore
            eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis
          </p>
        </div>
        <div className={tooglestate === 2 ? "tabscontent" : "none"}>
          <p>
            {" "}
            'Consequuntur inventore voluptates consequatur aut vel et. Eos
            doloribus expedita. Sapiente atque consequatur minima nihil quae
            aspernatur quo suscipit voluptatem.',
          </p>
          <h2>Repudiandae rerum velit modi et officia quasi facilis</h2>
          <p>
            Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
            Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.
          </p>
          <h3>Incidunt non veritatis illum ea ut nisi</h3>
          <p>
            Non quod totam minus repellendus autem sint velit. Rerum debitis
            facere soluta tenetur. Iure molestiae assumenda sunt qui inventore
            eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis
          </p>
        </div>
        <div className={tooglestate === 3 ? "tabscontent" : "none"}>
          <p>
            {" "}
            'Consequuntur inventore voluptates consequatur aut vel et. Eos
            doloribus expedita. Sapiente atque consequatur minima nihil quae
            aspernatur quo suscipit voluptatem.',
          </p>
          <h2>Repudiandae rerum velit modi et officia quasi facilis</h2>
          <p>
            Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
            Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.
          </p>
          <h3>Incidunt non veritatis illum ea ut nisi</h3>
          <p>
            lestiae assumenda sunt qui inventore eligendi voluptates nisi at.
            Dolorem quo tempora. Quia et perferendis
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutTabs);
