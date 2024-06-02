import CinemaPage from "./Pages/CinemaPage";
import HomePage from "./Pages/HomePage";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/cinema',
        element: <CinemaPage />
    },

]

export default routes