import { Fascinate } from 'next/font/google'
import { Sofia_Sans_Extra_Condensed } from 'next/font/google'

export const fascinate = Fascinate({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-fascinate'
})

export const sofia = Sofia_Sans_Extra_Condensed({
    subsets: ['latin'],
    weight: '600',
    variable: '--font-sofia'
})