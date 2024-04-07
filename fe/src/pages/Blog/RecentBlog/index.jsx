import { ExportOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/route";

export default function RecentBlog(props) {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e);
  };
  return (
    <div>
      <div className="grid gap-10 mt-8 grid-cols-2">
        <div className="col-span-1 flex flex-col justify-between">
          <img className="rounded w-full max-h-80" src={props.image1} alt="#" />
          <div className="flex flex-col justify-between">
            <p className=" text-[#6941C6]">{props.time1}</p>
            <div className="flex justify-between ">
              <p
                className="text-2xl font-bold cursor-pointer hover:underline"
                onClick={() => {
                  onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id1));
                }}
              >
                {props.title1}
              </p>
              <ExportOutlined
                className="cursor-pointer"
                onClick={() => {
                  onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id1));
                }}
              />
            </div>
            <p className="mt-2 line-clamp-3">{props.content1}</p>
          </div>
        </div>
        <div className="col-span-1 gap-6 grid grid-rows-2">
          <div className="row-span-1 gap-5 grid grid-cols-2">
            <img src={props.image2} className="rounded h-full" alt="#" />
            <div className="flex flex-col gap-4 pb-5">
              <p className="text-[#6941C6]">{props.time2}</p>
              <div className="flex justify-between">
                <p
                  className="text-xl font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id2));
                  }}
                >
                  {props.title2}
                </p>
                <ExportOutlined
                  className="cursor-pointer"
                  onClick={() => {
                    onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id2));
                  }}
                />
              </div>
              <p className="line-clamp-3">{props.content2}</p>
            </div>
          </div>
          <div className="row-span-1 gap-5 grid grid-cols-2">
            <img src={props.image3} className="rounded h-full" alt="#" />
            <div className="flex flex-col gap-4 pb-5">
              <p className="text-[#6941C6]">{props.time3}</p>
              <div className="flex justify-between">
                <p
                  className="text-xl font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id3));
                  }}
                >
                  {props.title3}
                </p>
                <ExportOutlined
                  className="cursor-pointer"
                  onClick={() => {
                    onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id3));
                  }}
                />
              </div>
              <p className="line-clamp-3">{props.content3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-10 mt-8 grid-cols-2">
        <img
          className="rounded w-full col-span-1 max-h-80"
          src={props.image4}
          alt="#"
        />
        <div className="col-span-1 flex flex-col gap-4">
          <p className=" text-[#6941C6]">{props.time4}</p>
          <div className="flex justify-between ">
            <p
              className="text-2xl font-bold cursor-pointer hover:underline"
              onClick={() => {
                onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id4));
              }}
            >
              {props.title4}
            </p>
            <ExportOutlined
              className="cursor-pointer"
              onClick={() => {
                onClick(ROUTE.DETAIL_BLOG.replace(":id", props.id4));
              }}
            />
          </div>
          <p className="mt-2 line-clamp-6	">{props.content4}</p>
        </div>
      </div>
    </div>
  );
}
