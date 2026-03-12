// import Footer from '@/components/footer'
// import MyAnimeList from '@/components/myanimelist'
// import NavBar from '@/components/navbar'
// import Stats from '@/components/stats'
// import TopFour from '@/components/favourites'
// import type { Poster } from '@/components/favourites'
import Akira from '@/components/akira'
import Frieren from '@/components/frieren';
import History from '@/components/history';
import PerfectBlue from '@/components/perfectblue';

// const animes: Poster[] = [
//     { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
//     { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
//     { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
//     { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
// ];

const Home = () => {
	return (
		<div className="w-full h-full bg-white">
			<History />
			<Akira />
			<PerfectBlue />
			<Frieren />
			{/* <NavBar />
			<Stats />
			<div className='flex items-center justify-center w-full'>
				<TopFour posters={animes} title="Favourite Anime" />
			</div>
			<MyAnimeList />
			<div className='flex items-center justify-center w-full'>
				<TopFour posters={animes} title="Favourite Anime Movies" />
			</div>

			<div className='flex items-center justify-center w-full'>
				<TopFour posters={animes} title="Favourite Manga" />
			</div>

			<Footer /> */}
		</div>
	)
}

export default Home;
