import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`max-w-6xl mx-auto px-5 sm:px-8 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
