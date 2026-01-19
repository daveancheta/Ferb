"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <div className="flex justify-center">
            {theme === "dark" ?
                <button className="cursor-pointer" onClick={() => setTheme("light")}>
                    <Sun size={20} />
                </button>
                :
                <button className="cursor-pointer" onClick={() => setTheme("dark")}>
                    <Moon size={20} />
                </button>}
        </div>
    )
}

export default ModeToggle