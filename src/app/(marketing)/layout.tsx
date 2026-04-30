import AnimatedMenu from "@/components/layout/AnimatedMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <AnimatedMenu> */}
      {children}

      {/* </AnimatedMenu> */}
    </>
  );
}
