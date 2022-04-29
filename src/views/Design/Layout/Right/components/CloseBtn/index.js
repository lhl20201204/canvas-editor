import React, { useContext } from "react";
import { PageIndexContext } from "../../context";
export default function CloseBtn() {
  const { pageIndex, setPageIndex } = useContext(PageIndexContext);

  return (
    <div
      className="close"
      onClick={() => setPageIndex(pageIndex === -1 ? 0 : -1)}
    >
      {pageIndex > -1 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.25"
            d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.25"
            d="M8.83 7 6.7 4.88a1 1 0 0 0-1.42 0L3.17 7"
          ></path>
        </svg>
      )}
    </div>
  );
}
