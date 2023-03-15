import SearchPopup from "./searchComponent/SearchPopup";
import SearchList from "./searchComponent/SearchList";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Search = () => {
  // style for search
  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 2.5fr",
    width: "1000px",
    margin: "auto",
    gap: "20px",
    padding: '40px'
  };
  return (
    <>
      <Navbar />
      <div style={styles}>
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </>
  );
};

export default Search;
