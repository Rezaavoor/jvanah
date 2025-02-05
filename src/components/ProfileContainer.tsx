import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ProfileContainerProps {
  img?: string;
  name?: string;
  title?: string;
  children?: React.ReactNode;
}

export const ProfileContainer = (props: Readonly<ProfileContainerProps>) => {
  const { img, name, title, children } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isExpanded]);

  return (
    <div className="bg-profile-gradient rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out">
      <div className="flex flex-col items-center p-8">
        {img && (
          <div className="relative w-32 h-32 mb-6">
            <Image
              src={"/img/jvanah/profiles/" + img}
              alt={name ?? "Profile Image"}
              fill
              className="rounded-full object-cover ring-4 ring-primaryGreen"
            />
          </div>
        )}
        {name && <h2 className="text-2xl font-bold text-primary">{name}</h2>}
        {title && (
          <h3 className="text-lg text-center font-extralight text-primary mt-2">
            {title}
          </h3>
        )}
        {children && (
          <div
            ref={contentRef}
            className="text-center text-primary mt-4 space-y-4 overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: isExpanded ? contentHeight : "5rem",
            }}
          >
            {children}
          </div>
        )}
        {children && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-primaryGreen hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};
