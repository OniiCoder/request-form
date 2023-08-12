"use client";

import { useState } from "react";
import Title from "../components/title";

export default function Step6() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex flex-col gap-4 pb-4">
        <Title
          title="Preview"
          description="Summary of everything added so far"
        />

        <div>
          <button
            onClick={() => setActiveTab(1)}
            className={`${
              activeTab === 1 ? "bg-black text-white" : ""
            } w-full text-left flex justify-between border-2 border-lightGray p-4 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="text-md font-medium">Request Information</span>
              <span className="text-sm text-grayColor">
                Information about the request
              </span>
            </div>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke={`${activeTab === 1 ? "#fff" : "#00100B"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {activeTab === 1 && (
            <div>
              <div className="grid gap-2 p-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Category</span>
                    <span>category name</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Type</span>
                    <span>type name</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Number of meters</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setActiveTab(2)}
            className={`${
              activeTab === 2 ? "bg-black text-white" : ""
            } w-full text-left flex justify-between border-2 border-lightGray p-4 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="text-md font-medium">Customer Information</span>
              <span className="text-sm text-grayColor">
                Information about the customer making the request.
              </span>
            </div>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke={`${activeTab === 2 ? "#fff" : "#00100B"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {activeTab === 2 && (
            <div>
              <div className="grid gap-2 p-4">
                <div className="grid sm:grid-cols-3">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Customer Type</span>
                    <span>John Doe</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-2 p-4">
                <div>Customer Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Title</span>
                    <span>Mr.</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Full Name</span>
                    <span>John Doe</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Date of Birth</span>
                    <span>December 7th, 2000</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Nationality</span>
                    <span>Ghana</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">gender</span>
                    <span>Male</span>
                  </div>
                </div>

                <div>Contact Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Email</span>
                    <span>johndoe@domain.com</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Phone Number</span>
                    <span>00000000</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setActiveTab(3)}
            className={`${
              activeTab === 3 ? "bg-black text-white" : ""
            } w-full text-left flex justify-between border-2 border-lightGray p-4 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="text-md font-medium">
                Identity Type Information
              </span>
              <span className="text-sm text-grayColor">
                Information about the identity of the customer.
              </span>
            </div>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke={`${activeTab === 3 ? "#fff" : "#00100B"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {activeTab === 3 && (
            <div>
              <div className="grid gap-2 p-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Has Ghana card?</span>
                    <span>No</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-2 p-4">
                <div>Identity Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">ID Type</span>
                    <span>Passport</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">ID Number</span>
                    <span>00000000</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Issue Date</span>
                    <span>December 7th, 2000</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Expiry Date</span>
                    <span>December 8th, 2000</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setActiveTab(4)}
            className={`${
              activeTab === 4 ? "bg-black text-white" : ""
            } w-full text-left flex justify-between border-2 border-lightGray p-4 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="text-md font-medium">Property Information</span>
              <span className="text-sm text-grayColor">
                Information about the ifacility/premise of the service
              </span>
            </div>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke={`${activeTab === 4 ? "#fff" : "#00100B"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {activeTab === 4 && (
            <div>
              <div className="grid gap-2 p-4">
                <div>Owner Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Full name</span>
                    <span>John Doe</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Phone number</span>
                    <span>0269056666</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-2 p-4">
                <div>Property Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Region</span>
                    <span>Accra East Region</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">District</span>
                    <span>Kwabenya District</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Structure Number</span>
                    <span>N/A</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Ghana Post Address</span>
                    <span>GD-072-9821</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Street Name</span>
                    <span>St.</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">House Number</span>
                    <span>44</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Community</span>
                    <span>Market Circle</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Closeset Landmark</span>
                    <span>Monaco</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-2 p-4">
                <div>Premise Information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Type</span>
                    <span>Accra East Region</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Category</span>
                    <span>Kwabenya District</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Activity</span>
                    <span>N/A</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Sub Activity</span>
                    <span>GD-072-9821</span>
                  </div>
                </div>
              </div>
            </div>
          )}{" "}
        </div>

        <div>
          <button
            onClick={() => setActiveTab(5)}
            className={`${
              activeTab === 5 ? "bg-black text-white" : ""
            } w-full text-left flex justify-between border-2 border-lightGray p-4 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="text-md font-medium">Service Information</span>
              <span className="text-sm text-grayColor">
                Information about the ifacility/premise of the service
              </span>
            </div>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke={`${activeTab === 5 ? "#fff" : "#00100B"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {activeTab === 5 && (
            <div>
              <div className="grid gap-2 p-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Service Type</span>
                    <span>title</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">Service Class</span>
                    <span>class name</span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm font-normal">
                    <span className="text-grayColor">
                      Energy Certificate Number
                    </span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
