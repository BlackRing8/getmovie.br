import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ButtonNav } from "./Button-theme-nav";
import { Collapse, Typography, IconButton, Input, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoGet from "../assets/logo/logo-get.jpg";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color=""
          label="Type here..."
          className="pr-20  text-gray-900 dark:text-white"
          containerProps={{
            className: "min-w-[288px] lg:mr-5 text-white",
          }}
        />
        <Button size="sm" color="" className="!absolute right-1 bg-ungu dark:bg-red-500 text-gray-900 dark:text-white top-1 rounded lg:mr-5">
          Search
        </Button>
      </div>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/popular">Popular</CustomLink>
      <CustomLink to="/mylist">MyList</CustomLink>
      <ButtonNav />
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="fixed z-10 w-full max-w-screen-6xl px-6 sm:px-32 py-1 bg-pink-300 dark:bg-black ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex">
          {" "}
          <img src={logoGet} className="w-7 h-7 mt-1" />
          <Typography as="a" variant="h6" className="mr-4 cursor-pointer py-1.5">
            <Link to="/" className="dark:text-white">
              ET MOVIE
            </Link>
          </Typography>
        </div>
        <div className="hidden lg:block dark:text-white">
          <NavList />
        </div>
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li variant="small" color="blue-gray" className={isActive ? "active dark:text-red-500 py-1 px-3 font-medium " : "py-1 px-3 font-medium text-purple-600 dark:text-white"}>
      <Link to={to} {...props} className="flex items-center dark:hover:text-red-500 hover:text-purple-100 transition-colors">
        {children}
      </Link>
    </li>
  );
}
