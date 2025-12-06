
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ModeToggle } from './src/components/mode-toggle'

const config: DocsThemeConfig = {
    logo: <span>Vengeance UI</span>,
    project: {
        link: 'https://github.com/Ashutoshx7/VengeanceUI',
    },
    chat: {
        link: 'https://discord.com',
    },
    docsRepositoryBase: 'https://github.com/Ashutoshx7/VengeanceUI/tree/main',
    sidebar: {
        defaultMenuCollapseLevel: 3,
        toggleButton: false,
    },
    navbar: {
        extraContent: <ModeToggle />
    },
    themeSwitch: {
        component: null
    },
    navigation: {
        prev: true,
        next: true,
    },
    footer: {
        content: <p>© {new Date().getFullYear()} Vengeance UI. All rights reserved.</p>,
    },
}

export default config
