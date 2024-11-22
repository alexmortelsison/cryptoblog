import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/news"} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search news"
        className="bg-transparent px-6 py-2 rounded-full w-full"
      />

      <div className="flex text-white gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="text-white">
          <Search className="text-white" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
