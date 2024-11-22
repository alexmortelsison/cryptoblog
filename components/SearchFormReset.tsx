"use client";
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const reset = () => {
  const form = document.querySelector(".search-form") as HTMLFormElement;
  if (form) form.reset();
};

const SearchFormReset = () => {
  return (
    <div>
      <Button type="reset" onClick={reset} className="text-white">
        <Link href={"/news"}>
          <X />
        </Link>
      </Button>
    </div>
  );
};

export default SearchFormReset;
