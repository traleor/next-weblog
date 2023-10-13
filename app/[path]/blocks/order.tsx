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
        <option value="headline">A-Z</option>
        <option value="-headline">Z-A</option>
        <option value="random">Random</option>
        <option value="date_published">Ascending</option>
        <option value="-date_published">Descending</option>
      </select>
    </form>
  );
}

export default Order;
