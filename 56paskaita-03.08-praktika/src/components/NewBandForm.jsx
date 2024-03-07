import { v4 as uuidv4 } from "uuid";

const NewBandForm = ({ formInputs, setFormInputs, addBand }) => {
  const formSubmit = (e) => {
    e.preventDefault();

    const newBandData = {
      id: uuidv4(),
      name: formInputs.name,
      picture: formInputs.picture,
      members: formInputs.members.split(", "),
      genre: formInputs.genre,
      liked: formInputs.liked === 'like',
      formed: Number(formInputs.formed),
    };

    addBand(newBandData);

    setFormInputs({
        name: "",
        picture: "",
        members: "",
        genre: "",
        liked: "like",
        formed: "",
    });
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  };

  return (
    <section className='bandForm'>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder="band's name..."
          value={formInputs.name}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='url'
          name='picture'
          id='picture'
          placeholder="band's picture..."
          value={formInputs.picture}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <textarea
          name='members'
          id='members'
          placeholder='members names separated by a comma...'
          value={formInputs.members}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <div>
          <input
            type='radio'
            name='liked'
            id='liked'
            value='like'
            checked={formInputs.liked === "like"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor='liked'>Like</label>
          <input
            type='radio'
            name='liked'
            id='disliked'
            value='dislike'
            checked={formInputs.liked === "dislike"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor='disliked'>Dislike</label>
        </div>
        <input
          type='text'
          name='genre'
          id='genre'
          placeholder="band's genre..."
          value={formInputs.genre}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='number'
          name='formed'
          id='formed'
          placeholder='year the band was formed...'
          value={formInputs.formed}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input type='submit' value='ADD BAND' />
      </form>
    </section>
  );
};

export default NewBandForm;
