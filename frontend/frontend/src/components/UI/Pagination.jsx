import React, {useEffect, useState} from "react";

const Pagination = ({totalPages, page, changePage}) => {
    const [correctPage, setCorrectPage] = useState (page)

    function nextPage(){
        if ((correctPage + 1 <= totalPages)){
            setCorrectPage (correctPage + 1)
        }
    }

    function beforePage () { 
        if ((correctPage - 1) > 0){
            setCorrectPage (correctPage - 1)
        }
    }

    function firstPage () {
        setCorrectPage (1)
    }

    function lastPage (){
        setCorrectPage (totalPages)
    }

    useEffect (() => {
        changePage (correctPage)
    }, [correctPage])

    return (
        <div className= 'pagination__wrapper'>
            <button type="button" class="btn btn-secondary" onClick={firstPage}>first page</button>
            <button type="button" class="btn btn-secondary" onClick={beforePage}>-</button>
            <div class="score">{correctPage}</div> 
            <button type="button" class="btn btn-secondary" onClick={nextPage}>+</button>
            <button type="button" class="btn btn-secondary" onClick={lastPage}>last page</button>
        </div>
    )
}

export default Pagination;