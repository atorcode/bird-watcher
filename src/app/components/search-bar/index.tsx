import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <div className="relative h-12 w-full rounded-md border-2">
      <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className="absolute left-12 h-full w-11/12 border-red-500 bg-transparent text-2xl text-white outline-none"
        style={{ textShadow: "2px 2px 3px #000000" }}
      />
    </div>
  );
};
