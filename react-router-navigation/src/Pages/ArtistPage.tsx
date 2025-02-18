import { useParams } from "react-router";
import { mockedArtists } from "../data";

export default function ForYouPage() {
    const params = useParams();
    const artist = mockedArtists.find((a) => a.id === params.id);

    if (!artist) {
        return <p>Missing..</p>;
    }



    return (
    <div>
        <h2>{artist.name}</h2>
        <img src={artist.imageUrl} />
    </div>
    )
}