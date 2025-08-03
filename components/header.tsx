import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="p-4 container mx-auto">
      <nav className="flex gap-2 justify-between border-b pb-4">
        <div className="flex gap-2">
          <Link href="/">
            <Button>Home</Button>
          </Link>

          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </div>

        <div className="flex gap-2">
          <ModeToggle />

          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
