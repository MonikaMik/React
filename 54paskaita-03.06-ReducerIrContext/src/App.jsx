import "./App.css";
import TableGamesPage from "./components/pages/TableGames/TableGamesPage";
import { useState, useEffect, useContext } from "react";
import AddNewTableGame from "./components/pages/AddNewTableGame/AddNewTableGame";
import Header from "./components/UI/Header/Header";
import PageLoaderContext from "./contexts/PageLoaderContext";

const App = () => {
  const { pageLoader } = useContext(PageLoaderContext);
  return (
    <>
      <Header />
      {pageLoader === "addForm" ? (
        <AddNewTableGame />
      ) : pageLoader === "cards" ? (
        <TableGamesPage />
      ) : null}
    </>
  );
};

export default App;
