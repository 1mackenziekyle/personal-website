import React from "react";
import { Document, Page } from "react-pdf";

export default function Blog() {
  return (
    <>
      <p>Coming soon...</p>
      <Document file="https://drive.google.com/file/d/1LfUbkIz44yOgDNXnDEsZZPNjI9UT_XAQ/view?usp=sharing">
        <Page pageNumber={1} />
      </Document>
    </>
  );
}
