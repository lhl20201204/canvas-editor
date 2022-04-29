import React from "react";
export const tabs = [
  {
    name: "模版",
    id: 0,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19.5 10V5a.5.5 0 0 0-.5-.5h-4.5V10h5zm0 1.5h-5v8H19a.5.5 0 0 0 .5-.5v-7.5zm-6.5-7H5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h8v-15zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z"
        ></path>
      </svg>
    ),
  },
  {
    name: "素材",
    id: 1,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        ></path>
      </svg>
    ),
  },
  {
    name: "上传",
    id: 2,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"
        ></path>
      </svg>
    ),
  },
  {
    name: "文字",
    id: 3,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 5.5h-5.25V18c0 .28.22.5.5.5h2a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h2a.5.5 0 0 0 .5-.5V5.5H6a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v1.75a.75.75 0 1 1-1.5 0V6a.5.5 0 0 0-.5-.5z"
        ></path>
      </svg>
    ),
  },
  {
    name: "二维码",
    id: 4,
    icon: () => (
      <img
        src="./erWeiMa.webp"
        alt="这是一张二维码"
        style={{ width: 24, height: 24 }}
      />
    ),
    aicon: "",
  },
  {
    name: "更多",
    id: 5,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        ></path>
      </svg>
    ),
  },
  {
    name: "",
    id: 6,
    icon: () => (
      <div style={{ background: "blue", width: 24, height: 24 }}></div>
    ),
  },
  {
    name: "动效",
    id: 7,
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.782 8.782a7 7 0 1 0 9.436 9.436 6.953 6.953 0 0 1-2.393.734 5.5 5.5 0 0 1-7.777-7.777c.1-.855.355-1.662.734-2.393Z"
          fill="currentColor"
          fillOpacity=".3"
        ></path>
        <circle
          cx="15"
          cy="9"
          r="6.25"
          stroke="currentColor"
          strokeWidth="1.5"
        ></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.782 5.782a7 7 0 1 0 9.436 9.436 6.953 6.953 0 0 1-2.393.734 5.5 5.5 0 0 1-7.777-7.777c.1-.854.355-1.662.734-2.393Z"
          fill="currentColor"
          fillOpacity=".6"
        ></path>
      </svg>
    ),
  },
  {
    name: "备注",
    id: 8,
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 5.25a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H4.75ZM4.75 9.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM4 14a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 4 14ZM4.75 17.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.192 8.308a2.04 2.04 0 0 0-2.884 0l-6.9 6.9a4.625 4.625 0 0 0-1.046 1.61l-.945 2.458a.625.625 0 0 0 .807.807l2.458-.945a4.625 4.625 0 0 0 1.61-1.046l6.9-6.9a2.04 2.04 0 0 0 0-2.884Zm-2 .884a.79.79 0 1 1 1.116 1.116l-.558.558-1.116-1.116.558-.558Zm-1.442 1.442L13.384 15l1.116 1.116 4.366-4.366-1.116-1.116Zm-5.458 5.458.208-.208L13.616 17l-.208.208a3.375 3.375 0 0 1-1.175.763l-.761.293-.236-.235.293-.762c.17-.441.43-.841.763-1.175Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    name: "5.0秒",
    id: 9,
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path
            id="_4061079222__a"
            d="M11.125 6.316v5.655c0 .725 1.013 1.404 1.463 1.854l2.221 2.222c.799.798 2.036-.439 1.238-1.238l-1.714-1.714-1.179-1.178-.439-.44c-.315-.315.16.818.16.411V6.316c0-1.128-1.75-1.128-1.75 0ZM12 21.801c-5.404 0-9.8-4.396-9.8-9.801 0-5.404 4.396-9.8 9.8-9.8 5.404 0 9.801 4.396 9.801 9.8 0 5.405-4.396 9.801-9.801 9.801ZM12 3.7c-4.577 0-8.3 3.724-8.3 8.3 0 4.577 3.724 8.301 8.3 8.301 4.577 0 8.301-3.724 8.301-8.301 0-4.576-3.724-8.3-8.301-8.3Z"
          ></path>
        </defs>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#_4061079222__a"
        ></use>
      </svg>
    ),
  },
  {
    name: "全屏",
    id: 10,
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.636 10.43 18.5 6.565v2.687a.75.75 0 0 0 1.5 0V5.497c0-.966-.53-1.495-1.497-1.495h-3.749a.75.75 0 0 0 0 1.5h2.687l-3.867 3.867a.75.75 0 0 0 1.06 1.061Zm-5.27 3.139-3.867 3.867v-2.688a.75.75 0 0 0-1.5 0v3.75c0 .967.527 1.5 1.493 1.5h3.753a.75.75 0 0 0 0-1.5H6.558l3.869-3.869a.75.75 0 0 0-1.061-1.06Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
];
