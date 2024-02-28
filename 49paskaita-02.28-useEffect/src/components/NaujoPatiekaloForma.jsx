const NaujoPatiekaloForma = ({ formInputs, setFormInputs, addDish }) => {

    const formSubmit = e => {
        e.preventDefault();
    
        const newDishData = {
            id: String(Date.now()), 
            pavadinimas: formInputs.pavadinimas, 
            nuotrauka: formInputs.nuotrauka,
            kilmesSalis: formInputs.kilmesSalis,
            ragautas: formInputs.ragautas,
            ingridientai: formInputs.ingridientai.split('; '),
            kaina: {
              nuo: Number(formInputs.kainaNuo),
              iki: Number(formInputs.kainaIki)
            }
        };
        addDish(newDishData);
    
        setFormInputs({
          pavadinimas: '',
          nuotrauka: '',
          kilmesSalis: '',
          ragauta: false,
          ingridientai: '',
          kainaNuo: '',
          kainaIki: ''
        });
    }

    const handleInputChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormInputs({
            ...formInputs,
            [e.target.name]: value
        });
    };

    return ( 
        <section id="dishform">
            <h1>Prideti patiekala</h1>
            <form onSubmit={(e) => formSubmit(e)}>
                <input 
                    type="text" 
                    name="pavadinimas"    
                    id="pavadinimas"
                    placeholder="Iveskite patiekalo pavadinima..."
                    value={formInputs.pavadinimas}
                    onChange={e => handleInputChange(e)}
                    // onBlur={() => {}} iseinant is input laukelio, galima cia tikrint validacija
                /><br />
                 <input 
                    type="url" 
                    name="nuotrauka"    
                    id="nuotrauka"
                    placeholder="Ikelkita patiekalo nuotraukos url..."
                    value={formInputs.nuotrauka}
                    onChange={e => handleInputChange(e)}
                /><br />
                 <input 
                    type="text" 
                    name="kilmesSalis"    
                    id="kilmesSalis"
                    placeholder="Iveskite kilmes sali..."
                    value={formInputs.kilmesSalis}
                    onChange={e => handleInputChange(e)}
                /><br />
                <div>
                    <label htmlFor="ragautas">Ar esi ragaves si patiekala? </label>
                    <input 
                        type="checkbox" 
                        name="ragautas"    
                        id="ragautas"
                        checked={formInputs.ragautas}
                        onChange={e => handleInputChange(e)}
                    /></div>
                 <textarea 
                    name="ingridientai"    
                    id="ingridientai"
                    placeholder="Iveskite ingredientus atskirdami kabliataskiu..."
                    value={formInputs.ingridientai}
                    onChange={e => handleInputChange(e)}
                /><br />
                 <input 
                    type="number" 
                    name="kainaNuo"    
                    id="kainaNuo"
                    placeholder="Iveskita maziausia galima patiekalo kaina..."
                    value={formInputs.kainaNuo}
                    onChange={e => handleInputChange(e)}
                /><br />
                 <input 
                    type="number" 
                    name="kainaIki"    
                    id="kainaIki"
                    placeholder="Iveskita didziausia galima patiekalo kaina..."
                    value={formInputs.kainaIki}
                    onChange={e => handleInputChange(e)}
                /><br />
                <input type="submit" value="Prideti patiekala" />
            </form>
        </section>
     );
}
 
export default NaujoPatiekaloForma;