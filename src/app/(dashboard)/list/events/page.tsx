import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { role, eventsData } from "@/lib/data";
import Link from "next/link";
const columns = [
  {
    header: "Title",
    accessor: "title",
  },

  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start",
    accessor: "start",
    className: "hidden md:table-cell",
  },
  {
    header: "End",
    accessor: "end",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];

interface Event {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}

const EventList = () => {
  const renderRow = (event: Event) => (
    <tr
      key={event.id}
      className="text-sm text-gray-500 border-b border-gray-200 even:bg-slate-50  hover:bg-lamaPurpleLight transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">
        <h3 className="table-cell">{event.title}</h3>
      </td>
      <td className="hidden md:table-cell  ">{event.class}</td>
      <td className="hidden md:table-cell  ">{event.date}</td>
      <td className="hidden md:table-cell  ">{event.startTime}</td>
      <td className="hidden md:table-cell  ">{event.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/events/${event.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full cursor-pointer">
              <Image src="/edit.png" width={16} height={16} alt="" />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center bg-lamaPurple rounded-full cursor-pointer">
              <Image src="/delete.png" width={16} height={16} alt="" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
                <Image src="/plus.png" width={14} height={14} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default EventList;
