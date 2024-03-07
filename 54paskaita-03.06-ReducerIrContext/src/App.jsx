import "./App.css";
import TableGamesPage from "./components/pages/TableGames/TableGamesPage";
import { useContext } from "react";
import AddNewTableGame from "./components/pages/AddNewTableGame/AddNewTableGame";
import Header from "./components/UI/Header/Header";
import PageLoaderContext from "./contexts/PageLoaderContext";
import EditTableGamePage from "./components/pages/EditTableGame/EditTableGamePage";

const App = () => {
  const { pageLoader } = useContext(PageLoaderContext);
  return (
    <>
      {pageLoader !== "editForm" && <Header />}
      {pageLoader === "addForm" ? (
        <AddNewTableGame />
      ) : pageLoader === "cards" ? (
        <TableGamesPage />
      ) : pageLoader === "editForm" ? (
        <EditTableGamePage />
      ) : null}
    </>
  );
};

export default App;
