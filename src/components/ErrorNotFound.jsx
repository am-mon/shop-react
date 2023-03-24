import React from "react";
import PageTemplate from "./PageTemplate";

const ErrorNotFound = () => {
  return (
    <PageTemplate>
      <div className="text-center text-4xl font-thin min-h-[40vh] flex items-center justify-center">
        404 Not Found.
      </div>
    </PageTemplate>
  );
};

export default ErrorNotFound;
