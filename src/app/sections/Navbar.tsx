import Image from "next/image";
import Logo from "@/assets/Edufied-Logo.png"
import { RiMenuLine, RiSearchLine } from "@remixicon/react";


export const Navbar = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-30">
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between overflow-x-hidden">
                        {/* <Image 
                        height={60}
                        width={120}
                        alt="Logo"
                        src={Logo}
                        /> */}
                        <h1 className=" text-center text-2xl font-extrabold bg-[linear-gradient(to_right,#DD7DDF,#E1cd86,#3BFFFF,#DD7DDF,#E1cd86,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text">EDUFIED</h1>
                        <RiMenuLine className="md:hidden text-white"/>
                        <div className="hidden md:flex items-center gap-3 text-white">
                            <nav className="flex items-center gap-6 uppercase font-semibold">
                                <a href="#">Home</a>
                                <a href="#">Advantages</a>
                                <a href="#">News</a>
                                <a href="#">Contact us</a>
                                <a href="#">career</a>
                            </nav>
                            <div>
                            <RiSearchLine/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
