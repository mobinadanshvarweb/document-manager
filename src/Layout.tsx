import { Outlet, useNavigate } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import "./index.css";
import SideLink from "./components/SideLink";
import Button from "./components/Button";
import Profile from "./pages/profile/Profile";

import Calender from "./components/Calender";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import Modal from "./components/Modal";
import SearchDashboard from "./components/Search";

const Layout = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-56 min-h-screen bg-white  flex flex-col px-4">
        <div className="h-screen flex flex-col">
          <div className="flex flex-col justify-center items-center flex-1">
            <div className="w-full h-2/5 flex justify-center items-center">
              <Profile />
            </div>
            <ul className="w-full h-3/5 flex flex-col gap-4">
              <SideLink
                text="Dashboard"
                href="/dashboard"
                icon={<IoHomeOutline />}
              />
              <SideLink
                text="Documentation"
                href="/document"
                icon={<HiOutlineDocumentDuplicate />}
              />
              <SideLink text="Setting" href="/setting" icon={<LuSettings />} />
            </ul>
          </div>

          <Button
            icon={<TbLogout2 />}
            className="hover:bg-custombg"
            text={`Logout`}
            onClickHandler={() => {
              navigate("/login");
            }}
          />
        </div>
      </div>

      <div className="flex-1 bg-custombg">
        <div className="w-full  flex flex-col gap-8 min-h-screen p-10">
          {!location.pathname.endsWith("setting") && (
            <>
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <SearchDashboard />
                </div>
                <div className="">
                  <Calender />
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="font-semibold text-2xl text-customtext tracking-widest">
                  {location.pathname.endsWith("dashboard")
                    ? "Welcome!"
                    : location.pathname.endsWith("document")
                    ? "Documentation"
                    : ""}
                </p>

                <Button
                  text=""
                  icon={<IoAdd className="text-xl" />}
                  onClickHandler={() => {
                    setModal(true);
                  }}
                  className="!w-12 h-12 !rounded-full justify-center shadow bg-custompurpule text-white"
                />
              </div>
            </>
          )}
          <div className="flex justify-center items-center">
            <Outlet />
          </div>
        </div>
        {modal && <Modal setModal={setModal} />}
      </div>
    </div>
  );
};

export default Layout;
