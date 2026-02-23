import { PreloadBars } from "./components/gsap/preloads/preload-bars";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <PreloadBars />
      <Header />
      <div className="bg-zinc-950 h-dvh overflow-hidden text-zinc-50">
        <body>Page</body>
      </div>
    </>
  );
}
