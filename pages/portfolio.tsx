import React, { ReactElement } from "react";
import FunWorks from "../components/FunWorks";
import Layout from "../components/Layout";
import Works from "../components/Works";

interface Props {}

export default function portfolio({}: Props): ReactElement {
  return (
    <Layout title="Portfolio">
      <div className="pt-12">
        <Works></Works>
        <FunWorks></FunWorks>
      </div>
    </Layout>
  );
}
