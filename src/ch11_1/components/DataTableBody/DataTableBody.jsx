import { useEffect, useRef, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId }) {
    const [ viewProducts, setViewProducts ] = useState([]);
    const [ checkedAll, setCheckedAll ] = useState(false);

    useEffect(() => {
        if(mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [products, mode]);

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) {
            setCheckedAll(false);
        }else {
            setCheckedAll(true);
        }
    }, [viewProducts]);

    useEffect(() => {
        if(isDeleting) {
            setProducts([ ...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                }) 
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting]);

    useEffect(() => {
        if(mode === 2) {
        // product에 있는 것들 중 체크가 돼 있는 걸 새 배열에 담고, 비구조 할당으로 selectedProduct에 0번 부터 넣는다.
        const [selectedProduct] = viewProducts.filter(product => product.isChecked);

        // selectedProduct에 체크가 안 돼 있는 것만 들어있다면, 0을 넣고 아니면 editProductId에 selectedProduct에 들어있는 객체의 아이디를 넣어라 -> editProductId 상태변화
        setEditProductId(!selectedProduct ? 0 : selectedProduct.id);
    }
        // 체크하고, 풀면 
    },[viewProducts]);

    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({...product, isChecked: false})) ]);
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({...product, isChecked: true})) ]);
            } else {
                resetViewProducts();
            }
            return !checked;
        });
    }

    const handleCheckedChange = (e) => {
        if(mode === 2) {
            setViewProducts(viewProducts => [ 
                ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                }) 
            ]);
        }

        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                }) ]
            });
        }

    }

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
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
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked} 
                                        onChange={handleCheckedChange}
                                        value={product.id}
                                    />
                                </th>
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