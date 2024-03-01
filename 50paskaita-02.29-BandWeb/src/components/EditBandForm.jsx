const EditBandForm = ({
  editFormInputs,
  setEditFormInputs,
  editBand,
  hideForm,
}) => {
  const formSubmit = (e) => {
    e.preventDefault();

    const editedBandData = {
      id: editFormInputs.id,
      name: editFormInputs.name,
      picture: editFormInputs.picture,
      members: editFormInputs.members.split(", "),
      genre: editFormInputs.genre,
      liked: editFormInputs.liked === "like",
      formed: Number(editFormInputs.formed),
    };
    editBand(editedBandData);

    setEditFormInputs({
      id: "",
      name: "",
      picture: "",
      members: "",
      genre: "",
      liked: "like",
      formed: "",
    });

    hideForm();
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setEditFormInputs({
      ...editFormInputs,
      [e.target.name]: value,
    });
  };

  return (
    <section id='editBandForm' className='bandForm'>
      <h1>Edit Band</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          type='text'
          name='name'
          placeholder="band's name..."
          value={editFormInputs.name}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='url'
          name='picture'
          placeholder="band's picture..."
          value={editFormInputs.picture}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <textarea
          name='members'
          placeholder='members names separated by a comma...'
          value={editFormInputs.members}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <div>
          <input
            type='radio'
            name='liked'
            value='like'
            id='registerliked'
            checked={editFormInputs.liked === "like"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor='registerliked'>Like</label>
          <input
            type='radio'
            name='liked'
            value='dislike'
            id='registerdisliked'
            checked={editFormInputs.liked === "dislike"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor='registerdisliked'>Dislike</label>
        </div>
        <input
          type='text'
          name='genre'
          placeholder="band's genre..."
          value={editFormInputs.genre}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='number'
          name='formed'
          placeholder='year the band was formed...'
          value={editFormInputs.formed}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input type='submit' value='EDIT BAND' />
      </form>
      <i className='far fa-times-circle' onClick={hideForm}></i>
    </section>
  );
};

export default EditBandForm;
