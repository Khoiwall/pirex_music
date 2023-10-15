"use client";
import { useState, ReactNode, createContext, useEffect } from "react";
type SidebarContext = {
  sidebarToggle: boolean;
  render: number;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

type Props = {
  children: ReactNode;
};

export function SidebarProvider({ children }: Props) {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [render, setRender] = useState<number>(0);
  useEffect(() => {
    if (sidebarToggle) {
      if (window.innerWidth <= 1024) {
        setSidebarToggle(false);
      }
      function handleResize() {
        if (window.innerWidth <= 1024) {
          setSidebarToggle(false);
        }
      }
      window.addEventListener("resize", handleResize);
    }
  }, []);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
    setRender(render + 1);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
    setRender(render + 1);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, render }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
