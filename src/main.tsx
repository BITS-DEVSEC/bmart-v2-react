import {
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core";
import { createRoot } from "react-dom/client";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";

const base: MantineColorsTuple = [
  "#fbefef",
  "#efdcdc",
  "#e2b4b4",
  "#d68a8a",
  "#cc6667",
  "#c65050",
  "#c44544",
  "#ad3736",
  "#9b2f2f",
  "#541718",
];

const theme = createTheme({
  colors: {
    primary: base,
  },
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 9 },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider defaultColorScheme="light" theme={theme}>
    <Notifications />
    <App />
  </MantineProvider>
);
