import { Fascinate, Lacquer, Playfair_Display, Potta_One, Sofia_Sans_Extra_Condensed } from 'next/font/google'

export const fascinate = Fascinate({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-fascinate'
})

export const lacquer = Lacquer({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lacquer'
})

export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-playfair'
})

export const pottaone = Potta_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-potta-one'
})

export const sofia = Sofia_Sans_Extra_Condensed({
    subsets: ['latin'],
    weight: '600',
    variable: '--font-sofia'
})