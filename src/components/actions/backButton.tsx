import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { App } from "@capacitor/app";

export function BackButtonHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const backHandler = App.addListener("backButton", () => {
      if (location.pathname !== "/") {
        navigate(-1);
      } else {
        App.exitApp();
      }
    });

    return () => {
      backHandler.then((listener) => listener.remove()); // Correct way to remove listener
    };
  }, [location, navigate]);

  return null;
}
