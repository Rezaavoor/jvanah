import React from "react";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <div
      className={`flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
          {props.preTitle}
        </span>
      )}

      {props.title && (
        <h2 className="max-w-2xl text-3xl md:text-4xl font-bold leading-snug tracking-tight text-navy-900 text-balance">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl mt-4 text-base md:text-lg leading-relaxed text-navy-400">
          {props.children}
        </p>
      )}
    </div>
  );
};
