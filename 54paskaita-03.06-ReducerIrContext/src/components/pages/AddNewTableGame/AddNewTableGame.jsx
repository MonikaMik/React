import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";
import FormInputContext from "../../../contexts/FormInputContext";
import PageLoaderContext from "../../../contexts/PageLoaderContext";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 30rem;
  > * {
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    border: 1px solid grey;
  }
  > input[type="submit"] {
    background-color: salmon;
    border: none;
    width: 10rem;
    align-self: flex-end;
    &:hover {
      background-color: #d46255;
      cursor: pointer;
    }
  }
`;

const AddNewTableGame = () => {
  const { addNewGame } = useContext(TableGamesContext);
  const { formInputs, setFormInputs, handleInputChange } =
    useContext(FormInputContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  const formSubmit = (e) => {
    e.preventDefault();

    const newTableGame = {
      id: uuid(),
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai: {
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo),
      },
      aprasymas: formInputs.aprasymas,
    };

    addNewGame(newTableGame);

    setPageLoader("cards");

    setFormInputs({
      pavadinimas: "",
      nuotrauka: "",
      kiekisNuo: "",
      kiekisIki: "",
      amziusNuo: "",
      aprasymas: "",
    });
  };

  return (
    <section>
      <h1>Add new Table Game</h1>
      <StyledForm onSubmit={formSubmit}>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Enter table game name..."
          value={formInputs.pavadinimas}
          onChange={handleInputChange}
        />
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Enter url for a photo..."
          value={formInputs.nuotrauka}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="kiekisNuo"
          id="kiekisNuo"
          placeholder="Enter minimum player amount..."
          value={formInputs.kiekisNuo}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="kiekisIki"
          id="kiekisIki"
          placeholder="Enter maximum player amount..."
          value={formInputs.kiekisIki}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amziusNuo"
          id="amziusNuo"
          placeholder="Enter minimum player age..."
          value={formInputs.amziusNuo}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="aprasymas"
          id="aprasymas"
          placeholder="Enter the description for the game..."
          rows={8}
          value={formInputs.amziusIki}
          onChange={handleInputChange}
        />
        <input type="submit" value="Add game" />
      </StyledForm>
    </section>
  );
};

export default AddNewTableGame;
