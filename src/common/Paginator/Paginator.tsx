import React, {useState} from 'react';
import s from "../Paginator/Paginator.module.css";

export type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanged: (pageNumber: number) => void
    portionSize?: number,
}
export const Paginator = ({ totalItemsCount,
                              pageSize,
                              onPageChanged = x => x,
                              currentPage = 1,
                              portionSize = 10
                          }: PaginatorType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination_wrap}>
            {portionNumber > 1 &&
            <button className={s.prevBtn} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((page, ind) => {
                    return <p onClick={() => {
                        onPageChanged && onPageChanged(page)
                    }} key={ind} className={currentPage === page ? s.selected : s.page}>{page}</p>
                })}
            {portionCount > portionNumber &&
            <button className={s.nextBtn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
};
