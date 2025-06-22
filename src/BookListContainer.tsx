import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "./BookList";
import { useBooks } from './useBooks';

const BookListContainer = () => {
  const { books, loading, error } = useBooks();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>wrong!</div>;
  }

  return <BookList books={books} />;
};

export default BookListContainer;