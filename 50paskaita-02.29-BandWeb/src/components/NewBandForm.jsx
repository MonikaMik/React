const NewBandForm = ({ formInputs, setFormInputs, addBand }) => {

    const formSubmit = e => {
        e.preventDefault();

        const newBandData = {
            id: String(Date.now()),
            name: formInputs.name,
            picture: formInputs.picture,
            members: formInputs.members.split(', '),
            genre: formInputs.genre,
            liked: formInputs.liked,
            formed: Number(formInputs.formed)
        }

        addBand(newBandData);

        setFormInputs({
            name: "",
            picture: "",
            members: "",
            genre: "",
            liked: false,
            formed: ""
        })
    }

    const handleInputChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormInputs({
            ...formInputs,
            [e.target.name]: value
        });
    }

    return (
        <section class='bandForm'>
            <form onSubmit={(e) => formSubmit(e)}>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="band's name..."
                    value={formInputs.name}
                    onChange={e => handleInputChange(e)}
                /><br />
                <input 
                    type="url"
                    name="picture"
                    id="picture"
                    placeholder="band's picture..."
                    value={formInputs.picture}
                    onChange={e => handleInputChange(e)}
                /><br />
                <textarea 
                    name="members"
                    id="members"
                    placeholder="members names separated by a comma..."
                    value={formInputs.members}
                    onChange={e => handleInputChange(e)}
                /><br />
                   <div>
                    <label htmlFor="liked">do you like this band? </label>
                    <input 
                        type="checkbox" 
                        name="liked"    
                        id="liked"
                        checked={formInputs.liked}
                        onChange={e => handleInputChange(e)}
                    /></div>
                <input 
                    type="text"
                    name="genre"
                    id="genre"
                    placeholder="band's genre..."
                    value={formInputs.genre}
                    onChange={e => handleInputChange(e)}
                /><br />
                <input 
                    type="number"
                    name="formed"
                    id="formed"
                    placeholder="year the band was formed..."
                    value={formInputs.formed}
                    onChange={e => handleInputChange(e)}
                /><br />
                <input type="submit" value="ADD BAND" />
            </form>
        </section> 
     );
}
 
export default NewBandForm;