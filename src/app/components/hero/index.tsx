import { SearchBar } from "../search-bar";
import { Button } from "../button";

export const Hero = () => {
  return (
    <div className="relative z-0 flex h-full w-full justify-center">
      <div
        className="absolute top-1/2 z-10 -translate-y-1/2 text-white"
        style={{ textShadow: "2px 2px 4px #000000" }}
      >
        <h1 className="my-5 text-4xl">BIRD WATCHER</h1>
        <h2 className="text-8xl">Where Feathers Tell Tales</h2>
        {/* <SearchBar /> */}
        <Button />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/bird-watcher-hero-video.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
