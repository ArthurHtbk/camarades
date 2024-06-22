import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="green">
          <h2>Camarade ?</h2>
        </div>
        <div className="red">
          <h2>Pas Camarade ?</h2>
        </div>
      </div>
      <div className="about">
        <p className="negative">
          Alors que l'extrême-droite est aux portes du pouvoir à cause de la
          dissolution irresponsable d'Emmanuel Macron, les forces de gauche ont
          réussi l'exploit de créer une alliance, de se mettre d'accord sur un
          programme, et de le chiffrer en un temps record, afin de faire face à
          l'immense menace que représente le Rassemblement National.
        </p>
        <p>
          Voici donc l'occasion de faire le bilan : quel⸱le⸱s député⸱e⸱s se
          battent contre le <span className="negative">racisme</span>, le{" "}
          <span className="negative">sexisme</span>, les{" "}
          <span className="negative">LGBTQphobies</span> et pour les
          <span className="positive"> libertés individuelles</span> ? Quel⸱le⸱s
          député⸱e⸱s défendent nos{" "}
          <span className="positive">droits sociaux</span>, et font du
          <span className="negative"> capitalisme</span> leur adversaire ?
          Quel⸱le⸱s député⸱e⸱s s'engagent pour la{" "}
          <span className="positive">transition écologique</span> ?
        </p>
        <p>
          <span className="negative">Spoiler alert :</span> vous risquez d'être
          surpris⸱e... (Non)
        </p>
        <button type="button">
          <Link to={"/camarades"}>Camarades ou pas Camarades ?</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
