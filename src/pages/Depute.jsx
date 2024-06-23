import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDeputes } from "../contexts/DeputeContext";
import { scrutin } from "../services/scrutin";
import Card from "../components/Card";
import Result from "../components/Result";
import "./Depute.css";

function Depute() {
  const [votesData, setVotesData] = useState([]);
  const [depute, setDepute] = useState(null);
  const [comrade, setComrade] = useState("");
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const { data } = useDeputes();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundDepute = data?.find((elem) => elem.depute.slug === slug);
        setDepute(foundDepute);
        if (foundDepute) {
          const response = await fetch(
            `https://www.nosdeputes.fr/${slug}/votes/json`
          );
          const json = await response.json();
          const votes = [];
          scrutin.forEach((elem) => {
            const result = json.votes.find(
              (obj) => parseInt(obj.vote.scrutin.numero) === elem.number
            );
            if (result) {
              votes.push({ ...result, ...elem });
            }
          });
          const finalVotes = votes.filter(
            (elem) =>
              elem.vote &&
              elem.vote.position &&
              elem.vote.position !== "abstention"
          );
          setVotesData(finalVotes);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug, data]);

  const comradeCalculator = (array) => {
    const scores = [];
    let result = "";
    array.forEach((elem) => {
      if (elem.vote.position === elem.based) {
        elem.isBased = true;
        scores.push(1);
      } else if (elem.vote.position === elem.connard) {
        elem.isBased = false;
        scores.push(-1);
      }
    });
    const finalScore = scores.reduce((acc, cur) => acc + cur, 0);
    setScore(finalScore);
    if (
      (finalScore >= 3 && finalScore < 10 && finalScore === array.length) ||
      finalScore >= 10
    ) {
      result = "Camarade";
    } else if (finalScore >= 5 && finalScore < 10) {
      result = "Pas top";
    } else if (
      finalScore < 5 ||
      array[0].vote.parlementaire_groupe_acronyme === "RN"
    ) {
      result = "Pas camarade";
    }
    setComrade(result);
  };

  if (isLoading) {
    return <div className="chargement">Chargement en cours...</div>;
  }

  return (
    <div className="depute-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          data={{
            slug: slug,
            groupe_sigle: depute.depute.groupe_sigle,
            nom: depute.depute.nom,
            nom_circo: depute.depute.nom_circo,
            num_circo: depute.depute.num_circo,
          }}
        />
      </div>
      <button
        type="button"
        className="button"
        onClick={() => {
          comradeCalculator(votesData);
        }}
        disabled={isLoading}
      >
        Camarade ou pas camarade ?
      </button>
      {comrade && (
        <Result
          comrade={comrade}
          data={votesData}
          depute={depute}
          score={score}
        />
      )}
    </div>
  );
}

export default Depute;
