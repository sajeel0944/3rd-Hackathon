// is ky andar jo add to card main item arahy  ud ko delete karrahy hai is ki madada sy

"use client";

import { useState } from "react";

type defineNumber={
    indecNumber:number;
}

function DeleteAddCardProduct(props:defineNumber) {
let [number,setnumber]=useState<number>(0);
  // console.log(number);

  const deleteArrayValue = async () => {
    // props ky zaaye array ky index number get kia hai or us main + 1 kia hai q ky array zero sy start hoti hai or mein ny bankend main ek default value dia hoye hai
    setnumber(number=props.indecNumber +1 )
    const url = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/addToCard`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        arrayIndexValue:number
      }),
    });


    // agar url ka responce ok hoye ga to ye chary ga
    if (url.ok) {
      // Reload the page to reflect changes
      window.location.reload();
    } else {
      console.error("Failed to delete item:", url.statusText);
    }
    
  };
  return (
    <>
      <button className="text-gold" onClick={deleteArrayValue}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  );
}

export default DeleteAddCardProduct;



