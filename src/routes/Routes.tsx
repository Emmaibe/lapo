import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { HomePage } from "../pages/home/HomePage.tsx";
import Dashboard from "../pages/home/components/Dashboard.tsx";

/**
 * Sets up the routing configuration for the application using React Router.
 *
 * The base path "/" renders the App component, which serves as the main layout.
 * The child route handles the home page.
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Main application layout
        children: [
            {
                path: "", // Loads HomePage when the user is at "/"
                element: <HomePage />,
                children: [
                    {
                        path: "", // Child routes should NOT start with "/"
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
]);
