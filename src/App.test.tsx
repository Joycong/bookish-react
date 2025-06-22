// 테스트 도구 import (화면 렌더링 & 요소 찾기)
import { render, screen } from '@testing-library/react';

// 테스트할 컴포넌트(App) import
import App from './App';

// 테스트 정의: "Bookish라는 글자가 화면에 있는가?"
it('renders bookish', () => {
  // 1. App 컴포넌트를 테스트 환경에 렌더링
  render(<App />);

  // 2. "Bookish"라는 텍스트가 있는 요소를 찾음 (대소문자 구분 없음)
  const heading = screen.getByText(/Bookish/i);

  // 3. 해당 요소가 실제 문서에 존재하는지 확인
  expect(heading).toBeInTheDocument();
});
