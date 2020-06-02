import React from "react";

import {Button} from "../index";
import {BUTTONS} from "../../configs/constants";


const Pagination = ({paginationButtonsCount, currentPage, setCurrentPage}) => {
    const {paginationButton} = BUTTONS
    const paginationLength = paginationButtonsCount.length;
    const prev = 'prev';
    const next = 'next';

    const onSelectPageDirectly = (e) => {
        const buttonInner = e.target.innerText;

        if (currentPage === buttonInner) {
            return;
        }
        setCurrentPage(+buttonInner - 1);
    }

    const onPrevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className='pagination'>
            <Button value={prev}
                    size={paginationButton.size}
                    variant={paginationButton.variant}
                    onClick={onPrevPage}
                    disabled={paginationLength === 1 || currentPage === 0}
            />
            {
                paginationButtonsCount.map((btn, i) => (
                    <Button key={i}
                            value={btn}
                            size={paginationButton.size}
                            variant={paginationButton.variant}
                            className={paginationButton.class}
                            selectedButtonValue={currentPage + 1}
                            onClick={onSelectPageDirectly}
                    />
                ))
            }
            <Button value={next}
                    size={paginationButton.size}
                    variant={paginationButton.variant}
                    onClick={onNextPage}
                    disabled={paginationLength === 1 || currentPage === paginationButtonsCount.length - 1}
            />
        </div>
    )
};

export default Pagination;
