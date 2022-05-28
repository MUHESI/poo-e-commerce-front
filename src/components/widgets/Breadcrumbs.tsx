import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";

const MyBreadcrumbs = ({ history, location: { pathname } }: any) => {
  const pathnames = pathname.split("/").filter((x: string) => x);

  return (
    <div className="mainBreadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={() => history.push("/")}
          className="isCursor link"
        >
          Dashbord
        </Link>
        {pathnames.map((item: string, index: number) => {
          const routerTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Link
              color="inherit"
              onClick={() => history.push(routerTo)}
              className="isCursor link"
            >
              {item}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
export default withRouter(MyBreadcrumbs);
