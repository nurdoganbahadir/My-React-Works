import React, { useEffect, useState } from "react";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getBooks = async () => {
    const response = await axios.get(url);
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <AddBook />
      <BookList />
    </>
  );
};

export default HomePage;
