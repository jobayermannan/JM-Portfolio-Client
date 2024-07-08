import React, { useEffect } from "react";
import Header from "../../Components/Header";

import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import Experiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  const isAdminPage = true;
  const imgMargin = isAdminPage ? "22px" : "0rem";
  const textMargin = isAdminPage ? "2rem" : "0rem";
  const dashboard = isAdminPage ? "dashboard" : <></>;

  const tabItems = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Experiences",
      children: <Experiences />,
    },
    {
      key: "4",
      label: "Projects",
      children: <AdminProjects />,
    },
    {
      key: "5",
      label: "Courses",
      children: <AdminCourses />,
    },
    {
      key: "6",
      label: "Contact",
      children: <AdminContact />,
    },
  ];

  return (
    <div>
      <Header imgMargin={imgMargin} dashboard={dashboard} textMargin={textMargin} />

      <div className="flex gap-10 items-center px-5 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          <button className='border-2 px-4  text-white border-primary  bg-primary '>Logout</button>
        </h1>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      )}
    </div>
  );
}

export default Admin;
