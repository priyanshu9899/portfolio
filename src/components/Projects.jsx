import React, { Suspense } from "react";
import LoadingPage from "./LoadingPage";
const ProjectsContent = React.lazy(() => import("./ProjectsContent"))

function Projects() {
  return (
      <Suspense fallback={<LoadingPage />}>
        <ProjectsContent />
      </Suspense>
  );
}

export default Projects;