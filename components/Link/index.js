import Link from "next/link";
import React from "react";

const MyLink = ({ href, children, classname, style, ...props }) => {
  return (
    <Link href={href} {...props}>
      <p
        className={classname}
        style={style ? style : { textDecoration: "none " }}
      >
        {children}
      </p>
    </Link>
    //     <Link href={"/tasks"}>
    //     {" "}
    //     <p>Tasks</p>
    //   </Link>
  );
};
export default MyLink;
