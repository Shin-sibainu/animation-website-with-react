import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h1 className="text-2xl font-semibold uppercase">
            <span className="text-primary">ShinCode</span> Inc.
          </h1>
          {/* hamburger menu */}
          <div>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
