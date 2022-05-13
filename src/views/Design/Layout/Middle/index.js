import React, { useContext } from "react";
import './index.less'
import { UtilModalContext } from '../../context'
const CloseBtn = () =>{ 
    const { setCur } = useContext(UtilModalContext)

    return (
  <div className="close" onClick={()=>setCur(-1)}>
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
        d="M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"
      ></path>
    </svg>
  </div>
)
    };

export default function Index(props) {
  const { Comp } = props;
  return (
    <div className="popup">
      {Comp && <Comp />}
      <CloseBtn />
    </div>
  );
}
