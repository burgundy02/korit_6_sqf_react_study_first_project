import React from 'react';
import { MdNextWeek } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */

function SearchParamsStudy(props) {
    const [searchParams, setsearchParams ]= useSearchParams();
    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));

    // setsearchParams({...searchParams, c: 30});

    const handleClcik = () => {
        const keys = searchParams.keys();
        let newParams = {}
        
        for(let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }

        setsearchParams({...newParams, c: 30});
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClcik}>c=30추가</button>
        </div>
    );
}

export default SearchParamsStudy;