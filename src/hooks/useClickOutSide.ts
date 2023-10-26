import { useEffect } from "react";

export const useCloseOutSide = (
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  className: string
) => {
  useEffect(() => {
    function handleOutsideClick(event: any) {
      // Kiểm tra xem click có diễn ra bên ngoài modal không
      if (isOpen && !event.target.closest(className)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
};
