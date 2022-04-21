import React, {useEffect, useState} from 'react';
import {useResponse} from './hooks/useResponse.js';
import GetAPIData from './components/API/GetAPIData'
// import RecordsList from './components/UI/Table.jsx'



function App() {
    const [row, setRow] = useState ([])
    const [pageSize, setPageSize] = useState(2);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // const [responseTable, isTableLoading, loadError] = useResponse (async (pageSize, page) => {
    //     const response = GetAPIData.getAll (pageSize, page);
    //     setRow ([...row, ...response.results])
    //     const totalCount = response.count 
    //     setTotalPages (Math.ceil (totalCount / pageSize));
    // })
    
    useEffect (() => {
        console.log ('useEffect')
    }, []);

    useEffect ( async (pageSize, page) => {
        const response = GetAPIData.getAll (pageSize, page);
        console.log ("response " , response.data)
        setRow ([...row, ...response.results])
        const totalCount = response.count 
        setTotalPages (Math.ceil (totalCount / pageSize));
    }, []);
    

    return (
        <div>
            {/* <button onClick= {getRows}>Получить запись</button> */}
                <p>hi</p>
            {/* <RecordsList allTableRecords= {row}/> */}
        </div>
    )
}

export default App;