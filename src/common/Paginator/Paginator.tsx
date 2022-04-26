import React, {useState} from 'react';
import s from "../Paginator/Paginator.module.css";
import cn from "classnames";

export type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanged: (pageNumber: number) => void
    portionSize?: number,
}
export const Paginator = ({totalItemsCount, pageSize,  onPageChanged = x => x,currentPage=1, portionSize = 10}: PaginatorType) => {


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
        <div className={s.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
    { portionCount > portionNumber &&
    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
</div>
        // <div className={s.paginator}>
        //     {
        //         portionNumber > 1 &&
        //         <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        //     {pages
        //         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        //         .map((p) => <span className={s.selectedPage}
        //                           key={p}
        //                           onClick={(e) => {
        //                               onPageChanged(p);
        //                           }}>{p}</span>)
        //     }
        //     {
        //         portionCount > portionNumber &&
        //         <button onClick={() => {
        //             setPortionNumber(portionNumber + 1)
        //         }
        //         }>NEXT</button>
        //     }
        // </div>
    )
};
