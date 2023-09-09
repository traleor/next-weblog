import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Card, Grid } from "@/components";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  const parentMetadata = await parent;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = parentMetadata?.openGraph?.images || [];

  return {
    title: "My Blog",
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function Page({ params: { slug } }: Props) {
  return (
    <div>
      <h1>Hello Blog {slug}</h1>
    </div>
  );
}
