"use client";

import { UpdateProductAction, UpdateProductImageAction } from "@/lib/actions";
import {
  Category,
  UpdateProductImageType,
  UpdateProductType,
} from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Divider } from "@nextui-org/react";
import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

export default function UpdateProductForm({
  productData,
  imageData,
  categoryData,
}: {
  productData: UpdateProductType;
  imageData: UpdateProductImageType;
  categoryData: Category[];
}) {
  const updateProductInfo = UpdateProductAction.bind(null, productData.id);
  const updateProductImage = UpdateProductImageAction.bind(
    null,
    productData.id
  );
  const [fileName, setFileName] = useState("Upload a file");

  const handleFileChange = (event: any) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <>
      <div>
        <h3>Product Information</h3>
        <Divider className="my-3 h-1" />
        <div className="mt-5 lg:flex block">
          <div className="flex-[1.5]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quisquam rerum.
            </p>
          </div>
          <form action={updateProductInfo} className="flex-[3.5]">
            <div>
              <label htmlFor="name">Product Name</label>
              <div className="relative mt-2 mb-4">
                <input
                  className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={productData.name}
                />
              </div>
            </div>
            <div>
              <label htmlFor="description">Product Description</label>
              <div className="relative mt-2 mb-4">
                <textarea
                  className="w-full h-24 px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
                  name="description"
                  id="description"
                  defaultValue={productData.description}
                />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="relative mt-2 mb-4 flex-[2]">
                <label htmlFor="price">Price</label>
                <div className="relative">
                  <BsCurrencyDollar className="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2" />
                  <input
                    className="w-full pl-7 px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
                    type="text"
                    name="price"
                    id="price"
                    defaultValue={productData.price}
                  />
                </div>
              </div>
              <div className="relative mt-2 mb-4 flex-[2]">
                <label htmlFor="quantity">Quantity</label>
                <div>
                  <input
                    className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
                    type="text"
                    name="quantity"
                    id="quantity"
                    defaultValue={productData.quantity}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <div>
                <select
                  className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
                  id="category"
                  name="category"
                  defaultValue={productData.category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categoryData.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-start gap-4">
              <button
                className="px-5 py-1 border-Kilamanjaro-950 border-1 rounded-md bg-Kilamanjaro-950 text-silverSand-50"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h3>Product Image</h3>
        <Divider className="my-3 h-1" />
        <div className="mt-5 lg:flex block">
          <div className="flex-[1.5]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quisquam rerum.
            </p>
          </div>
          <form action={updateProductImage} className="flex-[3.5]">
            <div>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-Kilamanjaro-950 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="mx-auto relative cursor-pointer rounded-md font-semibold hover:underline"
                    >
                      <span className="">{fileName}</span>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-start gap-4">
              <button
                className="px-5 py-1 border-Kilamanjaro-950 border-1 rounded-md bg-Kilamanjaro-950 text-silverSand-50"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
