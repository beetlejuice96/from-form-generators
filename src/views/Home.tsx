import React, { FC, Fragment, useEffect } from "react";
import { GeneratorForm } from "../components/forms/formGenerator";
import Layout from "../components/layouts/Default";

const Home: FC = () => {
  return (
    <Fragment>
      <Layout />
      <GeneratorForm />
    </Fragment>
  );
};

export default Home;
