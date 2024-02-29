import Patiekalas from "./Patiekalas";

const Patiekalai = ({ dishes, statusChange, deleteDish, setEditedId, setFormInputs }) => {
    return ( 
        <section id='ourDishes'>
            <h1>Musu patiekalai</h1>
            <div className='dishesContainer'>
                {dishes.map(dish => 
                    <Patiekalas
                        key={dish.id}
                        dish={dish}
                        statusChange={statusChange}
                        deleteDish={deleteDish}
                        setEditedId={setEditedId}
                        setFormInputs={setFormInputs}
                    />
                )}
            </div>
        </section>
     );
}
 
export default Patiekalai;