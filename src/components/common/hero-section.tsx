import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
    return (
        <section className='flex h-170 justify-center items-center'>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='rubik font-bold text-5xl xl:w-200 sm:auto text-center'>
                    Master Full-Stack Development with Next.js, Prisma, Zustand & PostgreSQL
                </h1>
                <p className='rubik font-normal text-md xl:w-250 sm:w-auto
                text-center text-muted-foreground'>Your ultimate resource for building modern, scalable web applications. Explore in-depth guides, practical examples, and step-by-step tutorials to take your Next.js projects from zero to production-ready using Prisma, Zustand, and PostgreSQL.</p>
                <div className='flex flex-row gap-2 flex-1'>
                <Button className='p-6 text-md' variant='default'>Get Started</Button>
                <Button className='p-6 text-md' variant='outline'>Learn More</Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection