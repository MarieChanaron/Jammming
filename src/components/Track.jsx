function Track(props) {

    const { track, onClick, icon } = props;


    return (
        <tr index={track.id}>
            <td>
                <h5> {track.title} </h5>
                <p> {track.artist} | {track.album} </p>
            </td>
            <td onClick={onClick} className="pointer">{icon}</td>
        </tr>
    );
}

export default Track;