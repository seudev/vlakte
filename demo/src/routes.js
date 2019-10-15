export default [
    {
        title: "Home",
        path: "/",
        exact: true,
        componentPath: "./components/Home"
    },
    {
        title: "Route 1",
        path: "/route1",
        componentPath: "./components/Route1"
    },
    {
        title: "Route 2",
        path: "/route2",
        componentPath: "./components/Route2"
    },
    {
        title: "Not Found",
        path: "*",
        componentPath: "./components/Route404"
    },
];
