import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BacktoTop.module.scss';

const BacktoTop = () => {
  const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-block");
      } else setBacktopTop("");
    });
  }, []);

  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
      //   smooth
    });
  };
  return (
    <div className={styles.BacktoTop}>
      <Link to="#" id="back-to-top" onClick={screenup} className={`${BacktoTop}`}><i className="las la-angle-double-up"></i></Link>
    </div>
  );
};

BacktoTop.defaultProps = {};

export default BacktoTop;
