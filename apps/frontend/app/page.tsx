"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-200 w-screen h-screen flex flex-col items-center justify-center">
      <Button onClick={() => alert("Button Clicked")}>CLick Here</Button>
    </div>
  );
}
