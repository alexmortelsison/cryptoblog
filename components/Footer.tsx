import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="text-muted-foreground dark:text-muted flex items-center justify-center bottom-0 mt-auto text-sm tracking-tighter mb-2">
      <p>&#169; {year} | Crypto/News. | All rights reserved</p>
    </div>
  );
};

export default Footer;
