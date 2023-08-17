import React from "react";
import "./allInOne.scss";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";

const AllInOne = ({ aboutRef }) => {
  const { t } = useMyContext();

  return (
    <motion.dev
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="AllInOne"
    >
      <div className="text">
        <p>
        {t("all.p")}
        </p>
      </div>
      <div className="cards">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "circInOut", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon1.png" alt="" />
          </div>
          <h1 className="gradient-text">{t("all.h11")}</h1>
          <p>{t("all.p11")}</p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "anticipate", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon2.png" alt="" />
          </div>
          <h1 className="gradient-text">{t("all.h12")}</h1>
          <p>
          {t("all.p12")}
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "anticipate", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon3.png" alt="" />
          </div>
          <h1 className="gradient-text">{t("all.h13")}</h1>
          <p>
          {t("all.p13")}
          </p>
        </motion.div>
      </div>
    </motion.dev>
  );
};

export default AllInOne;
