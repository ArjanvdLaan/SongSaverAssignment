import "../CSS/Song.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Song = (props) => {
  // console.log(props)
  return (
    <tbody>
      <tr className="playlist">
        <th className="playlist-item">{props.song.title}</th>
        <th className="playlist-item">{props.song.artist}</th>
        <th className="playlist-item">{props.song.genre}</th>
        <th className="playlist-item">{props.song.rating}</th>
        <th className="delBtn-item">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={(event) => props.deleteSong(event, props.song.title)}
          />
        </th>
      </tr>
    </tbody>
  );
};

export default Song;
