import { HamburgerMenu } from "../hamburger-menu";

export const NavigationBar = () => {
  return (
    <nav className="absolute right-0 z-50 flex h-24 w-screen items-center text-white">
      <HamburgerMenu />
    </nav>
  );
};
