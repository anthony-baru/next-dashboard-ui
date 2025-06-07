import React from "react";
import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Announcement from "@/components/Announcement";
import Link from "next/link";
import Performance from "@/components/Performance";
const SingleStudentPage = () => {
  return (
    <div className="flex flex-1 flex-col xl:flex-row p-4 gap-4 ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="flex flex-1 bg-lamaSky py-6 px-4 rounded-md   gap-4">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Cameron Moran</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                itaque numquam quae! Veniam at, nulla laudantium delectus
                provident vel quia.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium"></div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <Image
                  src={"/blood.png"}
                  width={14}
                  height={14}
                  alt="blood group"
                />
                <span>A+</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <Image
                  src={"/date.png"}
                  width={14}
                  height={14}
                  alt="date of birth"
                />
                <span>January 2003</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <Image
                  src={"/mail.png"}
                  width={14}
                  height={14}
                  alt="email address"
                />
                <span>user@gmail.com</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <Image
                  src={"/phone.png"}
                  width={14}
                  height={14}
                  alt="phone number"
                />
                <span>+1 234 567</span>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                width={24}
                height={24}
                alt=""
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleClass.png"}
                width={24}
                height={24}
                alt=""
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleBranch.png"}
                width={24}
                height={24}
                alt=""
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleLesson.png"}
                width={24}
                height={24}
                alt=""
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurple" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudentPage;
