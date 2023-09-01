import { Outlet } from "react-router-dom";

import { Footer } from "~/features/Layout/Footer/Footer";
import { Navbar } from "~/features/Layout/Navbar/Navbar";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import layoutStyles from "./mainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <NeonStrip />
      <main>
        <Outlet />
      </main>
      <NeonStrip />
      <Footer />
    </div>
  );
};
