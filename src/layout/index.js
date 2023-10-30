import { useState, useEffect, Fragment } from "react";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Head from "next/head";

export default function Layout({ children, title }) {
  const [showNav, setShowNav] = useState(true);

  function handleResize() {
    if (innerWidth <= 480) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="author" content="Miguel A. Lau"/>
        <meta name="description" content="Sitema de Control de Recursos"/>
        <meta name="keywords" content="SkyTurro, Remesas, Paquetes, Envios"/>
      </Head>

      <div className="container">
        <SideBar showNav={showNav} />

        <div className={showNav ? "main" : "main active"}>
          <TopBar showNav={showNav} setShowNav={setShowNav} />

          {children}
        </div>
      </div>
    </>
  );
}
