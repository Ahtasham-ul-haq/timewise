import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const user = currentUser();
  return (
    <div className="w-full h-screen px-12 py-8 overflow-hidden">
      <Navbar />
      <div className="flex flex-col justify-center gap-4 items-center w-full h-full text-center">
        <h1 className=" text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-tighter font-bold">
          The most comprehensive <br /> Time Management Platform
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi illo
          adipisci <br /> animi natus ipsam corporis exercitationem provident
          consectetur explicabo similique?
        </p>
        <Link href={!user ? "/sign-up" : "/dashboard"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
