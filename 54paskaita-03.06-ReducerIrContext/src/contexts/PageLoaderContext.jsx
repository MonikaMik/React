import { createContext, useState } from "react";

const PageLoaderContext = createContext();

const PageLoaderProvider = ({ children }) => {
  const [pageLoader, setPageLoader] = useState("cards");
  return (
    <PageLoaderContext.Provider
      value={{
        pageLoader,
        setPageLoader,
      }}
    >
      {children}
    </PageLoaderContext.Provider>
  );
};

export default PageLoaderContext;
export { PageLoaderProvider };
