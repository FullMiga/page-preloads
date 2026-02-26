import { PreloadCircle } from "./components/gsap/preloads/preload-circle";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <PreloadCircle />
      <Header />
      <div className="bg-zinc-950 h-dvh overflow-hidden text-zinc-50">
        <body>Page</body>
      </div>
    </>
  );
}
