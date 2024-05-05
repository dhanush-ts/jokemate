import { Route, Routes } from "react-router-dom"
import { Word } from "../wordCounter/Word"
import { Joker } from "./Joke/Joker"
import { PageNotFound } from "../PageNotFound"


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Word />}></Route>
        <Route path="/joke" element={<Joker />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}
