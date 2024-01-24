import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Collapse, Typography, IconButton, Input, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoKz from "../assets/logo/Logo-khaizel-02-01.png";

function NavList() {

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/collection">Collection</CustomLink>
      <CustomLink to="/contact">Contact Us</CustomLink>
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
    <nav className="fixed z-10 w-full h-[55px] max-w-screen-6xl px-6 sm:px-32 py-1 bg-cr-1 dark:bg-black ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex">
          {" "}
          
          <Typography as="a" variant="h6" className="mr-4 cursor-pointer py-1.5">
            <Link to="/">
            <img src={logoKz} className="w-full h-7 mt-1" />
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
    <li variant="small" color="blue-gray" className={isActive ? "active py-1 px-3 font-medium " : "py-1 px-3 font-medium text-cr-6 dark:text-white"}>
      <Link to={to} {...props} className="flex items-center hover:text-cr-3 transition-colors">
        {children}
      </Link>
    </li>
  );
}
