"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  param: string;
  title: string;
  items: {
    name: string;
    value: string;
  }[];
};

function Filter({ param, title, items }: Props) {
  const pathname = usePathname();

  console.log("ITEMS FILTERING", param, items);
  return (
    <>
      <h3>{title}</h3>
      {items.map((item) => (
        <li key={item.value}>
          <Link href={pathname + `?${param}=${item.value}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}

export default Filter;
