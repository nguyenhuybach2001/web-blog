import { ExportOutlined } from "@ant-design/icons";
import React from "react";
import { ROUTE } from "../../constants/route";
import { useNavigate } from "react-router-dom";

export default function ItemBlog(props) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={props.image} className="rounded max-h-60 w-full" alt="#" />
      <div className="flex flex-col justify-between py-5">
        <p className="text-[#6941C6]">{props.time}</p>
        <div className="flex justify-between">
          <p
            className="text-xl font-bold cursor-pointer hover:underline my-3 "
            onClick={() => {
              navigate(ROUTE.DETAIL_BLOG.replace(":id", props.id));
            }}
          >
            {props.title}
          </p>
          <ExportOutlined
            className="cursor-pointer"
            onClick={() => {
              navigate(ROUTE.DETAIL_BLOG.replace(":id", props.id));
            }}
          />
        </div>
        <p className="line-clamp-4">{props.content}</p>
      </div>
    </div>
  );
}
