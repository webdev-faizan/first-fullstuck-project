import React, { memo } from "react";
import "../Stylesheet/About.css";
import AboutTabs from "./AboutTabs";

const About = () => {
  return (
    <>
      <section>
        <section className="about">
          <div className="content">
            <h3>WHO WE ARE</h3>
            <h2>
              Expedita voluptas omnis cupiditate totam eveniet nobis sint iste.
              Dolores est repellat corrupti reprehenderit.
            </h2>
            <p>
              Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et.
              Inventore et et dolor consequatur itaque ut voluptate sed et.
              Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
            </p>
            <div className="getstarthome">
              <button>Read More </button>
            </div>
          </div>
          <img src="./images/about.jpg" alt="" />
        </section>

        {/* values */}

        <section className="values">
          <div className="valuesinfo">
            <h3>OUR VALUES</h3>
            <h2>Odit est perspiciatis laborum et dicta</h2>
          </div>

          <div className="valuesBoxes">
            <div className="box">
              <img src="./images/values-1.png" alt="" />
              <h2>Ad cupiditate sed est odio</h2>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
            <div className="box">
              <img src="./images/values-2.png" alt="" />
              <h2>Ad cupiditate sed est odio</h2>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
            <div className="box">
              <img src="./images/values-3.png" alt="" />
              <h2>Ad cupiditate sed est odio</h2>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>
        </section>

        {/*count */}

        <section className="count">
          <div className="countbox">
            <h2>232</h2>
            <p>Happy Client</p>
          </div>
          <div className="countbox">
            <h2>521</h2>
            <p>project</p>
          </div>
          <div className="countbox">
            <span>03</span>
            <h2>1463</h2>
            <p>Hours of Support</p>
          </div>
          <div className="countbox">
            <h2>15</h2>
            <p>Hard Workers</p>
          </div>
        </section>

        {/* feature */}

        {/* here is a problem */}

        <div className="featureheader">
          <h3>feature</h3>
          <h2>Laboriosam et omnis fuga quis dolor direda fara</h2>
        </div>

        <div className="featurePlaning">
          <img src="./images/features.png" alt="" />

          <div className="featureminBoxes">
            <div className="fetureMinBox">
              <div></div>
              <h2>Eos aspernatur rem</h2>
            </div>
            <div className="fetureMinBox">
              <div></div>
              <h2>Volup amet voluptas</h2>
            </div>
            <div className="fetureMinBox">
              <div></div>
              <h2>Alias possimus</h2>
            </div>
            <div className="fetureMinBox">
              <div></div>
              <h2>Facilis neque ipsa</h2>
            </div>
            <div className="fetureMinBox">
              <div></div>
              <h2>Rerum omnis </h2>
            </div>
            <div className="fetureMinBox">
              <div></div>
              <h2>Repellendus mollitia</h2>
            </div>
          </div>
        </div>

        {/* featureTabs */}

        <div className="featurestabs">
          <AboutTabs />
          <img src="./images/features-2.png" alt="" />
        </div>
      </section>

      {/* features icon */}

      <section>
        <div className="featureheader">
          <h2>Ratione mollitia eos ab laudantium rerum beatae quo</h2>
        </div>

        <div className="featuresIcons">
          <img src="./images/features-3.png" alt="" />

          <div className="featureiconboxs">
            <div className="fetureIconMinBox">
              <h2>Corporis voluptates sit</h2>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div className="fetureIconMinBox">
              <h2>Labore consequatur</h2>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            <div className="fetureIconMinBox">
              <h2>Molestiae dolor</h2>
              <p>
                Et fuga et deserunt et enim. Dolorem architecto ratione tensa
                raptor marte
              </p>
            </div>
            <div className="fetureIconMinBox">
              <h2>Ullamco laboris nisi</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            <div className="fetureIconMinBox">
              <h2>Beatae veritatis</h2>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
            <div className="fetureIconMinBox">
              <h2>Explicabo consectetur </h2>

              <p>
                Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab
                aut inventore
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(About);
