import { useState } from "react";

export const Joker = () => {
    const [comedy, setComedy] = useState("Click to Generate");
    async function generate(){
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json()
        setComedy(data.value);
    }
  return (
    <main className="my-36">
        <div className="text-center mb-8">
            <p className="text-4xl font-bold">ChuckNorris Jokes</p>
            <p className="text-lg">Free JSON API for hand curated Chuck norris jokes.</p>
        </div>
        <p className="my-16 text-xl border m-auto border-2 border-black rounded-lg p-3 max-w-lg w-fit m-auto text-green-600" onClick={generate}>{comedy}</p>
    </main>
  )
}
