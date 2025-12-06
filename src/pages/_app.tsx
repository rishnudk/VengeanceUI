
import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { CommandMenu } from '@/components/command-menu'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CommandMenu />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
