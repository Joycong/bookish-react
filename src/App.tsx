import { Typography } from '@mui/material';
import { Book } from './types'; // 타입 불러오기
import BookList from './BookList'; // 새 컴포넌트 가져오기
import BookListContainer from './BookListContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {  
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}


export default App;


