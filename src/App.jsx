import { RouterProvider } from "react-router-dom";
import router from "./routes/Root";
import { AuthProvider } from "./context/AuthProvider.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
