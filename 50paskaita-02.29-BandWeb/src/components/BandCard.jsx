const BandCard = ({ band, changeStatus, deleteBand, editBand }) => {
 
    return (  
        <>
        <div className='bandCard'>
            <img 
                src={band.picture} 
                alt={band.name} 
            />
             <i 
                className={band.liked ? 'fa-regular fa-face-grin-hearts yellowIcon' : 'far fa-frown greyIcon'}
                onClick={() => changeStatus(band.id)}
            ></i>
            <div className='bandInfo'>
                <p className='yellow'>{band.name.toUpperCase()}</p>
                <div className='mainInfo'>
                    <p>{band.genre.toUpperCase()}</p>
                    <span className='grey'>{band.formed}</span>
                </div>
                <hr />
                <div className="members">
                    {
                        band.members.map((member, i) => 
                            <span
                                key={i}
                            >
                                {member.toLowerCase()}
                                {i !== band.members.length-1 && " -"} 
                            </span>    
                        )
                    }
                </div>
            </div>
            <div className='iconContainer'>
                <i 
                    className="far fa-edit"
                    onClick={() => editBand(band)}
                >
                </i>
                <i 
                    className="fa-regular fa-trash-can"
                    onClick={() => deleteBand(band.id)}
                >
                </i>
            </div>
        </div>
        </>
    );
}
 
export default BandCard;