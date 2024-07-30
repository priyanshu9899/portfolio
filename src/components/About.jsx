import React, { Suspense } from "react";
import LoadingPage from "./LoadingPage";
const AboutContent = React.lazy(() => import("./AboutContent"))

function About() {
  return (
      <Suspense fallback={<LoadingPage />}>
        <AboutContent />
      </Suspense>
  );
}

export default About;
