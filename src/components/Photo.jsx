/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const Photo = forwardRef(
  ({ url, index, ...props }, ref) => {

    return (
      <div className={`${
        index === 0 ? "col-span-2 row-span-2" : "col-span-1"
      }`}>
          <div className="border rounded-md bg-gray-50 hover:brightness-95">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-auto min-h-[142px] rounded-lg"
              ref={ref}
              {...props}
            />
          </div>
      </div>
    );
  }
);
