import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';

const Portfolio = ({data}) => {
    return (
        <section id="portfolio">
          <Heading
            text="Portfolio"
          />
          <Paragraph
            text="Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus."
          />
          <div>
            {
              data.map((el, i) => 
                <Image
                  key={i}
                  image={el}
                />
              )
            }
          </div>
        </section>
      );
}
 
export default Portfolio;