"use client";
import styles from "../styles/addToCardAnima.module.css";
import { useState } from "react";
import Image from "next/image";

function ShowAddToCardNotification() {
  let [loading, setloading] = useState(false);

  setTimeout(() => {
    setloading((loading = true));
    setTimeout(() => {
      setloading((loading = false));
    }, 1000);
  }, 1000);

 
  return (
    <>
      <div
        className={`${styles.main} w-[300px] bg-green-600 fixed right-0 top-0 rounded-md`}
      >
        <h6 className="text-center text-white py-1 font-semibold">
        Product added to cart successfully
        </h6>
        {loading ? (
          <div className="flex items-center justify-center">
            <Image
              src={"/picture/tike.png"}
              alt={""}
              width={50}
              height={50}
              className="-mt-7 h-[75px] w-28"
            />{" "}
          </div>
        ) : (
          <div className={styles.showNotofication}></div>
        )}
      </div>
    </>
  );
}

export default ShowAddToCardNotification;
