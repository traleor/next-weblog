"use client";
import React, { useRef } from "react";

function Order() {
  const form = useRef<HTMLFormElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    form?.current?.submit();
    console.log("SELECT CHANGE", e);
  };

  return (
    <form ref={form}>
      <select name="order" id="order" onChange={handleOnChange}>
        <option value="">Order By</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="random">Random</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
}

export default Order;
