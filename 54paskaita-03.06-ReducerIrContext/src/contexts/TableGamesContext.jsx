import { createContext, useState, useEffect } from "react";

const TableGamesContext = createContext();

const TableGamesProvider = ({ children }) => {
  //state, reducer, f....
  const [tableGames, setTableGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/staloZaidimai")
      .then((res) => res.json())
      .then((data) => setTableGames(data));
  }, []);

  const addNewGame = (newGame) => {
    setTableGames([...tableGames, newGame]);
    fetch("http://localhost:8080/staloZaidimai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    });
  };

  const deleteGame = (id) => {
    setTableGames(tableGames.filter((game) => game.id !== id));
    fetch(`http://localhost:8080/staloZaidimai/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <TableGamesContext.Provider
      value={{
        tableGames,
        addNewGame,
        deleteGame,
      }}
    >
      {children}
    </TableGamesContext.Provider>
  );
};

export { TableGamesProvider };
export default TableGamesContext;
