import Aux from '../../hoc/Auxx'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from '../../config/tmdb'
const HomeScreen = (props) => {
    return (
        <Aux>
            <div className="homeScreen">
                <Nav />
                <Banner />
                
                {/* {banner} */}
                {/* {Rows} */}
                <Row title={`NETFLIX ORIGINALS`} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={false}/>
                <Row title={`Trending Now`} fetchUrl={requests.fetchTrending} isLargeRow={true}/>
                <Row title={`Top Rated`} fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
                <Row title={`Actions`} fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
                <Row title={`Comedy`} fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
                <Row title={`Romantic`} fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
                <Row title={`Horror`} fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>

            </div>
        </Aux>
    )
}

export default HomeScreen