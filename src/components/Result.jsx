import "./Result.css";

function Result({ comrade, data, depute, score }) {
  return (
    <div className="result-container">
      <p className="result-title">Résultat : {comrade}</p>
      {depute.depute.groupe_sigle === "RN" ? (
        <>
          <p className="result-paragraph result-negative">
            Un⸱e député⸱e du Rassemblement National ne peut pas être un⸱e
            camarade. Fin de la discussion. Mais regardons comment les
            néo-fascistes votent à l'Assemblée (quand iels y sont...) :
          </p>
          {data
            .filter((elem) => !elem.isBased)
            .map((elem) => (
              <p
                key={parseInt(elem.vote.scrutin.numero)}
                className="result-paragraph"
              >
                <a
                  href={elem.vote.scrutin.url_institution}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="result-link"
                >
                  {elem.vote.scrutin.titre
                    .slice(0, -1)
                    .split("")
                    .map((letter, i) =>
                      i === 0 ? letter.toUpperCase() : letter
                    )
                    .join("")}{" "}
                  :{" "}
                </a>
                {depute.depute.nom} a voté{" "}
                <span className="result-negative">{elem.vote.position}</span>
              </p>
            ))}
        </>
      ) : score === data.length && data.length ? (
        <p className="result-paragraph result-positive">
          Bravo camarade, tu as voté en accord avec les principes du Nouveau
          Front Populaire !
        </p>
      ) : !data.length ? (
        <p className="result-paragraph result-negative">
          Pas de votes à analyser... Fallait être plus souvent à l'Assemblée (ou
          ne pas être ministre macroniste) !
        </p>
      ) : (
        data
          .filter((elem) => !elem.isBased)
          .map((elem) => (
            <p
              key={parseInt(elem.vote.scrutin.numero)}
              className="result-paragraph"
            >
              <a
                href={elem.vote.scrutin.url_institution}
                target="_blank"
                rel="noopener noreferrer"
                className="result-link"
              >
                {elem.vote.scrutin.titre
                  .slice(0, -1)
                  .split("")
                  .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
                  .join("")}{" "}
                :{" "}
              </a>
              {elem.vote.position === "nonVotant" ? (
                <span className="result-negative">
                  {depute.depute.nom} n'a pas voté
                </span>
              ) : (
                <span className="result-negative">
                  {depute.depute.nom} a voté {elem.vote.position}
                </span>
              )}
            </p>
          ))
      )}
    </div>
  );
}

export default Result;
