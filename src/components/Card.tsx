import React from "react";
import { Detail } from "@services/process/processDTO";
import { ChevronDownIcon, ChevronUpIcon, LogIn, LogOut } from "lucide-react";
import { ConvertSecondsDate } from "@utils";
import { useCollapse } from "react-collapsed";

interface CardProps {
  detail: Detail;
  cardColor: string;
  titleColor: string;
}

export function Card({ detail, cardColor, titleColor }: CardProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const { start, group, end, outOfTime, seconds } = detail;
  const formattedDuration = ConvertSecondsDate(seconds,start,end);
  const duration = formattedDuration;
  const verifyColorTerm = outOfTime
    ? "text-red-500"
    : start
      ? "text-green-700"
      : "text-dark";

  return (
    <div
      className={`bg-white  border dark:border-gray-500 rounded-md shadow-md flex flex-col gap-2 w-64 ${
        isExpanded ? "h-48" : "h-32"
      }`}
    >
      <div
        className={`px-2 bg-opacity-75 dark:bg-opacity-100 hover:bg-opacity-100 py-3 flex items-center justify-center relative ${cardColor} dark:bg-dark rounded-t-md cursor-pointer`}
        {...getToggleProps()}
      >
        <p className={`font-semibold text-center text-sm mx-2 ${titleColor}`}>{group}</p>
        <div className="absolute right-0">
          {isExpanded ? (
            <ChevronUpIcon className="dark:text-light text-dark" />
          ) : (
            <ChevronDownIcon className="dark:text-light text-dark" />
          )}
        </div>
      </div>
  
      <div className="flex flex-col gap-2" {...getCollapseProps()}>
        <div className="flex justify-center p-1 gap-2 border-b-2 dark:border-b ">
          <LogIn size={20} className="text-dark " />
          <p className="text-sm font-medium text-center text-dark  ">
            {start ? start : "Não possui"}
          </p>
        </div>

        <div className="flex justify-center p-1 gap-2 dark:border-b ">
          <LogOut size={20} className="text-dark " />
          <p className="text-sm font-medium text-center text-dark  ">
            {end ? end : "Não possui"}
          </p>
        </div>
      </div>
      <div className="p-1 flex-1">
        <p
          className={`text-sm font-medium text-center ${
            group != "OUTROS" ? verifyColorTerm : ""
          }`}
        >
          {duration}
        </p>
      </div>
    </div>
  );
}
