import { useEffect, useReducer, useRef, useState } from "react";
import "./style.css"
import Swal from "sweetalert2";
// 헤더 부분: 상품명, 사이즈, 색상, 가격 / 추가, 수정 삭제 부분
                        // 상태변수와 메소드를 props로 넘길 수 있다.
                        // 12-1: setProducts넣기
function DataTableHeader({mode, setMode, product, setProducts, setDeleting}) {
    // 10-1
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    // 16-1: ref설정
    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
     };

    // 10
    const [inputData, setInputData] = useState({...emptyProduct});

    // 11
    const handleInputChange = (e) => {
        // 객체로 리턴하고 싶으면 소괄호로 묶는다-> 그러면 이 중괄호는 객체가 됨(중괄호 안에 return{}을 저렇게도 할 수 있음)
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    // 16: 엔터치면 포커스 다음으로 이동
    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
        if(e.target.name === "productName") {
            inputRef.size.current.focus();
        }

        if(e.target.size === "size") {
            inputRef.color.current.focus();
        }

        if(e.target.color === "color") {
            inputRef.price.current.focus();
        }

        if(e.target.price === "price") {
            // 확인버튼 호출
            handleSubmitClick();
            inputRef.productName.current.focus();

        }
    }
}

    const handleChangeModeClick = (e) => {
        // 4
        // e.target.value: value={1}/ value값이 문자열이라서 paseInt해줌: 숫자로 바꿔야 disabled가 인식함 -> mode의 상태가 0에서 1,2,3으로 상태 변화(상태변화하려면 setter 필요) -> 재렌더링
        setMode(parseInt(e.target.value)); 
    }

    // 6: 확인눌렀을 때 / 모드 숫자에 따라서 alert 다르게 줌 / 왜 1일 때만?
    const handleSubmitClick = () => {
        if(mode === 1) {
            // 13: 상품 상태 바꿈
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = 
                    productIds.length === 0 
                    ? 0 : Math.max.apply(null, productIds);

                return [...products, {...inputData, id:maxId + 1}];
            });
            // 15
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                // top-rigt도 가능
                position: "top-end",
                showConfirmButton: false,
                // 저장되는 시간 0.5초: 0.5초동안 alert창 뜸
                timer: 500
            });
            resetMode();
        }
        if(mode === 2) {
            alert("상품수정");
        }
        if(mode === 3) {
            // 삭제 눌렀을 때 products리스트에서 제거 돼야 함 / 클릭했을 때 바디에서 체크가 돼있는 애들의 아이디를 들고와야 됨
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"

            }).then(ressult => {
                if(ressult.isConfirmed) {
                    setDeleting(true);
                }
            });
            setDeleting
        }
        // setMode를 다시 0으로바꿈 -> 상태변화 재렌더링 -> 다시 돌아옴
        
    }

    // 7
    const handleCancelClick = () => {
        // setMode를 다시 0으로바꿈 -> 상태변화 재렌더링 -> 다시 돌아옴
        resetMode();
    }

    // (6): 초기화 시키기
    const resetMode = () => {
        setMode(0);
        setInputData({...emptyProduct});
    }

    return ( 
        <header className="table-header">
            <div className="input-group">
                {/* 3 */}
                {/* autoFocus: 새로고침했을 때 포커스 -> 첫 인풋에 포커스 됨*/}
                {/* mode가 상태라서 재렌더링 */}
                {/* 조회, 삭제일 때 disabled / 추가, 수정 때는 disabled 풀림 */}
                
                {/* 5: 재렌더링 되면서 disabled 적용 */}
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    // 12: 인풋에 name, value, onChange넣기
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    // 16-1: ref설정
                    ref={inputRef.productName}
                    autoFocus
                    />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                    />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3}
                    name="color"
                    value={inputData.color}
                    placeholder="색상"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                    />
                <input 
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="price"
                    value={inputData.price}
                    placeholder="가격"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                    />
            </div>
            <div>
                {
                    // 3
                    // mode가 0일때, 0에 not을 걸어서 true일 때) // 0, null은 false / 왜 && 씀?
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    // 3
                    // mode가 0일때, 0에 !!붙여서 false일 때 -> 1, 2, 3 -> 모드에 값이 있다면(0이 아니라면)-> 모드가 0이 아닐 때 띄우기
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button> 
                            <button onClick={handleCancelClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </header>
     );
}
export default DataTableHeader;