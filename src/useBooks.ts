// useBooks.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Book } from './types';

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);           // 책 목록 상태
  const [loading, setLoading] = useState<boolean>(false);   // 로딩 상태
  const [error, setError] = useState<boolean>(false);       // 에러 상태

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);    // 에러 초기화
      setLoading(true);   // 로딩 시작
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);    // 책 목록 저장
      } catch (e) {
        setError(true);             // 에러 발생 시
      } finally {
        setLoading(false);          // 요청 끝났으니 로딩 종료
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
}

