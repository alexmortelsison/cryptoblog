import BlogCard, { BlogTypeCard } from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { ALL_BLOG_QUERY } from "@/sanity/schemaTypes/queries";
import React from "react";

const NewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: ALL_BLOG_QUERY, params });
  return (
    <div>
      <div className="flex items-center justify-center md:justify-start px-12 lg:px-0">
        <SearchForm query={query} />
      </div>

      <div className="mt-12 px-12 lg:px-0">
        <div>{query ? `Search for "${query}:"` : 'All News:'}</div>
      </div>

      <div className="mt-12 px-4">
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {posts.length > 0 ? (
            posts.map((post: BlogTypeCard) => (
              <BlogCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No results.</p>
          )}
        </ul>
      </div>
      <SanityLive />
    </div>
  );
};

export default NewsPage;
