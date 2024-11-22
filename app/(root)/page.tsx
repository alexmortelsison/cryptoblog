import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center tracking-tighter md:mt-8 px-8">
      <TextHoverEffect text={"Crypto/News."} />
      <p className="text-muted-foreground text-center tracking-tighter px-8 lg:text-lg">
        Stay informed with the latest updates, trends, and insights from the
        world of cryptocurrency and blockchain technology. Whether you&#39;re a
        seasoned investor, a curious beginner, or a tech enthusiast, CryptoNews
        brings you real-time news, expert analysis, and tips to navigate the
        dynamic crypto market. Explore features on market trends, investment
        strategies, project spotlights, and blockchain innovations—all in one
        place. Join us as we decode the future of finance and empower your
        crypto journey!
      </p>
      <Button className="mt-8 hover:border border-white w-[30%] hover:scale-105 hover:duration-700 shadow-lg">
        <Link href={"/news"} className="font-semibold tracking-tighter text-sm">
          See more
        </Link>
      </Button>

      <Link
        href={"/"}
        className="flex mt-16 gap-4 border-t-white w-full items-center justify-center mb-4"
      >
        <Image
          src={"/x.png"}
          alt="x"
          height={16}
          width={18}
          className="dark:invert"
        />
        <Facebook />
        <FaTelegramPlane className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default HomePage;
