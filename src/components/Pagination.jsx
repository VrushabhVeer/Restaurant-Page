import React from 'react'

const Pagination = ({page, setPage}) => {
    return (
        <div>
            <div className='pages'>
                <button disabled={page === 1} onClick={() => setPage(page - 1)} >Previous</button>
                <button disabled={page >= 3} onClick={() => setPage(page + 1)} >Next</button>
            </div>
        </div>
    )
}

export default Pagination