import { NavbarImagePath } from "@/constants/imagePath";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({
  isOpen,
  handleToggleMenu,
  isAnimatingRef,
  isOpenRef,
  openTextRef,
  closeTextRef,
  handleNavigate,
}: {
  isOpen: boolean;
  handleToggleMenu: () => void;
  isAnimatingRef: React.MutableRefObject<boolean>;
  isOpenRef: React.MutableRefObject<boolean>;
  openTextRef: React.MutableRefObject<HTMLParagraphElement | null>;
  closeTextRef: React.MutableRefObject<HTMLParagraphElement | null>;
  handleNavigate: (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => void;
}) => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-screen items-center justify-between px-6 pt-5 md:px-10 md:pt-6">
      <Link
        href="/"
        onClick={(event) => {
          if (isOpenRef.current) {
            handleNavigate(event, "/");
          }
        }}
        className="liquid-glass group relative z-50 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 text-base text-foreground backdrop-blur-2xl transition-transform hover:scale-[1.03]"
      >
        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={NavbarImagePath.logo}
            alt="Ongshak Logo"
            width={30}
            height={30}
            unoptimized
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </span>

        <span className="text-2xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">
          Ongshak
        </span>
      </Link>

      <button
        onClick={handleToggleMenu}
        // eslint-disable-next-line react-hooks/refs
        disabled={isAnimatingRef.current}
        className="liquid-glass relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-80"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <p
          ref={openTextRef}
          className="absolute flex items-center justify-center text-current"
        >
          <Menu size={26} />
        </p>

        <p
          ref={closeTextRef}
          className="absolute flex items-center justify-center text-current opacity-0"
        >
          <X size={24} />
        </p>
      </button>
    </nav>
  );
};

export default Navbar;
