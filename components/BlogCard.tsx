import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Blog } from "@/sanity.types";

export type BlogTypeCard = Blog;

const BlogCard = ({ post }: { post: BlogTypeCard }) => {
  const { image, title, excerpt, _id } = post;
  return (
    <li className="border border-muted-foreground dark:border-white rounded-lg hover:border-primary hover:text-primary hover:scale-105 hover:duration-300 duration-300 shadow-md dark:shadow-lg shadow-slate-500 dark:shadow-slate-400 mb-7">
      <div className="rounded-lg h-[100px]">
        <img src={image} alt="" className="rounded-t-lg h-[200px] w-full" />
      </div>
      <div className="flex items-center justify-center tracking-tighter font-bold border-b mx-4 py-4 mt-16 md:mt-24">
        {title}
      </div>
      <div className="text-muted-foreground text-center my-4 mx-6 text-sm h-[250px] items-center justify-center">
        {excerpt}
      </div>
      <div className="">
        <Button asChild className="flex items-center justify-center">
          <Link href={`/news/${_id}`} className="font-semibold">
            Read
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default BlogCard;
