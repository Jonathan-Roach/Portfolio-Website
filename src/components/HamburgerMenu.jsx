
import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import { personalData } from "../constants/links";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const scrollPosition = useRef(0);

    const toggleMenu = () => {
        setOpen(!open);
    };

    // Lock background scrolling (including iOS Safari)
    useEffect(() => {
        if (open) {
            scrollPosition.current = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition.current}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            document.documentElement.style.overflow = "hidden";
        }

        return () => {
            if (open) {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";

                document.documentElement.style.overflow = "";

                window.scrollTo(0, scrollPosition.current);
            }
        };
    }, [open]);

    return (
        <div className="lg:hidden text-white">

            <Hamburger size={18} toggled={open} toggle={setOpen} />

            {open && (
                <div
                    className="fixed inset-0 z-[9999] w-full h-[100dvh] overflow-y-auto overscroll-contain bg-[#121212]/75 backdrop-blur-sm pt-4"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        touchAction: "pan-y"
                    }}
                >

                    {/* Header */}
                    <div className="flex justify-center w-full">
                        <div className="w-11/12 flex flex-row justify-between">

                            {/* Logo */}
                            <a
                                onClick={toggleMenu}
                                href="#home"
                                className="group flex flex-row items-center gap-2 ml-3 md:ml-6"
                            >
                                <h1 className="text-gray-200 text-lg md:text-xl font-bold">
                                    Jonathan Roach
                                </h1>
                            </a>

                            {/* Close Hamburger */}
                            <Hamburger
                                size={18}
                                toggled={open}
                                toggle={setOpen}
                            />

                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center">
                        <div className="w-12/14 flex flex-col justify-between md:text-4xl text-white text-3xl font-[645] mt-6">

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#home">
                                Home
                            </a>

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#about">
                                About
                            </a>

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#experience">
                                Experience
                            </a>

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#education">
                                Education
                            </a>

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#projects">
                                Projects
                            </a>

                            <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#contact">
                                Contact
                            </a>

                            {/* Social Links */}
                            <div className="flex flex-row border-t-2 border-[#292929] ml-1 pt-5 pb-10 gap-4">

                                <a
                                    href={personalData.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group"
                                >
                                    <BsLinkedin
                                        className="group-hover:scale-110 group-hover:text-[#0A66C2]"
                                        size={20}
                                    />
                                </a>

                                <a
                                    href={personalData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group"
                                >
                                    <BsGithub
                                        className="group-hover:scale-110 group-hover:text-[#e23d13]"
                                        size={20}
                                    />
                                </a>

                                <a
                                    href={`mailto:${personalData.email}`}
                                    className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group"
                                >
                                    <FaEnvelope
                                        className="group-hover:scale-110 group-hover:text-[#EAAB00]"
                                        size={20}
                                    />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
