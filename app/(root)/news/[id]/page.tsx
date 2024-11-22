import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_ID_QUERY } from "@/sanity/schemaTypes/queries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(BLOG_BY_ID_QUERY, { id });
  if (!post) return notFound();
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8">
      <div className="flex gap-1 justify-start items-center">
        <Button asChild className="hidden lg:flex w-8 h-8">
          <Link href={"/news"}>
            <ArrowLeft />
          </Link>
        </Button>
        <div>
          <img
            src={post.image}
            alt="photo"
            className="rounded-md"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="font-extrabold tracking-tighter text-4xl mt-8">
        {post.title}
      </div>
      <div className="w-[80%] pb-12">{post.description}</div>
    </div>
  );
};

export default DetailsPage;
