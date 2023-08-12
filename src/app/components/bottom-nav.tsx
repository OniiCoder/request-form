import { cancel, level, next, previous } from "../hooks/context";

export default function BottomNav() {
    return (
        <div className="mt-8 flex gap-2 justify-end">
            {level.value > 1 && 
                <button type="submit" onClick={cancel} className="h-[40px] inline-flex justify-center rounded-md border-2 border-lightGray py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Cancel</button>
            }
            <button type="submit" onClick={previous} className="h-[40px] inline-flex justify-center rounded-md border-2 border-lightGray py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Previous</button>
            <button type="submit" onClick={next} className="h-[40px] inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Next</button>
        </div>
    )
}