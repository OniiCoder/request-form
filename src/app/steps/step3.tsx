"use client";
import { useState } from "react";
import Title from "../components/title";
import Image from "next/image";

export default function Step3() {
  const [hasGhanaCard, setHasGhanaCard] = useState(false);

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Title
        title="Indentity Type Information"
        description="Information about the identity of the customer."
      />

      <div>
        <div className="grid sm:grid-cols-3">
          <div className="flex flex-col justify-between">
            <div className="mt-4 mb-2 text-sm font-medium">Has Ghana Card</div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 text-sm text-grayColor">
                <span>Do you have a Ghana Card?</span>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    onChange={(e) => setHasGhanaCard(e.target.checked)}
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                </label>
              </div>
            </div>
          </div>

          {!hasGhanaCard && (
            <div>
              <div className="mb-2 text-sm font-medium">ID Type</div>
              <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
                <option>Select a type</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Passport">Passport</option>
                <option value="Voters ID">Voters ID</option>
              </select>
            </div>
          )}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-3">
            <div className="mt-4 text-lg font-medium">
              Customer Identity Information
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">
              {hasGhanaCard ? "Ghana Card Number" : "ID Number"}{" "}
            </div>
            <input
              className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
              type="text"
              placeholder="00000000"
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">
              {hasGhanaCard ? "Ghana Card Issue Date" : "ID Issue Date"}
            </div>
            <input
              className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
              type="date"
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">
              {hasGhanaCard ? "Ghana Card ID Expiry Date" : "ID Expiry Date"}
            </div>
            <input
              className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
              type="date"
            />
          </div>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div>
            <div className="mb-2 text-sm font-medium">ID Front Image</div>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> a
                    file
                  </p>
                </div>
                <input id="dropzone-file1" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">ID Back Image</div>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> a
                    file
                  </p>
                </div>
                <input id="dropzone-file2" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
