import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeputes } from "../contexts/DeputeContext";
import Card from "../components/Card";
import "./Camarades.css";

function Camarades() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [groupe, setGroupe] = useState();
  const { data } = useDeputes();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.nosdeputes.fr/organismes/groupe/json"
        );
        const json = await response.json();
        setGroupe(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);
  const handleSelect = (event) => setSelect(event.target.value);

  const lowercasedSearch = search.toLowerCase();

  const filteredData = data
    ? data
        .filter((elem) =>
          search
            ? elem.depute.nom.toLowerCase().includes(lowercasedSearch)
            : true
        )
        .filter((elem) => (select ? elem.depute.groupe_sigle === select : true))
    : [];

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Entrez le nom d'un⸱e député⸱e"
        value={search}
        onChange={handleSearch}
      />
      <label htmlFor="select">Sélectionnez un groupe parlementaire</label>
      <select id="select" onChange={handleSelect}>
        <option value="">--</option>
        {groupe?.organismes.map((elem) => (
          <option key={elem.organisme.id} value={elem.organisme.acronyme}>
            {elem.organisme.nom}
          </option>
        ))}
      </select>
      {filteredData.length === 0 ? (
        <p>Pas de résultat. Essayez encore !</p>
      ) : (
        <div className="cards">
          {filteredData.map((rep) => (
            <Link
              key={rep.depute.id}
              to={`/camarades/${rep.depute.slug}`}
              className="card-wrapper"
            >
              <Card data={rep.depute} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Camarades;
