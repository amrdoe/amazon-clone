import Image from "next/image";
import Search from "./search";
import Nav from "./nav";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-[100]">
            <Logo />
            <Search />
            <Nav />
        </header>
    )
}