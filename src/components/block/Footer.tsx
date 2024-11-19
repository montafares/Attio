import React from "react";
import FooterDesctop from "./FooterDesctop";
import FooterMobile from "./FooterMobile";

function Footer() {
  const listProduct = [
    "Product",
    "Changelog",
    "Customer stories",
    "Security",
    "Chrome extension",
    "IOS App",
    "Android App",
    "Zapier",
    "Integromat",
  ];
  const listCompany = [
    "Company",
    "About",
    "Careers",
    "Blog",
    "Startup program",
  ];
  const listAttio = ["Attio for", "Startups", "Dear flow"];
  const listSupport = [
    "Support",
    "Help Center",
    "Talk to support",
    "API docs",
    "System status",
  ];
  const listIcon = ["Xtwiter", "linkedin", "Dribble"];
  return (
    <footer className="bg-[#1D1F20]">
      <FooterDesctop
        listIcon={listIcon}
        listAttio={listAttio}
        listCompany={listCompany}
        listProduct={listProduct}
        listSupport={listSupport}
      />
      <FooterMobile
        listIcon={listIcon}
        listAttio={listAttio}
        listCompany={listCompany}
        listProduct={listProduct}
        listSupport={listSupport}
      />
    </footer>
  );
}

export default Footer;
