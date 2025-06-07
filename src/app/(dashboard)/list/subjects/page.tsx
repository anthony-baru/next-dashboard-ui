import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { role, subjectsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },

  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];

interface Subject {
  id: number;
  name: string;
  teachers?: string[];
}

const SubjectList = () => {
  const renderRow = (subject: Subject) => (
    <tr
      key={subject.id}
      className="text-sm text-gray-500 border-b border-gray-200 even:bg-slate-50  hover:bg-lamaPurpleLight transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">
        <h3 className="table-cell">{subject.name}</h3>
      </td>
      <td className="hidden md:table-cell  ">{subject.teachers?.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/subjects/${subject.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full cursor-pointer">
              <Image src="/update.png" width={16} height={16} alt="" />
            </button>
          </Link> */}
          <FormModal
            table="subject"
            type="update"
            data={subject}
            id={subject.id}
          />
          {role === "admin" && (
            <FormModal table="assignment" type="delete" id={subject.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && <FormModal table="assignment" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectList;
