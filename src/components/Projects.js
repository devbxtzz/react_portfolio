// Import Assets
import uniswap from "../assets/uniswap.png";
import compound from "../assets/compound.png";
import aave from "../assets/aave.png";
import portfolioSite from "../assets/portfolio-site.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Portfolio Site</h3>
          <img src={portfolioSite} alt="Uniswap Swap Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://lingering-fog-0384.on.fleek.co/"
            target="_blank " rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/dappuniversity/portfolio_template"
            target="_blank " rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Compound</h3>
          <img src={compound} alt="Compound Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://compound.finance/"
            target="_blank " rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/compound-finance/compound-protocol"
            target="_blank " rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Aave</h3>
          <img src={aave} alt="Aave Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://aave.com/"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/aave/aave-v3-core"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Uniswap</h3>
          <img src={uniswap} alt="Aave Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://aave.com/"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/aave/aave-v3-core"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
