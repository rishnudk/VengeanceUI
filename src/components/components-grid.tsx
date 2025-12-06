"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MousePointerClick } from 'lucide-react'
import { motion } from 'framer-motion'

const components = [
    {
        title: "Animated Button",
        description: "A button with a shiny border and text reveal effect, perfect for calls to action.",
        href: "/docs/animated-button",
        icon: MousePointerClick
    },
    // Add more components here as you build them
]

export const ComponentsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {components.map((component, idx) => (
                <Link href={component.href} key={idx} className="block group relative">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="h-full p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <component.icon className="w-5 h-5 text-primary" />
                            </div>

                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {component.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {component.description}
                            </p>

                            <div className="flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Component <ArrowRight className="w-3 h-3 ml-1" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}
