"use client";
import React, { useState } from "react";
import Icon from "../icon";

export function AlertSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [close, setClose] = useState(true);
  return (
    <>
      {close && (
        <div className="bg-black text-white md:mt-0 mt-16 top-20 py-3  mx-10 w-auto font-bold flex rounded-xl text-center text-sm   ">
          {children}
          <button onClick={() => setClose(!close)} className="ml-auto">
            <Icon name="close" />
          </button>{" "}
        </div>
      )}
    </>
  );
}
