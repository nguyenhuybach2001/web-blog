import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../redux/reducers/switchTheme";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const switchTheme = useSelector((state) => state.switch.modeTheme);
  const onChange = (checked) => {
    dispatch(switchMode(checked));
  };
  const path = useLocation().pathname;
  return (
    <div className="h-20">
      <div className="min-w-[520px] max-w-[1280px] mx-auto h-full flex justify-between items-center">
        <p
          className="text-4xl font-bold cursor-pointer"
          onClick={() => navigate(ROUTE.ADMIN)}
        >
          Cao Thu Trang
        </p>
        <div className="flex">
          <div className="grid gap-3 w-[35rem] grid-cols-3">
            <div className="col-span-1 flex justify-end">
              <p
                className={`text-lg w-fit cursor-pointer hover:font-bold  ${
                  path === ROUTE.BLOG ? "font-bold underline" : ""
                }`}
                onClick={() => navigate(ROUTE.BLOG)}
              >
                Blog
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p
                className={`text-lg w-fit cursor-pointer hover:font-bold  ${
                  path === ROUTE.ABOUT ? "font-bold underline" : ""
                }`}
                onClick={() => navigate(ROUTE.ABOUT)}
              >
                Giới thiệu
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <p
                className={`text-lg w-fit cursor-pointer hover:font-bold  ${
                  path === ROUTE.NEWSLETTER ? "font-bold underline" : ""
                }`}
                onClick={() => navigate(ROUTE.NEWSLETTER)}
              >
                Bài viết mới nhất
              </p>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Switch
              checkedChildren={<SunOutlined />}
              unCheckedChildren={<MoonOutlined />}
              defaultChecked
              onChange={onChange}
              className={`${switchTheme ? "" : "bg-[#373737]"}`}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
