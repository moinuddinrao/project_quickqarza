import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav id="home" className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="logo" className="h-[25px]" />

            <ul className="list-none md:flex hidden justify-centre items-center">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-montserrat font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a className="flex items-center" href={`#${nav.id}`}>
                            {nav.title}
                        </a>

                    </li>
                ))}
            </ul>
            <div className="md:flex hidden justify-end items-center">
                <div className="mr-4">
                    <a
                        href="#contact"
                        className=" text-white text-[16px] font-montserrat font-normal"
                    >
                        Contact Us
                    </a>
                </div>
                <div className="rounded-full bg-white py-2 px-6">
                    <a
                        href="#apply"
                        className="text-black text-[16px] font-montserrat font-medium"
                    >
                        Apply for Loan
                    </a>
                </div>
            </div>

            <div className="md:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-montserrat font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
