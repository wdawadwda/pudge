import { Outlet } from "react-router-dom";

import { useScrollToTopButton } from "~/entities/hooks/useScrollToTopButton";
import { Footer } from "~/features/Layout/Footer/Footer";
import { Navbar } from "~/features/Layout/Navbar/Navbar";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";
import { ScrollToTopButton } from "~/shared/ui/ScrollToTopButton/ScrollToTopButton";

import layoutStyles from "./mainLayout.module.scss";

export const MainLayout = () => {
  const { isShowScrollButton, mainReference } = useScrollToTopButton();

  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <NeonStrip color={"green"} />
      <main ref={mainReference}>
        <Outlet />
      </main>
      <NeonStrip color={"green"} />
      <Footer />
      {isShowScrollButton && <ScrollToTopButton />}
    </div>
  );
};
