import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "BLOGS",
  description: "",
};

export default function HomeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav></nav>
        {children}
      </section>
    )
  }