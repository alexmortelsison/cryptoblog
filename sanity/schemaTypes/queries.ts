import { defineQuery } from "next-sanity";

export const ALL_BLOG_QUERY =
  defineQuery(`*[_type == "blog" && defined(slug.current) && !defined($search) || title match $search || category match $search]{
  title, image, excerpt, description, slug, _id
}`);

export const BLOG_BY_ID_QUERY =
  defineQuery(`*[_type == "blog" && _id == $id][0]{
  title, image, excerpt, description, slug, _id
}`);
