import { useEffect, useRef, useState } from "react";
import "./style.css"
import { isEditable } from "@testing-library/user-event/dist/utils";
// 바디부분: 헤더 밑 부분

// 상품관리 페이지의 체크박스 전체 선택되게 만들기(띄엄 띄엄 선택하고 전체 선택 버튼 눌러도 다 선택되는 기능도 만들기)
// 1
function DataTableBody({ mode, products, setProducts, isDeleting, setDeleting }) {
    // 17: 체크 삭제
    // 1
   const [viewProducts, setViewProducts] = useState([]);
    // 1
   const [checkedAll, setCheckedAll] = useState(false);

    // 18: 한 번 리턴된 이후 2
    useEffect(() => {
        // isDeleting이 삭제 
        if(mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    // products가 변하거나(추가, 수정, 삭제 됐을 때) mode 0,1,2,3이 변했을 때 다시 동작
    }, [products, mode]);

    // 21: viewProducts의 상태가 변했을 때
    // 3
   useEffect(() => {
        const checkStates = viewProducts.map(product => product.ischecked);
    // map을 돌리는 중 하나라도 false가 체크 돼 있으면 /includes: false가 하나라도 존재하는지 -> 하나라도 체크가 풀리면 전체 체크 해제
        if(checkStates.includes(false)) {
            // 전부 false로 바꾸기
             setCheckedAll(false);
         }else {
            // 아니면 전부 true로 바꾸기
             setCheckedAll(true);
         }
        //  isChecked가 하나라도 바뀌면
   }, [viewProducts]);
   
   useEffect(() => {
    if(isDeleting) {
        setProducts([...viewProducts
            // 체크가 false인 것들만(체크안된 것들만) 걸러냄
            .filter(viewProduct => viewProduct.isChecked === false)
            .map(viewProduct => {
                // 새로만들어진 배열
                const {isChecked, ...product} = viewProduct;
                return product;
        })
    ]);
        setMode(0);
        setDeleting(false);
    }
   }, [isDeleting])

    // 19: 전부 반복 돌려서 false로 바꾸기
    const resetViewProducts = () => {
        // DataTableBody의 매개변수 props로 받아온 products로 map돌려서 -> isChecked(목록에 있는 각각의 체크박스들)의 체크를 해제
        // 2-1: 값인 배열을 넣겠다
        setViewProducts([...products.map(product => ({...product, isChecked: false})) ]);
       }

       // 20: 체크의 속성이 바뀌었을 때(체크에 이벤트가 발생했을 때)
       const handleCheckedAllChange =(e) => {
        // cheked: 체크유무
        // 전체 선택, 해제
        setCheckedAll(checked => {
        // checked가 false, 체크가 안되어 있는걸 map을 돌려서 목록에서 체크가 되게 바꿔준다.
            if(!checked) {
                // 전체 반복 돌리면서 checked를 true로 바꿈
                setViewProducts([...products.map(product => ({...product, isChecked: true})) ]);
                // return 안씀(언마운트가 돼서)
                // 반대로 checked가 true면 체크 전부 해제
            } else {
                // 전부 false로 바꿈
                resetViewProducts();
            }
            return !checked;
        });
    }

   // 18 -> 22
   const handleCheckedChange = (e) => {
    // 22 모드 수정
    // viewProducts배열이라서 리턴도 배열이어야 함
    if(mode === 2) {
        // 
        setViewProducts(viewProducts => {
            return [ ...viewProducts.map(product => {
                // (e.target.value: 내가 체크한 목록의 아이디)가 product의 id로 있다면 
                if(product.id === parseInt(e.target.value)) {
                    return {
                        ...product,
                        // 체크를 눌렀을 때 false였다면 true로 변하고 true라면 false로 변해야 함, 그냥 true라고 넣어두면 체크는 할 수 있지만 체크를 해제할 수는 없다. 그래서 앞에 not을 붙여서 체크하고 해제하고를 할 수 있게 한다.
                        isChecked: !product.isChecked
                    }
                }
                return {
                    // 자기 자신외에 나머지는 false로 바꿈: 내가 체크한거 빼고 다른 건 체크풀리게 함 -> 수정은 중복 선택되면 안됨
                    ...product,
                    isChecked: false
                }
            }) ]
        });
    }

    // 22 모드 삭제
    if(mode === 3) {
        setViewProducts(viewProducts => {
            return [ ...viewProducts.map(product => {
                if(product.id === parseInt(e.target.value)) {
                    return {
                        ...product,
                        // 눌렀을 때, 풀었을 때 체크되고 풀리게
                        isChecked: !product.isChecked
                    }
                }
                // 체크한 얘만 위에서 바뀌고 -> 나머지는 그대로 유지 / 만약에 위에서 체크가 돼 있었다면 그것도 그래도 둠/ 삭제는 중복 가능
                return product;
            }) ]
        });
    }
}
    return ( 
        <div className="table-body">
            <table>
                {/* 8 */}
                {/* <thead>: 상품코드, 상품명, 사이즈, 색상, 가격 부분 */}
                <thead>
                    <tr>
                        {/* 다중선택 삭제 때 사용할 3이 아니면(3이 아니면 전부 true) */}
                        <th>
                            <input type="checkbox" 
                            disabled={mode !== 3} 
                            onChange={handleCheckedAllChange}
                            checked={checkedAll}
                            />
                            </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                {/* 8 */}
                {/*<tbody>: 1, a, s, red, 10000등의 목록 뜨는 부분 */}
                <tbody>
                    {
                        // 8-1
                        // 9 products.map : 객체(product: 배열안에 든 배열 하나 하나)가 든 배열(products)을 반복 돌린다 
                        // 1-1
                        viewProducts.map(product => (
                        // 9-1 리턴: 리턴값은 하나여야 함 -> <tr>을 리턴
                        // map돌릴 때 키 값 무조건 잡기: 키 값은 중복없는 고유의 값으로 설정(id는 고유의 값으로 적절)
                        <tr key={product.id}>
                            {/* 체크박스가 조회모드, 추가모드일 때 체크 못하게(disabled)하겠다. */}

                            {/* 17: checked={product.isChecked} */}
                            <th>
                                <input 
                                type="checkbox"
                                 disabled={mode === 0 || mode === 1} 
                                //  ture, false
                                 checked={product.isChecked}
                                //  18
                                 onChange={handleCheckedChange}
                                 value={product.id}
                                 />
                            </th>
                            {/* 0번 인덱스 부터 그 객체의 id, productName등등을 리턴한다: 목록 한 줄 한 줄을 <tr>로 만듦  */}
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.size}</td>
                            <td>{product.color}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
}       
export default DataTableBody;