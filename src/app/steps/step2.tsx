import Title from "../components/title";
import { countries } from "../data/countries";

export default function Step2() {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <Title
        title="Customer Information"
        description="Information about the customer making the request."
      />
      <div>
        <div className="mb-2 text-sm font-medium">Customer Type</div>
        <select className="w-full sm:w-[323px] h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
          <option value="">Select Customer Type</option>
          <option value="Organization">Organization (Public/Private)</option>
          <option value="Individual">Individual</option>
        </select>
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">Photo</div>
        <div className="flex gap-4 items-end">
          <div className="h-16 w-16 bg-lightGray rounded-full"></div>
          <button
            type="submit"
            className="h-[40px] inline-flex justify-center rounded-md border-2 border-lightGray py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Change
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="col-span-3 grid grid-cols-3 sm:grid-cols-3 gap-4">
          <div>
            <div className="mb-2 text-sm font-medium">Customer Title</div>
            <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
              <option>Select a title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 text-sm font-medium">Full Name</div>
            <input
              className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div className="mb-2 text-sm font-medium">Date of Birth</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="date"
            placeholder="John Doe"
          />
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div className="mb-2 text-sm font-medium">Nationality</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option value="">Select Nationality</option>
            {countries.map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div className="mb-2 text-sm font-medium">Gender</div>
          <select className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-span-3">
          <div className="mt-4 text-lg font-medium">Contact Information</div>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div className="mb-2 text-sm font-medium">Phone Number</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="text"
            placeholder="00000000"
          />
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div className="mb-2 text-sm font-medium">Email Address</div>
          <input
            className="w-full h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
            type="email"
            placeholder="johndoe@domain.com"
          />
        </div>
      </div>
    </div>
  );
}
