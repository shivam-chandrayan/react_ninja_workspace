import React from "react";

export default function Pagination({ currPage, totalPages, onPageChange }) {
    let pages = Array.from(Array(totalPages).keys());
    pages = pages.map(page => page + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item + ${currPage <= 1 ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Previous" onClick={() => onPageChange(currPage - 1)}>
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pages.map(page => 
                    <li key={page} className={`page-item + ${page == currPage ? "active" : ""}`}>
                        <a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                )}
                <li className={`page-item + ${currPage >= totalPages ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Next" onClick={() => onPageChange(currPage + 1)}>
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}