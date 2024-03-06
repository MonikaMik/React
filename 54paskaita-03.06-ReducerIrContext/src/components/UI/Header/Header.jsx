import { useContext } from "react";
import PageLoaderContext from "../../../contexts/PageLoaderContext";

const Header = () => {
  const { setPageLoader } = useContext(PageLoaderContext);
  return (
    <header>
      <button onClick={() => setPageLoader("cards")}>Cards</button>
      <button onClick={() => setPageLoader("addForm")}>AddForm</button>
    </header>
  );
};

export default Header;
