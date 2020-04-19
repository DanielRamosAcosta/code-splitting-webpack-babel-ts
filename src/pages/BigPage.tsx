import React, { FC, useEffect } from "react"
import { sample as sample1 } from "../utils/fat-data-1"
import { sample as sample2 } from "../utils/fat-data-2"
import { sample as sample3 } from "../utils/fat-data-3"

export const BigPage: FC = () => {
  useEffect(() => {
    console.log(sample1)
    console.log(sample2)
    console.log(sample3)
  }, [])

  return <h2>Big Page</h2>
}
