import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container p-10 mx-auto  ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
