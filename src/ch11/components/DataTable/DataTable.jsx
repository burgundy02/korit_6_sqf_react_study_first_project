import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/smapleProducts";

function DataTable() {
    //15
    const [isLoad, setLoad] = useState(false);

    // 부모가 가지고 있는 mode를 자식인 DataTableHeader, DataTableBody가 가지고 있다.
    const [mode, setMode] = useState(0);  // 0 =조회, 1= 추가, 2=수정, 3=삭제 

    // 1-1: 객체가 든 배열을 products에 넣음
    const [products, setProducts] = useState([...SAMPLE_PRODUCTS]);

    const [isDeleting, setDeleting] = useState(false);


    // 14: 새로고침해도 추가,수정,삭제한 내용 유지
    // 페이지가 최초의 한 번 열렸을 때
    useEffect(() => {
        // 먼저 로컬스토리지에서 가지고 왔을 때(키 값"products") 비어있으면 빈 배열 넣음
        const lsProducts = localStorage.getItem("products");
        // null이면
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
        //15
        // 최초로드가 아니라면 true
        setLoad(true);
    }, []);

    //14
    useEffect(() => {
        // 로컬스토리지 수정/ key값: "products", value는 json형태로 -> products의 객체들의 상태가 변했을 때 로컬스토리지에 반영하기
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return ( 
        // 2
        // 보더라인 표시 안해서 안보임 dataTable안에 들어있는 div: 이 "table-main-container"디비전안에 DataTableHeader, DataTableBody를 감싸 넣었지만 보더라인 표시 안해서 화면에서는 감싼 디비전은 안보임
        <div className="table-main-container">
            {/* 헤더 부분: 상품명, 사이즈, 색상, 가격 / 추가, 수정 삭제 부분 */}
            {/* 12-1: setProducts넣기 */}
            <DataTableHeader mode={mode} setMode={setMode} setProducts={setProducts} setDeleting={setDeleting}/>

            {/* 바디부분: 헤더 밑 목록 뜨는 부분 */}
            <DataTableBody mode={mode} setMode={setMode} products={products} setProducts={setProducts} isDeleting={isDeleting} setDeleting={setDeleting}/>
        </div>
     );
}
export default DataTable;