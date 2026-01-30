import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'
import MyAnimeList from '@/components/myanimelist'
import NavBar from '@/components/navbar'

const Home = () => {
	return (
		<div className="w-full h-screen overflow-hidden">
			<NavBar />

			{/* top animes */}
			{/* top anime movies */}
			{/* top manga */}
			{/* watchlist */}
			{/* overrated animes */} {/* maybe */}

			<Carousel />
			<MyAnimeList />

			<Gallery />

			<Footer />
		</div>
	)
}

export default Home;
