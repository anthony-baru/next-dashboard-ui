"use client";
import React from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = React.useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      view={view}
      views={["work_week", "day"]}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 18, 0, 0)}
    />
  );
};

export default BigCalendar;
