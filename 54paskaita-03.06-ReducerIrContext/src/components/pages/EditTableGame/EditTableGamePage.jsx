import styled from "styled-components";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";
import FormInputContext from "../../../contexts/FormInputContext";
import PageLoaderContext from "../../../contexts/PageLoaderContext";
import { actionTypes } from "../../../contexts/TableGamesContext";
import { inputActionTypes } from "../../../contexts/FormInputContext";

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
    /* align-self: flex-end; */
    &:hover {
      background-color: #d46255;
      cursor: pointer;
    }
  }
`;

const StyledButton = styled.button`
  background-color: lightgrey;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  border: none;
  width: 10rem;
  margin-left: 1rem;
  &:hover {
    background-color: darkGrey;
    cursor: pointer;
  }
`;

const EditTableGamePage = () => {
  const { dispatch } = useContext(TableGamesContext);
  const { formInputs, formDispatch } = useContext(FormInputContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  const formSubmit = (e) => {
    e.preventDefault();

    const editedTableGame = {
      id: formInputs.id,
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai: {
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo),
      },
      pazymetas: formInputs.pazymetas,
      aprasymas: formInputs.aprasymas,
    };
    dispatch({ type: actionTypes.EDIT_FULL, editedGame: editedTableGame });
    setPageLoader("cards");
    formDispatch({ type: inputActionTypes.CLEAR_FORM });
  };

  return (
    <section>
      <h1>Edit Table Game</h1>
      <StyledForm onSubmit={formSubmit}>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Enter table game name..."
          value={formInputs.pavadinimas}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <div>
          <input
            type="checkbox"
            name="pazymetas"
            id="pazymetas"
            checked={formInputs.pazymetas}
            onChange={(event) => {
              const { name, value, type, checked } = event.target;
              formDispatch({
                type: inputActionTypes.HANDLE_INPUT_CHANGE,
                payload: { name, value, type, checked },
              });
            }}
          />
          <label htmlFor="pazymetas">I have played this game</label>
        </div>
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Enter url for a photo..."
          value={formInputs.nuotrauka}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <input
          type="number"
          name="kiekisNuo"
          id="kiekisNuo"
          placeholder="Enter minimum player amount..."
          value={formInputs.kiekisNuo}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <input
          type="number"
          name="kiekisIki"
          id="kiekisIki"
          placeholder="Enter maximum player amount..."
          value={formInputs.kiekisIki}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <input
          type="number"
          name="amziusNuo"
          id="amziusNuo"
          placeholder="Enter minimum player age..."
          value={formInputs.amziusNuo}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <textarea
          type="text"
          name="aprasymas"
          id="aprasymas"
          placeholder="Enter the description for the game..."
          rows={8}
          value={formInputs.aprasymas}
          onChange={(event) => {
            const { name, value, type, checked } = event.target;
            formDispatch({
              type: inputActionTypes.HANDLE_INPUT_CHANGE,
              payload: { name, value, type, checked },
            });
          }}
        />
        <input type="submit" value="Edit game" />
      </StyledForm>
      <StyledButton
        onClick={() => {
          formDispatch({ type: inputActionTypes.CLEAR_FORM });
          setPageLoader("cards");
        }}
      >
        Cancel edit
      </StyledButton>
    </section>
  );
};

export default EditTableGamePage;
