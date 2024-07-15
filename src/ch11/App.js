import "./App.css";
import DataTable from "./components/DataTable/DataTable";

function App() {
    // 태그 들여쓰기 괄호
    // 전체 1번
    return (
        // 제일 밖에 디비전
        <div className="container">
            {/* 이 자식들을 row가 아닌colom 방향으로 배치하겠다*/}
            <h1>상품 관리 페이지</h1>
            <DataTable />
        </div>
    )
}
export default App;