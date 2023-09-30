"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
  const params = useSearchParams().toString();

  console.log("ITEMS FILTERING", param, items, params);
  return (
    <>
      <h3>{title}</h3>
      <Link href={pathname}>Reset</Link>
      {items.map((item) => (
        <li key={item.value}>
          <Link href={updateQueryParams(pathname, params, param, item.value)}>
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}

// Helper function to update query parameters
function updateQueryParams(
  pathname: string,
  currentParams: string,
  paramName: string,
  paramValue: string
): string {
  const newParams = new URLSearchParams(currentParams);

  // Remove existing parameter with the same name, if it exists
  if (newParams.has(paramName)) {
    newParams.delete(paramName);
  }

  // Add the new parameter
  newParams.append(paramName, paramValue);

  return `${pathname}?${newParams.toString()}`;
}

export default Filter;
