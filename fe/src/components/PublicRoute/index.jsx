import React from "react";
import useDocumentTitle from "../../hooks";
import BaseLayout from "../Baselayout";

export default function PublicRouter(props) {
  useDocumentTitle(props.title);

  return <BaseLayout>{props.children}</BaseLayout>;
}
