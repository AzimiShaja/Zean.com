import React, { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState, useEffect } from "react";
function lazyWithTimeout(importFunction) {
  return lazy(() =>
    Promise.all([
      importFunction(),
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]).then(([moduleExports]) => moduleExports)
  );
}

const LazyIndexPage = lazyWithTimeout(() => import("/src/pages/IndexPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Suspense>
      {isLoading ? (
        <div className="h-screen bg-black flex justify-center items-center flex-col gap-5">
          <AiOutlineLoading3Quarters className="animate-spin text-7xl text-white" />
        </div>
      ) : (
        <Routes>
          <Route path="/">
            <Route index element={<LazyIndexPage />} />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
