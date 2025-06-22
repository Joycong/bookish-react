import { Typography } from '@mui/material';
import { Book } from './types'; // 타입 불러오기
import BookList from './BookList'; // 새 컴포넌트 가져오기
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [books, setBooks] = useState<Book[]>([]); // 책 목록 상태 정의
  
  useEffect(() => {
    axios.get('http://localhost:8080/books').then(res => setBooks(res.data)); // 서버로 GET 요청
  }, [])

  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}


export default App;


