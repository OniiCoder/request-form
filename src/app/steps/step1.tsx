"use client";
import { useState } from "react";
import SelectableCard from "../components/selectable-card";
import Title from "../components/title";

export default function Step1() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedType, setSelectedType] = useState(1);
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Standard",
      description: "14-day service  delivery with GHS100.00 processing fee",
    },
    {
      id: 2,
      title: "Express",
      description: "5-day service delivery with GHS150.00 processing fee",
    },
    {
      id: 3,
      title: "Premium",
      description: "1-Day service delivery with GHS200.00 processing fee",
    },
  ];

  const types = [
    {
      id: 1,
      title: "New Service",
      description:
        "Facilities that hav never had electricity, that is no service point",
    },
    {
      id: 2,
      title: "Separate Meter",
      description:
        "Existing service points with monthly consumption greater than 300KWh",
    },
    {
      id: 3,
      title: "Additional Load",
      description: "Increasing the load on existing service point to 400v",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Title
        title="Request Information"
        description="Information about the request"
      />
      <div>
        <div className="mb-2 text-md font-medium">Request Category</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {categories.map((category) => (
            <SelectableCard
              onClick={() => {
                console.log();
                setSelectedCategory(category.id);
              }}
              key={category.id}
              title={category.title}
              description={category.description}
              selected={selectedCategory === category.id}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-md font-medium">Request Type</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {types.map((type) => (
            <SelectableCard
              onClick={() => setSelectedType(type.id)}
              key={type.id}
              title={type.title}
              description={type.description}
              selected={selectedType === type.id}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">Number of meters*</div>
        <input
          className="w-full sm:w-[323px] min-h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
          type="number"
          placeholder="1"
        />
      </div>
      <div>
        <div className="mt-4 mb-2 text-lg font-medium">
          Existing Customer Information
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col gap-1 text-sm text-grayColor">
            <span>Do you already have an account with ECG?</span>
            <span>
              Supply your Account Number, Customer Number, GeoCode, Service
              Point Number or Meter Number.
            </span>
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={(e) => setIsExistingCustomer(e.target.checked)}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
            </label>
          </div>
        </div>
      </div>
      <div>
        {isExistingCustomer && (
          <div>
            <div className="mt-4 mb-2 text-md font-medium">
              Search for account
            </div>
            <div className="grid sm:flex gap-4 items-end">
              <div className="flex-grow">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Find Customer By
                    </div>
                    <input
                      className="w-full min-h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Customer code
                    </div>
                    <input
                      className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
                      type="text"
                      placeholder="Code"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="h-[40px] inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Search customer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
