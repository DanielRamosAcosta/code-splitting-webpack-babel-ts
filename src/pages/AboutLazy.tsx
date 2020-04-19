import React, { Suspense } from "react"
import { Spinner } from "../components/Spinner"

const AboutPage = React.lazy(() =>
  import("./About").then((module) => ({
    default: module.About,
  })),
)

export const AboutLazy = () => (
  <Suspense fallback={<Spinner />}>
    <AboutPage />
  </Suspense>
)
