import Heading from "./Heading";

const Headings = ({ stuff:tekstai }) => {
    return (
        <>
            {
                tekstai.map((el, i) => 
                    <Heading
                        key={i}
                        text={el}
                    />
                )
            }
        </>
    );
}
 
export default Headings;