import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { role } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import {
  Class,
  Subject,
  Teacher,
} from "../../../../../prisma/generated/client";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

type TeacherList = Teacher & { subjects: Subject[]; classes: Class[] };

const renderRow = (teacher: TeacherList) => (
  <tr
    key={teacher.id}
    className="text-sm text-gray-500 border-b border-gray-200 even:bg-slate-50  hover:bg-lamaPurpleLight transition-all duration-200"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={teacher.img || "/noAvatar.png"}
        alt="profile"
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{teacher.name}</h3>
        <p className="text-xs text-gray-500">{teacher?.email}</p>
      </div>
    </td>
    <td className="hideen md:table-cell ">{teacher.username}</td>
    <td className="hideen md:table-cell ">
      {teacher.subjects.map((subject) => subject.name).join(",")}
    </td>
    <td className="hideen md:table-cell ">
      {teacher.classes.map((a) => a.name).join(",")}
    </td>
    <td className="hideen md:table-cell ">{teacher.phone}</td>
    <td className="hideen md:table-cell ">{teacher.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${teacher.id}`}>
          <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full cursor-pointer">
            <Image src="/view.png" width={16} height={16} alt="" />
          </button>
        </Link>
        {role === "admin" && (
          <>
            <FormModal table="teacher" type="update" data={teacher} />
            <FormModal table="teacher" type="delete" id={teacher.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const TeacherList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  const [teachers, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count(),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
              <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={teachers} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default TeacherList;
