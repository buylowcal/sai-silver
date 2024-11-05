import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? `${title} | e-Commerce Admin Dashboard`
          : " SaiSilver |  e-Commerce Admin Dashboard"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : " SaiSilver : Sai Silver Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
