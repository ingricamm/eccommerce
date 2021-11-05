import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listProducts } from "./actions/productActions";

export default function SearchBox(props) {
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, category] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // props.history.push(`/search/name/${searchKeyword}`);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  return (
    <form className="searchBox" onSubmit={submitHandler}>
      <input
        type="text"
        name="q"
        id="q"
        onChange={(e) => setSearchKeyword(e.target.value)}
      ></input>
      <button className="search-Btn" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}
