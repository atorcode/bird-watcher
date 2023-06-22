import { NavigationBar } from "./components/navigation-bar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="flex h-screen min-h-screen justify-center">
        <Hero />
      </main>
    </>
  );
}
