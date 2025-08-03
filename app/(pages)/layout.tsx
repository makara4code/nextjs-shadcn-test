import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="h-screen container mx-auto px-4">{children}</div>;
    </div>
  );
}
