import Image from "next/image";
import Search from "./Search";
import Nav from "./Nav";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-[100]">
            <Logo />
            <Search />
            <Nav />
        </header>
    )
}