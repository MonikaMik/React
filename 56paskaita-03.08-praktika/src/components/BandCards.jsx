import BandCard from "./BandCard";
import EditBandForm from "./EditBandForm";
import { useRef } from "react";

const BandCards = ({
  bands,
  changeStatus,
  deleteBand,
  editFormInputs,
  setEditFormInputs,
  editBand,
}) => {
  const editDialogRef = useRef(null);

  const createEditForm = (band) => {
    setEditFormInputs({
      id: band.id,
      name: band.name,
      picture: band.picture,
      members: band.members.join(", "),
      genre: band.genre,
      liked: band.liked ? "like" : "dislike",
      formed: band.formed,
    });

    showForm();
  };
  const showForm = () => {
    editDialogRef.current.showModal();
  };

  const hideForm = () => {
    editDialogRef.current.close();
  };

  return (
    <section className="bandCardContainer">
      {bands.map((band) => (
        <BandCard
          key={band.id}
          band={band}
          changeStatus={changeStatus}
          deleteBand={deleteBand}
          editBand={createEditForm}
        />
      ))}
      <dialog ref={editDialogRef}>
        <EditBandForm
          editFormInputs={editFormInputs}
          setEditFormInputs={setEditFormInputs}
          editBand={editBand}
          hideForm={hideForm}
        />
      </dialog>
    </section>
  );
};

export default BandCards;
