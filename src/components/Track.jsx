function Track({ track }) {

    return (
        <table>
            <tr>
                <td><h5> {track.title} </h5></td>
                <td rowSpan="2">+</td>
            </tr>
            <tr>
                <td>{track.artist} | {track.album}</td>
            </tr>
        </table>
    );
}

export default Track;