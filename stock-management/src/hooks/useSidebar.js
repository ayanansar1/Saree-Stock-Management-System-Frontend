import { useEffect, useState } from "react";

const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      // Close sidebar when switching to mobile view
      if (mobileView) setIsSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar
  const toggleSidebar = (state) => {
    setIsSidebarOpen(state !== undefined ? state : !isSidebarOpen);
  };

  return { isSidebarOpen, toggleSidebar, isMobile };
};

export default useSidebar;