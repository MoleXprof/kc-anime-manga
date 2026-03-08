import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'
import MyAnimeList from '@/components/myanimelist'
import NavBar from '@/components/navbar'
import Stats from '@/components/stats'
import TopFour from '@/components/topfour'

const Home = () => {
	return (
		<div className="w-full h-full bg-gray-200">
			<NavBar />
			<Stats />
			<div className='flex items-center justify-center w-full'>
				<TopFour />
			</div>

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
