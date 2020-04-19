import React, { Suspense } from "react"
import { Spinner } from "../components/Spinner"

const HomePage = React.lazy(() =>
  import("./Home").then((module) => ({
    default: module.Home,
  })),
)

export const HomeLazy = () => (
  <Suspense fallback={<Spinner />}>
    <HomePage />
  </Suspense>
)
