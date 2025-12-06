"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command as CommandPrimitive } from "cmdk"
import { Search, Moon, Sun, Laptop, FileText, Home, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function CommandMenu() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <CommandPrimitive.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-200 ease-in-out"
        >
            <div className="fixed left-1/2 top-1/2 w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-2 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center border-b border-neutral-100 px-3 pb-2 dark:border-neutral-800">
                    <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
                    <CommandPrimitive.Input
                        autoFocus
                        placeholder="Type a command or search..."
                        className="flex h-11 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50"
                    />
                </div>

                <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                    <CommandPrimitive.Empty className="py-6 text-center text-sm text-neutral-500">
                        No results found.
                    </CommandPrimitive.Empty>

                    <CommandPrimitive.Group heading="General" className="overflow-hidden px-2 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => router.push("/docs/components-overview"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Components</span>
                        </CommandPrimitive.Item>
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => router.push("/"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </CommandPrimitive.Item>
                    </CommandPrimitive.Group>

                    <CommandPrimitive.Group heading="Components" className="overflow-hidden px-2 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => router.push("/docs/animated-button"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <ArrowRight className="mr-2 h-4 w-4" />
                            <span>Animated Button</span>
                        </CommandPrimitive.Item>
                    </CommandPrimitive.Group>

                    <CommandPrimitive.Group heading="Theme" className="overflow-hidden px-2 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => setTheme("light"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light</span>
                        </CommandPrimitive.Item>
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => setTheme("dark"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark</span>
                        </CommandPrimitive.Item>
                        <CommandPrimitive.Item
                            onSelect={() => runCommand(() => setTheme("system"))}
                            className="relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50"
                        >
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>System</span>
                        </CommandPrimitive.Item>
                    </CommandPrimitive.Group>
                </CommandPrimitive.List>
            </div>
        </CommandPrimitive.Dialog>
    )
}
