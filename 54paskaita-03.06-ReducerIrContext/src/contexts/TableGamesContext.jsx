import { createContext, useState, useEffect, useReducer } from "react";

const TableGamesContext = createContext();

const actionTypes = {
  ADD_NEW: "prideti nauja stalo zaidima",
  EDIT_FULL: "redaguoti visa stalo zaidimo duomeni",
  EDIT_STATE: "redaguoti stalo zaidimo statusa",
  DELETE_GAME: "istrinti viena stalo zaidima",
  SET_DATA: "fetch metu uzpildo visus duomenis",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return action.data;
    case actionTypes.ADD_NEW:
      fetch("http://localhost:8080/staloZaidimai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];
    case actionTypes.EDIT_FULL:
      fetch(`http://localhost:8080/staloZaidimai/${action.editedGame.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.editedGame),
      });
      return state.map((game) => {
        if (game.id !== action.editedGame.id) {
          return game;
        } else {
          return action.editedGame;
        }
      });
    case actionTypes.EDIT_STATE:
      state.map((game) => {
        if (game.id !== action.id) {
          return game;
        } else {
          fetch(`http://localhost:8080/staloZaidimai/${action.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pazymetas: !game.pazymetas }),
          });
          return {
            ...game,
            pazymetas: !game.pazymetas,
          };
        }
      });
    case actionTypes.DELETE_GAME:
      fetch(`http://localhost:8080/staloZaidimai/${action.id}`, {
        method: "DELETE",
      });
      return state.filter((game) => game.id !== action.id);
    default:
      console.error("Unknown action type", action.type);
      return state;
  }
};

const TableGamesProvider = ({ children }) => {
  // const [tableGames, setTableGames] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/staloZaidimai")
  //     .then((res) => res.json())
  //     .then((data) => setTableGames(data));
  // }, []);

  // const addNewGame = (newGame) => {
  //   setTableGames([...tableGames, newGame]);
  //   fetch("http://localhost:8080/staloZaidimai", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newGame),
  //   });
  // };

  // const deleteGame = (id) => {
  //   setTableGames(tableGames.filter((game) => game.id !== id));
  //   fetch(`http://localhost:8080/staloZaidimai/${id}`, {
  //     method: "DELETE",
  //   });
  // };

  // const editGame = (editedGame) => {
  //   fetch(`http://localhost:8080/staloZaidimai/${editedGame.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(editedGame),
  //   });
  //   setTableGames(
  //     tableGames.map((game) => {
  //       if (game.id !== editedGame.id) {
  //         return game;
  //       } else {
  //         return editedGame;
  //       }
  //     })
  //   );
  // };

  // const editTableGameStatus = (id) => {
  //   setTableGames(
  //     tableGames.map((game) => {
  //       if (game.id !== id) {
  //         return game;
  //       } else {
  //         fetch(`http://localhost:8080/staloZaidimai/${id}`, {
  //           method: "PATCH",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ pazymetas: !game.pazymetas }),
  //         });
  //         return {
  //           ...game,
  //           pazymetas: !game.pazymetas,
  //         };
  //       }
  //     })
  //   );
  // };

  const [tableGames, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/staloZaidimai`)
      .then((res) => res.json())
      .then((games) => {
        dispatch({ type: actionTypes.SET_DATA, data: games });
      });
  }, []);

  return (
    <TableGamesContext.Provider
      value={{
        tableGames,
        // addNewGame,
        // deleteGame,
        // editGame,
        // editTableGameStatus,
        dispatch,
      }}
    >
      {children}
    </TableGamesContext.Provider>
  );
};

export { TableGamesProvider, actionTypes };
export default TableGamesContext;
