import React, {useState} from "react";


import './index.scss'

const Pagination = ({paginationButtonsCount, currentPage, setCurrentPage}) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const prev = 'prev';
    const next = 'next';

    const onSelectPageDirectly = (e) => {
        const buttonInner = e.target.innerText;

        if (currentPage === buttonInner) {
            return;
        }
        setCurrentPage(+buttonInner);
    }

    const onPrevPage = (e) => {
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = (e) => {
        setCurrentPage(currentPage + 1);
    }

    console.log(currentPage)

    return (
        <div className='pagination'>
            <button className={`pagination__${prev}`}
                    onClick={onPrevPage}
                    disabled={paginationButtonsCount.length === 1 || currentPage === 1}
            >{prev}</button>
            {
                paginationButtonsCount.map((btn, i) => (
                    <button key={i}
                            className={`pagination__btn ${currentPage === i + 1 && 'active'}`}
                            onClick={onSelectPageDirectly}
                    >{btn}</button>
                ))
            }
            <button className={`pagination__${next}`}
                    onClick={onNextPage}
                    disabled={paginationButtonsCount.length === 1 || currentPage === paginationButtonsCount[paginationButtonsCount.length - 1]}
            >{next}</button>
        </div>
    )
};

export default Pagination;
