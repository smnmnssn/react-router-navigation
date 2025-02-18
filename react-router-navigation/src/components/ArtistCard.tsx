import { Link } from "react-router";
import { Artist } from "../data";

interface Props {
    artist: Artist;
}

export default function ArtistCard(props: Props) {
    return (
        <Link to={`artists/${props.artist.slug}/${props.artist.id}`} className="p-2 hover:bg-slate-800 rounded-md">
        <img
          className="rounded-full"
          src={props.artist.imageUrl}
        />
        <h3>{props.artist.name}</h3>
        <span className="text-sm text-slate-300">Artist</span>
      </Link>
    )
}