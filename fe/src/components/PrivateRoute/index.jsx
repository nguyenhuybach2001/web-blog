import React from "react";
import useDocumentTitle from "../../hooks";
import BaseLayout from "../Baselayout";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route";

export default function PrivateRouter(props) {
  const navigate = useNavigate();
  useDocumentTitle(props.title);
  const access_token = localStorage.getItem("access_token");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BaseLayout>
      {access_token && user?.isAdmin ? (
        props.children
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button onClick={() => navigate(ROUTE.BLOG)}>Back Home</Button>
          }
        />
      )}
    </BaseLayout>
  );
}
