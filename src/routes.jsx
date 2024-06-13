import CinemaPage from "./Pages/CinemaPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/cinema',
        element: <CinemaPage />
    },
    {
        path: '/film/:id',
        element: <ProductPage />
    },

]

export default routes