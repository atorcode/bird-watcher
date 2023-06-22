export const Hero = () => {
  return (
    <div
      className="relative z-0 flex w-full justify-center"
      style={{ height: "95%" }}
    >
      <div className="absolute top-1/2 z-10 -translate-y-1/2 text-white">
        <h1 className="my-5 text-4xl">BIRD WATCHER</h1>
        <h2 className="text-8xl">Where Feathers Tell Tales</h2>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 h-full w-full object-cover object-bottom"
      >
        <source src="/bird-watcher-1.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
