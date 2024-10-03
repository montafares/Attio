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
        <div className="bg-black text-white py-3 pr-4 font-bold  mt-5 flex rounded-xl text-center text-sm   ">
          {children}
          <button onClick={() => setClose(!close)} className="ml-auto">
            <Icon name="close" />
          </button>{" "}
        </div>
      )}
    </>
  );
}
