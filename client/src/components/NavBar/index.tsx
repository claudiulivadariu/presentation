import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo-no-background.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { id: 1, text: "Home", link: "/home" },
        { id: 2, text: "Company", link: "#" },
        { id: 3, text: "Cars", link: "/cars" },
        { id: 4, text: "Rental Conditions", link: "#" },
        { id: 5, text: "Contact", link: "#" },
    ];

    return (
        <div className="bg-slate-800 flex md:justify-evenly justify-between items-center h-16 mx-auto px-4 text-white w-full border-b-[1px] mb-2">
            <img
                src={logo}
                className="w-32 ml-5 cursor-pointer"
                onClick={() => {
                    navigate("/home");
                }}
            ></img>
            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className="p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
                        onClick={() => navigate(item.link)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className="block md:hidden cursor-pointer md:pr-2 pr-4">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
                className={
                    nav
                        ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
                }
            >
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className="p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
                        onClick={() => {
                            handleNav();
                            navigate(item.link);
                        }}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
