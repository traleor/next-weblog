import {
  getStartOfLastMonths,
  getStartOfLastYears,
  getStartOfMonth,
  getStartOfWeek,
  getStartOfYear,
} from "@/lib/utils";
import { WeblogPage } from "@/types";

// Function to filter blog posts by date range
export const filterByDate = (
  blogPosts: WeblogPage[],
  range: "this-week" | "this-month" | "this-year" | string
): WeblogPage[] => {
  const currentDate = new Date();
  let startDate: Date;
  let endDate: Date;

  switch (range) {
    case "this-week":
      startDate = getStartOfWeek(currentDate);
      endDate = currentDate;
      break;
    case "this-month":
      startDate = getStartOfMonth(currentDate);
      endDate = currentDate;
      break;
    default:
      // Check for "last X month" or "last X year"
      const lastMatch = range.match(/last (\d+) (month|year)/);
      if (lastMatch) {
        const unit = lastMatch[2];
        const amount = parseInt(lastMatch[1]);
        if (unit === "month") {
          startDate = getStartOfLastMonths(currentDate, amount);
        } else if (unit === "year") {
          startDate = getStartOfLastYears(currentDate, amount);
        }
        endDate = currentDate;
      } else if (range === "this-year") {
        startDate = getStartOfYear(currentDate);
        endDate = currentDate;
      } else {
        throw new Error("Invalid date range");
      }
  }

  return blogPosts.filter((post) => {
    const postDate = new Date(post.date_published);
    return postDate >= startDate && postDate <= endDate;
  });
};

// Function to filter blog posts by one or more category slugs
export const filterByCategories = (
  blogPosts: WeblogPage[],
  categorySlugs: string[]
): WeblogPage[] => {
  return blogPosts.filter((post) => {
    return categorySlugs.includes(post.category.slug);
  });
};
