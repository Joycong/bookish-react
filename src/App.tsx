import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import { Book } from './types'; // 타입 불러오기
import BookList from './BookList'; // 새 컴포넌트 가져오기


function App() {
  const books: Book[] = [
    { name: 'Refactoring' },
    { name: 'Domain-driven design' }
  ];

  return (
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} /> {/* 분리된 컴포넌트 사용 */}
    </>
  );
}




export default App;


