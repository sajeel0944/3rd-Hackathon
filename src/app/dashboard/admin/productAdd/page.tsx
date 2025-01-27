"use client";

import { client } from "@/sanity/lib/client";
import { FormEvent, useRef, useState } from "react";

function ProductAdd() {
  // is main product ki title aye ga
  const title = useRef<HTMLInputElement>(null);

  // is main product ki discribtion aye ga
  const description = useRef<HTMLInputElement>(null);

  // is main product ki image aye ga
  const productImage: any = useRef<HTMLInputElement>(null);

  // is main product ki price aye ga
  const price = useRef<HTMLInputElement>(null);

  // is main product ki tags aye ga
  const tags = useRef<HTMLInputElement>(null);
  const tags1 = useRef<HTMLInputElement>(null);
  const tags2 = useRef<HTMLInputElement>(null);
  const tags3 = useRef<HTMLInputElement>(null);

  // is main product ki discount aye ga
  const discountPercentage = useRef<HTMLInputElement>(null);

  // is main product ki inNew aye ga
  let [isNew, setisNew] = useState(false);

  const handle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //is main jo upper useRef main jo title hai us ki value ko get kar raha hai
    const titleresponse = title?.current?.value;

    //is main jo upper useRef main jo discribtion hai us ki value ko get kar raha hai
    const descriptionresponse = description?.current?.value;

    //is main jo upper useRef main jo image hai us ki value ko get kar raha hai
    const productImageresponse: any = productImage?.current?.files[0]; // Correctly getting the file object

    //is main jo upper useRef main jo price hai us ki value ko get kar raha hai
    const priceresponse = Number(price?.current?.value);

    //is main jo upper useRef main jo tags hai us ki value ko get kar raha hai
    const tagsresponse = tags?.current?.value;
    const tagsresponse1 = tags1?.current?.value;
    const tagsresponse2 = tags2?.current?.value;
    const tagsresponse3 = tags3?.current?.value;
    //is main jo 4 jo tags hai us ko ek arrray main dy  raha ho  
    let tagsresponseArray = [
      tagsresponse,
      tagsresponse1,
      tagsresponse2,
      tagsresponse3,
    ];

    //is main jo upper useRef main jo discount hai us ki value ko get kar raha hai
    const discountPercentageresponse = Number(
      discountPercentage?.current?.value
    );

    //is main jo upper useRef main jo isNew hai us ki value ko get kar raha hai
    const isNewresponse = isNew;

    // agar ye sary filled hoye gi to to ye true ho  ye ga
    if (
      titleresponse &&
      descriptionresponse &&
      productImageresponse &&
      priceresponse &&
      tagsresponseArray &&
      discountPercentageresponse &&
      isNewresponse
    ) {
      try {
        // Upload image as 'image' type asset
        // is ko is liye dia hai q ky jab mein image upload kar raha tha to error ara tha is sy fetch ho ky jaye gi
        const uploadedImage = await client.assets.upload(
          "image",
          productImageresponse
        );

        // is sy zaraye sanity main data jaye ga
        const document = {
          _type: "product",
          title: titleresponse,
          price: priceresponse,
          productImage: {
            _type: "image",
            asset: {
              _ref: uploadedImage._id, // Use the _id of the uploaded image
            },
          },
          tags: tagsresponseArray,
          dicountPercentage: discountPercentageresponse, // Fix typo
          description: descriptionresponse,
          isNew: isNewresponse,
        };

        // create sy sanity main data jaraha hai
        const response = await client.create(document);
      } catch (error) {
        console.error("Sanity mein data upload karte waqt error :", error);
      }
    } else {
      console.error("please fill all filled");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-7">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form className="space-y-4" onSubmit={handle}>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            ref={title}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter product title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>

          <input
            ref={description}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter product description"
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            ref={productImage}
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            ref={price}
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter product price"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            ref={tags}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="e.g., Electronics, Gadgets"
          />
          <input
            ref={tags1}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="e.g., Electronics, Gadgets"
          />
          <input
            ref={tags2}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="e.g., Electronics, Gadgets"
          />
          <input
            ref={tags3}
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="e.g., Electronics, Gadgets"
          />
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount Percentage (%)
          </label>
          <input
            ref={discountPercentage}
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter discount percentage"
          />
        </div>

        {/* New Badge */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
            onClick={() => {
              setisNew((isNew = true));
            }}
          />
          <label className="text-sm font-medium text-gray-700">
            Is New Product?
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
