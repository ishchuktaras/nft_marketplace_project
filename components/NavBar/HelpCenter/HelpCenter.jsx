import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact",
      link: "contact-us",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
