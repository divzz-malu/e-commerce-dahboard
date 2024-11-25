import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/dashboard/Dashboard";
import RootLayout from "./pages/Root";
import OrderList from "./pages/orders/OrderList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "orders",
                element: <OrderList />,
            },
        ],
    },
]);
const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
