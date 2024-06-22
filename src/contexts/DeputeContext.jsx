import { createContext, useContext, useState, useMemo, useEffect } from "react";

const DeputesContext = createContext();

export default function DeputesProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.nosdeputes.fr/deputes/json");
        const json = await response.json();
        const deputes = json.deputes.filter(
          (elem) =>
            elem.depute.mandat_fin === "2024-06-09" && elem.depute.id !== 307
        );
        setData(deputes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const value = useMemo(() => ({ data }), [data]);

  return (
    <DeputesContext.Provider value={value}>{children}</DeputesContext.Provider>
  );
}

export const useDeputes = () => useContext(DeputesContext);
