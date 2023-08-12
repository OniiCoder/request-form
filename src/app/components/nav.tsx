import Image from "next/image";
import { level } from "../hooks/context";

export default function Nav() {
  const handleClick = (itemIndex: number) => {
    level.value = itemIndex + 1;
  };

  const navItems = [
    "Request Info",
    "Customer Info",
    "Identity Info",
    "Property Info",
    "Service Info",
    "Preview",
  ];

  return (
    <div>
      <div className="hidden md:flex justify-between text-grayColor text-sm border-b-2 border-lightGray">
        {navItems.map((item, index) => (
          <button
            key={item}
            onClick={() => handleClick(index)}
            className={`${
              index <= level.value - 1
                ? "text-black border-b-2 border-black gap-1.5"
                : "gap-1"
            } flex-1 p-2 flex items-center`}
          >
            <div
              className={`${
                index <= level.value - 1 ? "bg-black" : "bg-lightGray"
              } h-[16px] w-[16px] flex justify-center items-center rounded-full`}
            >
              <Image src="/svg/check.svg" alt="check" width={10} height={7} />
            </div>{" "}
            {item}
          </button>
        ))}
      </div>

      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white pt-4 z-50 flex text-grayColor text-sm border-b-2 border-lightGray">
        {navItems.map((item, index) => (
          <button
            key={item}
            onClick={() => handleClick(index)}
            className={`${index === level.value - 1 && "flex-1"} ${
              index <= level.value - 1 &&
              "text-black border-b-2 border-black gap-1.5"
            } p-2 flex gap-1 items-center`}
          >
            <div
              className={`h-[20px] w-[20px] ${
                index <= level.value - 1 ? "bg-black" : "bg-lightGray"
              } flex justify-center items-center rounded-full`}
            >
              <Image src="/svg/check.svg" alt="check" width={10} height={7} />
            </div>
            {index === level.value - 1 && item}
          </button>
        ))}
      </div>
    </div>
  );
}
