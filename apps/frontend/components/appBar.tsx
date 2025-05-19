"use client";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AppBar() {
  return (
    <div className="flex items-center p-4 gap-4 h-16 dark:bg-gray-800 text-white shadow-lg rounded-b-xl transition-all">
      <div className="text-2xl font-bold tracking-wide">Dpin_Uptime</div>
      <div className="ml-auto flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <Button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
