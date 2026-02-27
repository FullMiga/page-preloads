import { PreloadLoadingLogo } from "./components/gsap/preloads/preload-loading-logo";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <PreloadLoadingLogo />
      <Header />
      <div className="bg-zinc-950 h-dvh overflow-hidden text-zinc-50">
        <body>Page</body>
      </div>
    </>
  );
}
