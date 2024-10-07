import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/appSlice"; // Import the setUser action
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Import your auth instance

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.appSlice);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(setUser(null)); // Clear user if not logged in
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [dispatch]);

  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <NavBar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-24 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
