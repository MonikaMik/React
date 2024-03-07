import styled from "styled-components";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";
import FormInputsContext from "../../../contexts/FormInputContext";
import PageLoaderContext from "../../../contexts/PageLoaderContext";
import { actionTypes } from "../../../contexts/TableGamesContext";
import { inputActionTypes } from "../../../contexts/FormInputContext";

const StyleCardDiv = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => (props.$arPazymetas ? "#B3EC8D" : "#FDBAD5")};
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  > img {
    width: auto;
    height: 200px;
  }
  > button {
    background-color: #fda69d;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    margin-bottom: 0.2rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TableGameCard = ({ game }) => {
  const { dispatch } = useContext(TableGamesContext);
  const { formDispatch } = useContext(FormInputsContext);
  const { setPageLoader } = useContext(PageLoaderContext);
  
  return (
    <StyleCardDiv $arPazymetas={game.pazymetas}>
      <h3>{game.pavadinimas.toUpperCase()}</h3>
      <img src={game.nuotrauka} alt={`${game.pavadinimas} game box`} />
      <div>
        <p>
          {game.zaidejai.kiekisNuo} - {game.zaidejai.kiekisIki} Players
        </p>
        <p>Age: {game.zaidejai.amziusNuo}+</p>
      </div>
      <p>{game.aprasymas}</p>
      <button
        onClick={() => {
          formDispatch({ type: inputActionTypes.FILL_FORM, cardInfo: game });
          setPageLoader("editForm");
        }}
      >
        Edit Game
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.DELETE_GAME, id: game.id })}
      >
        Delete Game
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.EDIT_STATE, id: game.id })}
      >
        {game.pazymetas ? "Nezaistas" : "Zaistas"}
      </button>
    </StyleCardDiv>
  );
};

export default TableGameCard;
