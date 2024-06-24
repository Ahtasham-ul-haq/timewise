"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  const { user } = useUser();
  return (
    <div className="w-full md:h-screen h-full px-4 md:px-12 py-8 md:overflow-hidden">
      <Navbar />
      <div className="flex flex-col justify-center mt-10 gap-4 items-center w-full h-full text-center">
        <h1 className=" text-[40px] text2xl md:text-5xl lg:text-6xl leading-snug tracking-tighter font-bold">
          The most comprehensive <br className="md:block hidden" />{" "}
          <span className="text-[#d1b0ed]">Time Management</span> Platform
        </h1>
        <p className="text-muted-foreground">
          A time management web app to track events, monitor habits,
          <br className="md:block hidden" />
          set countdowns, time tracking and much more
        </p>
        <Link href={!user ? "/sign-up" : "/dashboard"}>
          <Button>
            Get Started <BsArrowRightShort size={20} className="ml-2" />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}
