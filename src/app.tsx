import { PreloadLoadingShape } from "./components/gsap/preloads/preload-loading-shape";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <PreloadLoadingShape />
      <Header />
      <div className="bg-zinc-950 h-dvh overflow-hidden text-zinc-50">
        <body>Page</body>
      </div>
    </>
  );
}
