import React, { Suspense } from "react";
import LoadingPage from "./LoadingPage";
const DyslexifyContent = React.lazy(() => import("./DyslexifyContent"))

function Dyslexify() {
  return (
      <Suspense fallback={<LoadingPage />}>
        <DyslexifyContent />
      </Suspense>
  );
}

export default Dyslexify;

