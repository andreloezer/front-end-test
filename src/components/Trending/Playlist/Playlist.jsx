const Playlist = props => {
    return (
        <li>
            <figure className='playlist'>
                <img src={props.imgUrl} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
        </li>
    );
};

export default Playlist
