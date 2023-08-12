"use client";
import { useState } from "react";
import BottomNav from "../components/bottom-nav";
import SelectableCard from "../components/selectable-card";
import Title from "../components/title";

export default function Step4() {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <Title
        title="Property Information"
        description="Information about the ifacility/premise of the service."
      />
      <div className="col-span-3">
        <div className="mt-4 text-lg font-medium">Owner Information</div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <div className="mb-2 text-sm font-medium">Full Name</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Phone Number</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder="00000000"
          />
        </div>
      </div>
      <div>
        <div className="mt-4 text-lg font-medium">Property Information</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <div className="mb-2 text-sm font-medium">Region</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a region</option>
          </select>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">District</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a district</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <div className="mb-2 text-sm font-medium">Ghana Post Address</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Street Name</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">House Number</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <div className="mb-2 text-sm font-medium">Community</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Closest Landmark</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <div className="mt-4 text-lg font-medium">Premise Information</div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <div className="mb-2 text-sm font-medium">Premise Type</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a type</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <div className="mb-2 text-sm font-medium">Premise Category</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a category</option>
          </select>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Activity</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a type</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <div className="mb-2 text-sm font-medium">Sub Activity</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option>Select a category</option>
          </select>
        </div>
      </div>
      <div>
        <div className="mt-4 text-lg font-medium">Site Plan Information</div>
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">Upload Site Plan</div>
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
                <span className="font-semibold">Click to upload</span> a file
              </p>
            </div>
            <input id="dropzone-file2" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}
