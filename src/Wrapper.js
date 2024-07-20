import React from "react";
import routes from "./routes";
import AuthProvider from "./context/AuthProvider";

export default () => {
    const renderedRoutes = typeof routes === 'function' ? routes() : routes;
    return <AuthProvider>{renderedRoutes}</AuthProvider>;
}
