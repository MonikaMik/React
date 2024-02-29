import BandCard from "./BandCard";

const BandCards = ({ bands, changeStatus, deleteBand }) => {
    return ( 
        <section className='bandCardContainer'>
            {
                bands.map(band => 
                    <BandCard
                        key={band.id}
                        band={band}
                        changeStatus={changeStatus}
                        deleteBand={deleteBand}
                    />
                )
            }
        </section>
     );
}
 
export default BandCards;