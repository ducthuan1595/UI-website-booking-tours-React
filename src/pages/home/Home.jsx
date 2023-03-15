//////////////////////////////////////
import Navbar from '../navbar/Navbar';
import Header from "./header/Header";
import Cities from './container/Cities';
import TypeHotels from './container/TypeHotels';
import ListHotel from './container/ListHotel';
import Form from "../form/Form";
import Footer from "../footer/Footer";

const Home = () => {
	// set style for title
	const styles = {
		width: '1000px',
		padding: '30px 0',
		margin: 'auto'
	}

	return (
		<div>
			<Navbar />
			<Header />
			<Cities />
      <h2 style={styles}>Browse by property type</h2>
			<TypeHotels />
      <h2 style={styles}>Homes guests love</h2>
			<ListHotel />
			<Form />
			<Footer />
		</div>
	);
};

export default Home;
