import React from "react";
import "./HomeLogged.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMyContext } from "../../context/MyContext";
const HomeLogged = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const { t ,lang} = useMyContext();

  return (
    <div className="HomeLogged ">
      <div className="head">
        <div className="gradient-text">
          <h1 className="gradient-text">{t("addWebsites.head")}</h1>
        </div>
        <p>
        {t("addWebsites.p")}
        </p>
      </div>
      <div className="add">
        <motion.div
          layoutId="animate1"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={first?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">{t("addWebsites.h11")}</h1>
          {first ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                {t("addWebsites.add")}
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(false);setfirst(true);setthird(false)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
        </motion.div>
        <motion.div
          layoutId="animate2"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={second?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">{t("addWebsites.h12")}</h1>
          {second ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                {t("addWebsites.add")}
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(true);setfirst(false);setthird(false)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
          
        </motion.div>
        <motion.div
          layoutId="animate3"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={third?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">{t("addWebsites.h13")}</h1>
          {third ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                {t("addWebsites.add")}
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(false);setfirst(false);setthird(true)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeLogged;
