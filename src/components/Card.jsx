import "./Card.css";

function Card({ data }) {
  const { nom, num_circo, nom_circo, slug, groupe_sigle } = data;
  return (
    <div className="card">
      <p className="card-title">{nom}</p>
      <p className="card-subtitle">
        {nom_circo},{" "}
        {`${num_circo}è${num_circo === 1 ? "r" : "m"}e circonscription`}
      </p>
      <p>{groupe_sigle}</p>
      <img
        src={`https://www.nosdeputes.fr/depute/photo/${slug}/250`}
        alt={nom}
      />
    </div>
  );
}

export default Card;
