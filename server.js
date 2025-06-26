const jsonServer = require('json-server')       // json-server 모듈 불러오기 (Express 기반 API 서버 기능 제공)
const server = jsonServer.create()              // 새 Express 서버 만들기
const router = jsonServer.router('db.json')     // db.json 파일을 기반으로 REST API 라우터 생성
const middlewares = jsonServer.defaults()       // 기본 미들웨어들: CORS 허용, 로그 출력, 정적 파일 서빙 등

// 커스텀 초기화 로직: 특정 조건일 때 DB를 비움
server.use((req, res, next) => {
    // 만약 DELETE 요청이고 URL에 `_cleanup` 쿼리 파라미터가 있다면?
    if (req.method === 'DELETE' && req.query['_cleanup']) { 
        const db = router.db            // 현재 메모리상의 데이터베이스 객체 가져오기
        db.set('books', []).write()     // books 항목을 빈 배열로 덮어쓰기 → 책 목록 초기화
        res.sendStatus(204)             // 응답: 성공했지만 내용 없음 (HTTP 204 No Content)
    }
    // 해당 조건이 아니라면 다음 미들웨어나 라우터로 넘김
    else {
        next()
    }
})

server.use(middlewares)     // 기본 미들웨어 등록
server.use(router)          // REST API 라우터 등록

// 8081 포트에서 서버 실행 시작
server.listen(8081, 'localhost', () => {
  console.log('JSON Server is running on http://localhost:8081');
});
