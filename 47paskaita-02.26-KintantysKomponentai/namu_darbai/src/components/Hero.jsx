import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Hero = () => {
    const pText = "Some about text\nin two lines"
    return ( 
        <section id="hero">
            <Heading
                text="Title"
            />
            <Paragraph
                className="css-fix"
                text={pText}
            />
            <Button
                text="Button"
            />
        </section>
     );
}
 
export default Hero;