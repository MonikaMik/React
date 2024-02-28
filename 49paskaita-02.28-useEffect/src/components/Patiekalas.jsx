import ListItem from "./ListItem";

const Patiekalas = ({ dish, statusChange, deleteDish, keistiPatiekala }) => {

   // const bgColor = dish.ragautas ? "green" : "red";

    return ( 
        <div className='dishCard'>
         {/* <div className={`dishCard`} style={{backgroundColor: `${dish.ragautas ? "green" : "red"}`}}> */}
            <div className={`overlay ${dish.ragautas ? 'green' : 'red'}`}></div>
            <h3>{dish.pavadinimas}</h3>
            <img 
                src={dish.nuotrauka} 
                alt={dish.pavadinimas} 
            />
            <div>
                <div>
                    <p>{dish.kaina.nuo}&euro; - {dish.kaina.iki}&euro;</p>
                    <p>{dish.kilmesSalis}</p>
                </div>
                <ul>
                    {
                        dish.ingridientai.map((ingridientas, i) => 
                            <ListItem
                                key={i}
                                text={ingridientas}
                            />
                            )    
                    }
                </ul>
                <hr />
                <div className='bottomText'>
                    <label className={dish.ragautas ? "green" : "red"} htmlFor={`ragautas${dish.id}`}>{dish.ragautas ? 'RAGAUTAS' : 'NERAGAUTAS'}</label>
                    <input 
                        type="checkbox" 
                        id={`ragautas${dish.id}`}
                        checked={dish.ragautas}
                        onChange={() => statusChange(dish.id)}
                    />
                    <div className="iconContainer">
                        <i 
                            className="bi bi-pencil"
                            onClick={()=>keistiPatiekala(dish)}   
                        ></i>
                        <i 
                            className='bi bi-trash'
                            onClick={()=>deleteDish(dish.id)}    
                        ></i>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Patiekalas;