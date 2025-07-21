import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import { fascinate, sofia } from '@/components/fonts/fonts'

export default function Home() {
	return (
		<div className={`${fascinate.variable} ${sofia.variable} bg-background`}>
			<NavBar />
			<Hero />
			<Footer />
		</div>
	)
}