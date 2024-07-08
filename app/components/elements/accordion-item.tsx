"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
import Column from "./column";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import Row from "./row";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type Props = {
  data: any;
  firstActive?: boolean;
  defaultOpen?: boolean
};

const AccordionItem = ({ data, firstActive, defaultOpen }: Props) => {
  const [open, setOpen] = useState(firstActive);

  useEffect(() => {
    setOpen(defaultOpen)
  }, [defaultOpen])
  
  return (
    <Column
      className={` bg-white border-b p-4 px-6 shadow-sm border-gray-300  cursor-pointer   ${open ? "gap-2" : "gap-0"} transition-all duration-500`}
      onClick={() => setOpen(!open)}
    >
      <Row className="flex justify-between ">
        <div className="lg:text-xl font-medium">{data.title}</div>
        <div className=" rounded-md">
          {open ? <IoIosArrowDown size={25} /> : <IoIosArrowUp size={25} />}
        </div>
      </Row>

      <div
        className={`${open ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden transition-all duration-300 text-gray-400 text-xs leading-6`}
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </Column>
  );
};

export default AccordionItem;