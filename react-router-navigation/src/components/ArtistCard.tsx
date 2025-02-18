import { Link } from "react-router";

interface Props {
    title:string;
    imageURL:string;
}

export default function ArtistCard(props: Props) {
    return (
        <Link to="artist" className="p-2 hover:bg-slate-800 rounded-md">
        <img
          className="rounded-full"
          src={props.imageURL}
        />
        <h3>{props.title}</h3>
        <span className="text-sm text-slate-300">Artist</span>
      </Link>
    )
}