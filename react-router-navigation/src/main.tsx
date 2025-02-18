import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MediaPlayerLayout from "./MediaPlayerLayout.tsx";
import AlbumPage from "./Pages/AlbumPage.tsx";
import ArtistPage from "./Pages/ArtistPage.tsx";
import ForYouPage from "./Pages/ForYouPage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import RadioPage from "./Pages/RadioPage.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaPlayerLayout />}>
          <Route index element={<ForYouPage />} />
          <Route path="artists/:slug/:id" element={<ArtistPage />} />
          <Route path="album" element={<AlbumPage />} />
          <Route path="radio" element={<RadioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
