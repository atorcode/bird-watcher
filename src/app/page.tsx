import { NavigationBar } from "./components/navigation-bar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <>
      <NavigationBar />
      {/* Hero shouldn't actually be main anymore, landing page should be wrapped by main */}
      <section className="flex h-screen justify-center">
        <Hero />
      </section>
    </>
  );
}
