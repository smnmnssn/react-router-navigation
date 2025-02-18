import { Outlet } from "react-router";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col">
      <header>Header</header>
      <div className="flex">
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
      </div>
    </div>
  )
}