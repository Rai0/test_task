import React, { useEffect, useState, useRef } from 'react';
import { useResponse } from './hooks/useResponse.js';
import GetAPIData from './components/API/GetAPIData'
import RecordsList from './components/UI/Table.jsx'
import Select from './components/UI/Select.jsx'
import Pagination from './components/UI/Pagination.jsx'

function App() {
    const [row, setRow] = useState ([])
    const [pageSize, setPageSize] = useState (2);
    const [page, setPage] = useState (1);
    const [totalPages, setTotalPages] = useState (0);
    const lastElement = useRef()
    const columnName = useState (['Название', 'Дата', 'Количество', 'Расстояние'])
    // const sortedTableRow =

    const [responseTable, isTableLoading, loadError] = useResponse (async (pageSize, page) => {
        const response = GetAPIData.getAll (pageSize, page);
        response.then (data => {setTotalPages (Math.ceil (data.count / pageSize))})
        response.then (data => { setRow ([...data.results]) })
    })

    useEffect(() => {
        responseTable (pageSize, page);
    }, [ pageSize, page ])
    
    const changePage = (page) => {
        setPage (page)
    }

    return (
        <div className='app'>
            <div className='select__wrapper'>
                {/* <Select /> */}
            </div>
            <div className = 'table__wrapper'>
                <table className = 'table'>
                    <thead>
                        <tr>
                        {/* <th scope="col" onClick={() => {useSortData}}>Название</th> */}
                        <th scope="col">Название</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Расстояние</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RecordsList allTableRecords= {row}/>
                    </tbody>
                </table>
            </div>
            <div className= 'paginagin'>
                <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
            </div>
        </div>
    )
}

export default App;