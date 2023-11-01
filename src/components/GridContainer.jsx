import imageData from "./imageData";
import { ImageCard } from "./ImageCard";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import GridCanvas from "./GridCanvas";

export default function GridContainer() {
  
  
  return (
    <main className="bg-slate-100 min-h-[85vh]">
      <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="bg-white border rounded-lg min-h-[500px]">
          <div className="flex flex-row justify-between py-4 sm:px-6 lg:px-8 border-b">
            {/* Top section */}
            <div>
              <div className="mb-[0.125rem] block min-h-[1.5rem]">
                <input
                  className="relative float-left  mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] accent-blue-500"
                  type="checkbox"
                  value=""
                  id="checkboxDefault"
                />
                <label
                  className="font-semibold inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="checkboxDefault"
                >
                  3 Files found
                </label>
              </div>
            </div>

            <div>
              <button className="bg-white border-0 text-red-600">
                Delete Files
              </button>
            </div>
          </div>

          <div>
              <GridCanvas />
          </div>
        </div>
      </div>
    </main>
  );
}

