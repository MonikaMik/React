import Heading from "./Heading";
import Card from "./Card";

const Korteles = ({ data }) => {
    return ( 
        <section id="cards">
            <Heading 
                text="Lankytinos Lietuvos vietos"
            />
            <div>
                {
                    data.map(el => {
                        return <Card 
                            key={el.id}
                            info={el}
                        />
                    })
                }
            </div>
        </section>
     );
}
 
export default Korteles;