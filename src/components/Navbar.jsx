import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "HOME", link: "/" },
    { name: "EXPERIENCE", link: "/experience" },
    { name: "BLOG", link: "/blog" },
    { name: "RESUME", link: require("../assets/resume.pdf"), target: "_blank" },
  ];

  const NAVBAR_CONTAINER =
    "flex bg-white text-black font-bold h-20 w-full md:h-24 justify-between pt-3 items-center border-b-2 border-primary shadow-lg";
  const DROPDOWN_MENU = `absolute md:flex md:static bg-white w-full md:basis-1 ${
    open ? "top-20" : "-top-96"
  } shadow-lg md:shadow-none rounded-lg pb-5 md:mr-10 md:space-x-10`;
  const DROPDOWN_ITEM =
    "flex text-xl border-l-[0.5px] border-primary md:border-none ml-5 mt-5 px-3 w-96 md:w-auto";
  const DROPDOWN_ICON = { fontSize: "40px" };

  return (
    <>
      <div className={NAVBAR_CONTAINER}>
        <h1 className="font-semibold text-3xl ml-5 md:ml-10">
          <Link to="/">
            Topan<span className="text-secondary text-4xl">.</span>
          </Link>
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden mr-5"
        >
          {open ? (
            <CloseIcon sx={DROPDOWN_ICON} />
          ) : (
            <MenuIcon sx={DROPDOWN_ICON} />
          )}
        </div>
        <ul className={DROPDOWN_MENU}>
          {Links.map((link) => (
            <li className={DROPDOWN_ITEM} key={link.name}>
              <Link
                to={link.link}
                target={link.target}
                className="md:hover:text-primary ease-in duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Navbar;
