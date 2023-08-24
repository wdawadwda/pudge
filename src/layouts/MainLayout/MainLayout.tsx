import { Outlet } from "react-router-dom";

// import { Footer } from '~/features/Layout/Footer/Footer';
// import { Navbar } from '~/features/Layout/Navbar/Navbar';

import layoutStyles from "./mainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={layoutStyles.container}>
      {/* <Navbar /> */}
      <main>
        <div className={layoutStyles.mainContent}>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
