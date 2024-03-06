import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TableGamesProvider } from "./contexts/TableGamesContext.jsx";
import { FormInputProvider } from "./contexts/FormInputContext.jsx";
import { PageLoaderProvider } from "./contexts/PageLoaderContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TableGamesProvider>
    <FormInputProvider>
      <PageLoaderProvider>
        <App />
      </PageLoaderProvider>
    </FormInputProvider>
  </TableGamesProvider>
);
