import React from "react";
import Header from "../Components/header";
import Newsletter from "../Components/newsletter";
import Footer from "../Components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50">
        <Header />
      </div>
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
