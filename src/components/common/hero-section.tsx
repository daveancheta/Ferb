import React from 'react'
import { Button } from '../ui/button'
import { Sparkle } from 'lucide-react'
import { Badge } from '../ui/badge'

function HeroSection() {
    return (
        <section className="flex min-h-[85vh] items-center justify-center px-6">

            <div className="flex max-w-5xl flex-col items-center gap-8 text-center">
                <Badge variant="outline" className='flex flex-row items-center px-6 py-2'>
                    <Sparkle />
                    A Modern Guide to Learning Full-Stack Development
                </Badge>
                <h1 className="
                    font-bold
                    tracking-tight
                    leading-tight
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                ">
                    Learn Full-Stack Development with{" "}
                    <span className="text-primary">
                        Next.js, Prisma, Zustand & PostgreSQL
                    </span>
                </h1>

                <p className="
                    max-w-3xl
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-muted-foreground
                ">
                    Your ultimate resource for building modern, scalable web applications.
                    Explore in-depth guides, practical examples, and step-by-step tutorials
                    to take your Next.js projects from zero to production-ready using
                    Next.js, Prisma, Zustand, and PostgreSQL deployed on Neon.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Button className="h-11 px-6 text-sm font-medium">
                        Get Started
                    </Button>

                    <Button
                        variant="outline"
                        className="h-11 px-6 text-sm font-medium"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
