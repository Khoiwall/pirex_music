"use client";
import { ReactNode } from "react";
import TopNavigation from "./top-navigation";
import { SidebarProvider } from "@/context/SidebarContext";
import SideBar from "./side-bar";
import { MusicProvider } from "@/context/music-context";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-shade-00-dp h-full w-full">
        <SidebarProvider>
          <MusicProvider>
            <TopNavigation />
            <SideBar />
            <main className="mt-[72px] ml-[279px] text-white">
              <div className="max-w-[1536px] 2xl:mx-auto lg:mx-8 md:mx-6 mx-4 pt-[30px]">
                {children}
              </div>
            </main>
          </MusicProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
