import Footer from '@/components/footer'
import Hero from '@/components/hero'
import MyAnimeList from '@/components/myanimelist'
import NavBar from '@/components/navbar'
import { fascinate, sofia } from '@/components/fonts/fonts'

export default function Home() {
	return (
		<div className={`${fascinate.variable} ${sofia.variable} bg-background`}>
			<NavBar />
			<Hero />

			{/* top animes */}
			{/* top anime movies */}
			{/* top manga */}
			{/* wishlist */}

			<MyAnimeList />

			{/* contact */}
			<Footer />
		</div>
	)
}