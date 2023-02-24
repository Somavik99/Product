import React from "react";
import "./Pagination.css";
const PaginationPage = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="page_style">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : " "}
          >
            {page}
          </button>
        );
      })}
      </div>
    </div>
  );
};

export default PaginationPage;
