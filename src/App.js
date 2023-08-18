import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DropDown from "./components/DropDown";
import Button from "./components/Button";
import MyContext from "./hooks/myContext";

import Table from "./components/Table";

export default function App() {
  const { type, genre, handleTypeAction, handleGenreAction, getData, data } =
    MyContext();

  const movieData = data.data;

  //configurating for sortable table
  const config = [
    { label: "S.No", render: (movie) => movie.id },
    { label: "Movie", render: (movie) => movie.name },
    {
      label: "Year",
      render: (movie) => movie.year,
      sortValue: (movie) => movie.year,
    },
    {
      label: "Rating",
      render: (movie) => movie.rating,
      sortValue: (movie) => movie.rating,
    },
    {
      label: "Download",
      render: (movie) => <a href={movie.url}>Download/Watch</a>,
    },
  ];

  //this two arrays has nothing to do with the sortable table these are for dropdown.
  const movieType = [
    { name: "Hollywood", id: 1 },
    { name: "Bollywood", id: 2 },
    { name: "Korean", id: 3 },
    ,
    { name: "Tollywood", id: 4 },
  ];
  const genreType = [
    { name: "Action", id: 1 },
    { name: "Thriller", id: 2 },
    { name: "Comedy", id: 3 },
    { name: "Horror", id: 4 },
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className="action">
          <DropDown
            options={movieType}
            value={type}
            onChange={handleTypeAction}
          />
          <DropDown
            options={genreType}
            value={genre}
            onChange={handleGenreAction}
          />
          <Button onClick={getData}>Search</Button>
        </div>
        {/* {data.data &&
          data.data.map((d) => {
            return <p>{d.name}</p>;
          })} */}
        <div className="vpn-note">
          <span>Note:Use Vpn if download link does not open.</span>
        </div>
        {data.data && <Table data={movieData} config={config} />}
      </div>
    </div>
  );
}
