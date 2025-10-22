import Footer from '@/components/footer'
import MyAnimeList from '@/components/myanimelist'
import NavBar from '@/components/navbar'

const Home = () => {
	return (
		<div className="w-full h-screen overflow-hidden">
			<NavBar />

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

export default Home;
