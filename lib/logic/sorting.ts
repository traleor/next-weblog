import { WeblogPage } from "@/types";

// Function to sort blog posts by date in ascending order
export const sortByDateAsc = (blogPosts: WeblogPage[]): WeblogPage[] => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date_published).getTime();
    const dateB = new Date(b.date_published).getTime();
    return dateA - dateB;
  });
};

// Function to sort blog posts by date in descending order
export const sortByDateDesc = (blogPosts: WeblogPage[]): WeblogPage[] => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date_published).getTime();
    const dateB = new Date(b.date_published).getTime();
    return dateB - dateA;
  });
};

// Function to sort blog posts by tags
export const sortByTags = (
  blogPosts: WeblogPage[],
  tags: string[]
): WeblogPage[] => {
  return [...blogPosts].sort((a, b) => {
    const tagsA = a.tags || [];
    const tagsB = b.tags || [];

    // Calculate the number of matching tags for each post
    const matchingTagsA = tagsA.filter((tag) => tags.includes(tag));
    const matchingTagsB = tagsB.filter((tag) => tags.includes(tag));

    // Sort by the number of matching tags in descending order
    return matchingTagsB.length - matchingTagsA.length;
  });
};
