import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import RecentBlog from "./RecentBlog";
import { datas } from "../../data";
import ItemBlog from "../../components/ItemBlog";
import { ConfigProvider, Pagination } from "antd";
import { useSelector } from "react-redux";
import "./style.css";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const switchTheme = useSelector((state) => state.switch.modeTheme);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return null;
    }
    if (type === "next") {
      return null;
    }
    return originalElement;
  };
  const onChangePagination = (page) => {
    setCurrentPage(page);
  };
  const onClickPrev = () => {
    if (currentPage === 1) {
      return;
    } else setCurrentPage(currentPage - 1);
  };
  const onClickNext = () => {
    if (currentPage === Math.ceil(datas.length / 6)) {
      return;
    } else setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <p className="text-[200px] font-bold text-center">THE BLOG</p>
      <hr />
      <div className="mt-8 mb-6">
        <p className="text-2xl font-bold">Bài đăng gần nhất</p>
        <RecentBlog
          id1={datas[0].id}
          id2={datas[1].id}
          id3={datas[2].id}
          id4={datas[3].id}
          time1={datas[0].time}
          title1={datas[0].title}
          content1={datas[0].content}
          time2={datas[1].time}
          title2={datas[1].title}
          content2={datas[1].content}
          time3={datas[2].time}
          title3={datas[2].title}
          content3={datas[2].content}
          time4={datas[3].time}
          title4={datas[3].title}
          content4={datas[3].content}
          image1={datas[0].image}
          image2={datas[1].image}
          image3={datas[2].image}
          image4={datas[3].image}
        />
      </div>
      <div className="mb-6">
        <p className="text-2xl font-bold mb-8">Tất cả bài đăng</p>
        <div className="grid gap-8 mb-3 grid-cols-3">
          {datas.slice((currentPage - 1) * 6, currentPage * 6).map((item) => (
            <ItemBlog
              id={item.id}
              image={item.image}
              key={item.id}
              time={item.time}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <hr />
        <div className="mt-6 flex justify-between items-center">
          <p
            className={`${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
            } cursor-pointer flex items-center gap-3`}
            onClick={onClickPrev}
          >
            <ArrowLeftOutlined /> Previous
          </p>
          <ConfigProvider
            theme={{
              token: {
                colorText: switchTheme ? "#000" : "#fff",
              },
            }}
          >
            <Pagination
              current={currentPage}
              pageSize={6}
              className="text-center"
              total={datas.length}
              itemRender={itemRender}
              onChange={onChangePagination}
            />
          </ConfigProvider>
          <p
            className={`cursor-pointer flex items-center gap-3 ${
              currentPage === Math.ceil(datas.length / 6)
                ? "text-gray-400 cursor-not-allowed"
                : ""
            }`}
            onClick={onClickNext}
          >
            Next <ArrowRightOutlined />
          </p>
        </div>
      </div>
    </div>
  );
}
