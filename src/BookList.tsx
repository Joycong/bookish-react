// BookList.tsx
import React from 'react';
import { Book } from './types'; // 타입 불러오기

// BookList 컴포넌트 정의
const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div data-test='book-list'>
      {books.map((book, index) => (
        <div className='book-item' key={index}>
          <h2 className='title'>{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
