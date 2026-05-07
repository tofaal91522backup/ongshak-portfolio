// import AnimatedMenu from "@/components/layout/AnimatedMenu";

import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <AnimatedMenu> */}
      {children}
      <Footer />
      {/* </AnimatedMenu> */}
    </>
  );
}
