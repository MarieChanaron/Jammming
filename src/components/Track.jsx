function Track(props) {

    const { track, onClick, icon } = props;


    return (
        <table index={track.id}>
            <tbody>
                <tr>
                    <td><h5> {track.title} </h5></td>
                    <td rowSpan="2" onClick={onClick} className="pointer">{icon}</td>
                </tr>
                <tr>
                    <td>{track.artist} | {track.album}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Track;