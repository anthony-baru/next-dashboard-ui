import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { role, studentsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
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

interface Student {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
}

const StudentList = () => {
  const renderRow = (student: Student) => (
    <tr
      key={student.id}
      className="text-sm text-gray-500 border-b border-gray-200 even:bg-slate-50  hover:bg-lamaPurpleLight transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={student.photo}
          alt="profile"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-xs text-gray-500">{student?.class}</p>
        </div>
      </td>
      <td className="hideen md:table-cell ">{student.studentId}</td>
      <td className="hideen md:table-cell ">{student.grade}</td>
      <td className="hideen md:table-cell ">{student.phone}</td>
      <td className="hideen md:table-cell ">{student.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${student.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full cursor-pointer">
              <Image src="/view.png" width={16} height={16} alt="" />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center bg-lamaPurple rounded-full cursor-pointer">
            //   <Image src="/delete.png" width={16} height={16} alt="" />
            // </button>
            <>
              <FormModal
                table="student"
                type="update"
                data={student}
                id={student.id}
              />
              <FormModal table="student" type="delete" id={student.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
              // <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full cursor-pointer">
              //   <Image src="/create.png" width={14} height={14} alt="" />
              // </button>
              <FormModal table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentList;
