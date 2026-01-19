import Link from "next/link"
import { HyperText } from "../ui/hyper-text"
import ModeToggle from "../mode-toggle"
import { Input } from "../ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Search } from "lucide-react"

function Header() {
    return (
        <header className="sticky inset-0 backdrop-blur bg-background/90
    dark:bg-background/90 border-b-2 m-0">
            <div className="flex justify-between mx-30 py-2 items-center">
                <div className="flex flex-row items-center gap-8">
                    <h1 className="sekuya font-extrabold uppercase 
                    purple-ferb">
                        <HyperText className="text-2xl">ferb</HyperText>
                    </h1>

                    <div className="flex flex-row gap-2 text-muted-foreground 
                    text-sm items-center">
                        <Link href="" className="">Documentation</Link>
                        <Link href="">Course</Link>
                        <Link href="">Next.js</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <InputGroup className="rounded-full">
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