import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ButtonNav } from "./Button-theme-nav";
import { Collapse, Typography, IconButton, Input, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color="black"
          label="Type here..."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px] lg:mr-5",
          }}
        />
        <Button size="sm" color="white" className="!absolute right-1 top-1 rounded lg:mr-5">
          Search
        </Button>
      </div>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/projek">Popular</CustomLink>
      <CustomLink to="/blog">MyList</CustomLink>
      <ButtonNav/>
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
    <nav className="w-full max-w-screen-6xl px-6 sm:px-32 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" variant="h6" className="mr-4 cursor-pointer py-1.5">
          <Link to="/"> GET MOVIE</Link>
        </Typography>
        <div className="hidden lg:block">
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
    <li variant="small" color="blue-gray" className={isActive ? "active py-1 px-3 font-medium" : "py-1 px-3 font-medium"}>
      <Link to={to} {...props} className="flex items-center hover:text-blue-500 transition-colors">
        {children}
      </Link>
    </li>
  );
}
