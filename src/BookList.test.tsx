// React Testing Library에서 필요한 함수 불러오기
import { screen, render } from "@testing-library/react";

// 테스트할 BookList 컴포넌트 불러오기
import BookList from "./BookList";

// 테스트 그룹 시작: 'BookList' 컴포넌트에 대한 테스트
describe('BookList', () => {

  // 실제로 책 제목이 화면에 잘 렌더링되는지 테스트
  it('render books', async () => {

    // 테스트용 props 데이터 정의
    const props = {
      books: [
        { id: 1, name: "Refactoring" },
        { id: 2, name: "Domain-driven design" },
      ]
    };

    // BookList 컴포넌트를 테스트 환경에 렌더링 (props 포함)
    render(<BookList {...props} />);
    
    // 화면에 있는 모든 heading 요소(h1~h6 등)를 찾음
    const headings = await screen.findAllByRole('heading');

    // headings 목록의 텍스트가 props의 책 이름과 일치하는지 확인
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name);
    });
  });
});
