import React, { Suspense } from "react"
import { Spinner } from "../components/Spinner"

const BigPage = React.lazy(() =>
  import("./BigPage").then((module) => ({
    default: module.BigPage,
  })),
)

export const BigPageLazy = () => (
  <Suspense fallback={<Spinner />}>
    <BigPage />
  </Suspense>
)
