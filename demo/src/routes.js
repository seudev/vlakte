export default [
    {
        title: "Home",
        path: "/",
        exact: true,
        breadcrumb: false,
        componentPath: "./components/Home",
    },
    {
        title: "Route 1",
        path: "/route1",
        exact: true,
        breadcrumb: true,
        componentPath: "./components/Route1"
    },
    {
        title: "Route 2",
        path: "/route2",
        exact: true,
        breadcrumb: true,
        componentPath: "./components/Route2"
    },
    {
        title: "Route 3",
        path: "/route2/route3",
        exact: true,
        breadcrumb: true,
        componentPath: "./components/Route3"
    },
    {
        title: "Route 4",
        path: "/route2/route3/route4",
        exact: true,
        breadcrumb: true,
        componentPath: "./components/Route4"
    },
    {
        title: "Route 5",
        path: "/route2/route3/route4/route5",
        exact: true,
        breadcrumb: true,
        componentPath: "./components/Route5"
    },
    {
        title: "Not Found",
        path: "*",
        breadcrumb: false,
        componentPath: "./components/Route404"
    },
];
