import TableGameCard from "../TableGameCard/TableGameCard";
import styled from "styled-components";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  > * {
    flex-basis: 20rem;
  }
`;

const TableGamesList = () => {
  const { tableGames } = useContext(TableGamesContext);

  return (
    <StyledCardContainer>
      {tableGames.length ? (
        tableGames.map((game) => <TableGameCard key={game.id} game={game} />)
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loading gif"
        />
      )}
    </StyledCardContainer>
  );
};

export default TableGamesList;
