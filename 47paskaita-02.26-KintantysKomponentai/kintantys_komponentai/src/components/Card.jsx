import Image from './Image';
import Paragraph from "./Paragraph";
import IFrame from "./I_Frame";
import Heading from "./Heading";

const Card = ({ info:{pavadinimas, nuotrauka, lokacija, aprasymas} }) => {
    return ( 
        <div className='card'>
            <div>
                <Heading 
                    text={pavadinimas}
                />
                <Image
                src={nuotrauka.url}
                alt={nuotrauka.alt}
            />
                <Paragraph
                    text={aprasymas}
                />
            </div>
            <IFrame
                // classes={['vienaKlase', 'kitaKlase']}
                src={lokacija}
                title={pavadinimas}
            />
        </div>
     );
}
 
export default Card;