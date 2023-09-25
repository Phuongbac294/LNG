
import Home from "../Pages/Home/home";
import Product from "~/Pages/Container/product";
import Service from "~/Pages/Container/service";
import Contact from "~/Pages/Container/contact";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/products", component: Product},
    {path: "/service", component: Service},
    {path: "/contact", component: Contact}

];

const privateRoutes = []

export {privateRoutes, publicRoutes}