import React from "react";

import './index.scss';

const DEFAULT = {
    ZERO: 0,
    ONE: 1
}

const Pagination = ({paginationButtonsCount, currentPage, setCurrentPage}) => {
    const paginationLength = paginationButtonsCount.length;
    const prev = 'prev';
    const next = 'next';

    const onSelectPageDirectly = (e) => {
        const buttonInner = e.target.innerText;

        if (currentPage === buttonInner) {
            return;
        }
        setCurrentPage(+buttonInner - DEFAULT.ONE);
    }

    const onPrevPage = () => {
        setCurrentPage(currentPage - DEFAULT.ONE);
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + DEFAULT.ONE);
    }

    return (
        <div className='pagination'>
            <button className={`pagination__${prev}`}
                    onClick={onPrevPage}
                    disabled={paginationLength === DEFAULT.ONE || currentPage === DEFAULT.ZERO}
            >{prev}</button>
            {
                paginationButtonsCount.map((btn, i) => (
                    <button key={i}
                            className={`pagination__btn ${currentPage === i && 'active'}`}
                            onClick={onSelectPageDirectly}
                    >{btn}</button>
                ))
            }
            <button className={`pagination__${next}`}
                    onClick={onNextPage}
                    disabled={paginationLength === DEFAULT.ONE || currentPage === paginationButtonsCount.length - DEFAULT.ONE}
            >{next}</button>
        </div>
    )
};

export default Pagination;
