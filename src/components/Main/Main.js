import { useState } from "react";
import "./Main.css";

const Main = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitSearh = (e) => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <section className="main">
      <div className="main__title-paragraph">
        <h1 className="main__title">What's going on in the world?</h1>

        <p className="main__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="main__search-button-input">
        <form
          onSubmit={onSubmitSearh}
          className="main__search-button-input main__form"
        >
          <input
            className="main__search-input-container"
            placeholder="Enter topic"
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            required
          ></input>
          <button className="main__search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Main;
