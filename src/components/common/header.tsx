import Link from "next/link"
import { HyperText } from "../ui/hyper-text"
import ModeToggle from "../mode-toggle"
import { Input } from "../ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

function Header() {
    const NavHover = "dark:text-muted-foreground text-black hover:text-muted-foreground dark:hover:text-white";

    return (
        <header className="sticky inset-0 backdrop-blur bg-background/90
    dark:bg-background/90 border-b-2 m-0">
            <div className="flex justify-between sm:mx-30 mx-10 py-2 items-center">
                <div className="flex flex-row items-center gap-8">
                    <h1 className="font-extrabold uppercase 
                    purple-ferb">
                        <Link href="/">
                            <HyperText className="text-2xl">ferb</HyperText>
                        </Link>
                    </h1>

                    <div className="sm:flex hidden flex-row gap-2 text-sm items-center">
                        <Link href="" className={cn(NavHover)}>Documentation</Link>
                        <Link href="https://nextjs.org/" className={cn(NavHover)}>Next.js</Link>
                        <Link href="https://zustand-demo.pmnd.rs/" className={cn(NavHover)}>Zustand</Link>
                        <Link href="https://www.prisma.io/" className={cn(NavHover)}>Prisma</Link>
                        <Link href="https://neon.com/" className={cn(NavHover)}>Neon</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <InputGroup className="rounded-full sm:flex hidden">
                        <InputGroupInput placeholder="Search Documentation..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header