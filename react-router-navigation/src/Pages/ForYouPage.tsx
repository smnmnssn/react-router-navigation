import { Link } from "react-router";
import ArtistCard from "../components/ArtistCard";
import { mockedArtists } from "../data";

export default function ForYouPage() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h2 className="text-2xl mb-2">Popular Artists</h2>
        <div className="flex gap-2">
          {mockedArtists.map((artist) => (
            <ArtistCard title={artist.name} imageURL={artist.imageUrl} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl mb-2">Albums and singles</h2>
        <div className="flex gap-2">
          <Link to="album">Somna med Humlan</Link>
          <Link to="album">Lost Tapes</Link>
          <Link to="album">Hurry Up Tomorrow</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl mb-2">Radio stations</h2>
        <div className="flex gap-2">
          <Link to="radio">Radio 1</Link>
          <Link to="radio">Radio 2</Link>
          <Link to="radio">Radio 3</Link>
        </div>
      </section>
    </div>
  );
}
