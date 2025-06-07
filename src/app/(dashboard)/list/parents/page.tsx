import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { role, parentsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "studentNames",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];

interface Parent {
  id: number;
  students: string[];
  name: string;
  email?: string;
  phone: string;
  address: string;
}

const ParentList = () => {
  const renderRow = (parent: Parent) => (
    <tr
      key={parent.id}
      className="text-sm text-gray-500 border-b border-gray-200 even:bg-slate-50  hover:bg-lamaPurpleLight transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={parent.photo}
          alt="profile"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col">
          <h3 className="font-semibold">{parent.name}</h3>
          {/* <p className="text-xs text-gray-500">{student?.class}</p> */}
        </div>
      </td>
      {/* <td className="hideen md:table-cell ">{parent.studentId}</td> */}
      <td className="hideen md:table-cell ">{parent.students.join(", ")}</td>
      <td className="hideen md:table-cell ">{parent.phone}</td>
      <td className="hideen md:table-cell ">{parent.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/parents/${parent.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full cursor-pointer">
              <Image src="/view.png" width={16} height={16} alt="" />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <FormModal
                table="parent"
                type="update"
                data={parent}
                id={parent.id}
              />
              <FormModal table="parent" type="delete" id={parent.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentList;
