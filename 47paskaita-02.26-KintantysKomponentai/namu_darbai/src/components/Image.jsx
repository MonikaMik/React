const Image = ({ image:{src, alt, title} }) => {
    return ( 
        <figure>
             <img 
                src={src} 
                alt={alt}
            />
            <figcaption>{title}</figcaption>
        </figure>
     );
}
 
export default Image;