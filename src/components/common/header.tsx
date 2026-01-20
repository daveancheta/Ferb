import Link from "next/link"
import { HyperText } from "../ui/hyper-text"
import ModeToggle from "../mode-toggle"
import { Input } from "../ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

function Header() {
    const [open, setopen] = useState(false)

    const NavHover = "dark:text-white text-black hover:text-muted-foreground dark:hover:text-muted-foreground transition-all duration-300 ease-in-out";

    return (
        <header className="sticky inset-0 backdrop-blur bg-background/90
    dark:bg-background/90 border-b-2 m-0">
            <div className="flex justify-between sm:mx-30 mx-10 py-2 items-center">
                <div className="flex flex-row items-center gap-8">
                    <h1 className="font-extrabold uppercase">
                        <Link href="/" className="flex flex-row items-center">
                            <img className="w-10 h-10" src="/ferb-logo.png" alt="" />
                            <HyperText className="text-2xl sm:flex hidden">ferb</HyperText>
                        </Link>
                    </h1>

                    <div className="lg:flex flex-row hidden gap-2 text-sm items-center">
                        <Link href="" className={cn(NavHover)}>Documentation</Link>
                        <Link href="https://nextjs.org/" className={cn(NavHover)}>Next.js</Link>
                        <Link href="https://zustand-demo.pmnd.rs/" className={cn(NavHover)}>Zustand</Link>
                        <Link href="https://www.prisma.io/" className={cn(NavHover)}>Prisma</Link>
                        <Link href="https://neon.com/" className={cn(NavHover)}>Neon</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <InputGroup className="rounded-full lg:flex hidden">
                        <InputGroupInput placeholder="Search Documentation..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <ModeToggle />
                    <button className="sm:hidden flex"
                        onClick={() => setopen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            <div className={cn("fixed w-full bg-background border-b-2 m-0 py-2 px-4 flex flex-col items-start sm:hidden gap-4",
                "transition-all ease-out duration-300 origin-top",
                open ? "opacity-100 translate-y-0 pointer-events-auto" :
                    "opacity-0 -translate-y-4 pointer-events-none")}>
                <InputGroup className="rounded-full">
                    <InputGroupInput placeholder="Search Documentation..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                </InputGroup>

                <div className="px-2 flex flex-col gap-4">
                    <Link href="" className={cn(NavHover)}>Documentation</Link>
                    <Link href="https://nextjs.org/" className={cn(NavHover)}>Next.js</Link>
                    <Link href="https://zustand-demo.pmnd.rs/" className={cn(NavHover)}>Zustand</Link>
                    <Link href="https://www.prisma.io/" className={cn(NavHover)}>Prisma</Link>
                    <Link href="https://neon.com/" className={cn(NavHover)}>Neon</Link>
                </div>

            </div>
        </header>
    )
}

export default Header