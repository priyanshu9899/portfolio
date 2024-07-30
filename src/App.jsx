import React, {Suspense} from "react";
import Navbar from "./components/Navbar"
import LoadingPage from "./components/LoadingPage";
const Body = React.lazy(() => import('./components/Body'));

function App() {
  

  return (
    <div className="bg-blend bg-zinc-900 text-white">
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <Body />
      </Suspense>
    </div>
  )
}

export default App
