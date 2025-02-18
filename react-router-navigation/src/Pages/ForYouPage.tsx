import { Link } from "react-router";
import ArtistCard from "../components/ArtistCard";

export default function ForYouPage() {
  return (
    <div>
      <section>
        <h2 className="text-2xl mb-2">Popular Artists</h2>
        <div className="flex gap-2">
          <ArtistCard
            title="Lady Gaga"
            imageURL="https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6"
          />
          <ArtistCard
            title="The Weekend"
            imageURL="https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae"
          />
          <ArtistCard
            title="Miriam Bryant"
            imageURL="https://i.scdn.co/image/ab676161000051747994b16479f2784ee5511662"
          />
          <ArtistCard
            title="Lady Gaga"
            imageURL="https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6"
          />
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
