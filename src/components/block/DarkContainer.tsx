import React from "react";
import Builders from "./Builders";
import Customers from "./Customers";
// Single import for Avatar7

export default function DarkContainer() {
  return (
    <div className="flex flex-col gap-10 bg-darkColor-600 w-full">
      <Customers />
      <Builders />
    </div>
  );
}
