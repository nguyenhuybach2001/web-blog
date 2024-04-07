import React, { useEffect } from "react";
import { datas } from "../../../data";
import ItemBlog from "../../../components/ItemBlog";
import { useLocation } from "react-router-dom";

export default function DetailBlog() {
  const ID = useLocation().pathname.split("/")[2];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ID]);
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <p className="text-2xl font-bold my-5">Bài viết mới nhất</p>
        <div className="flex flex-col gap-5">
          {datas
            .filter((item) => item.id != ID)
            .map((item) => (
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
      </div>

      <div className="col-span-2">
        <p className="my-5">{datas.find((item) => item.id == ID).time}</p>
        <p className="text-3xl font-bold">
          {datas.find((item) => item.id == ID).title}
        </p>
        <img
          className="my-5 rounded w-full"
          src={datas.find((item) => item.id == ID).image}
          alt=""
        />
        <p>{datas.find((item) => item.id == ID).content}</p>
      </div>
    </div>
  );
}
