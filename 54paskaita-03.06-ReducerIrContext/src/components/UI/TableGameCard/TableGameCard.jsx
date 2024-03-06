import styled from "styled-components";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";

const StyleCardDiv = styled.div`
  box-sizing: border-box;
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
`;

const TableGameCard = ({ game }) => {
  const { deleteGame } = useContext(TableGamesContext);
  return (
    <StyleCardDiv>
      <h3>{game.pavadinimas.toUpperCase()}</h3>
      <img src={game.nuotrauka} alt={`${game.pavadinimas} game box`} />
      <div>
        <p>
          {game.zaidejai.kiekisNuo} - {game.zaidejai.kiekisIki} Players
        </p>
        <p>Age: {game.zaidejai.amziusNuo}+</p>
      </div>
      <p>{game.aprasymas}</p>
      <button onClick={() => deleteGame(game.id)}>Delete Game</button>
    </StyleCardDiv>
  );
};

export default TableGameCard;
