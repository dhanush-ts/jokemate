import { useRef, useState } from "react"

export const Word = () => {
    const textref = useRef("");
    const [words, setWords] = useState(0);
    const [char, setChar] = useState(0);

    function HandleChange(){
        const text = textref.current.value.trim();
        const wod = text ? text.split(/\s+/) : [];
        setWords(wod.length);
        setChar(textref.current.value.length);
    }

    function clear(){
        textref.current.value="";
        setWords(0);
        setChar(0);
    }

  return (
    <main>
        <div className="text-center mb-8">
            <p className="text-4xl font-bold">Word Counter</p>
            <p className="text-lg">Free online character and word count tool.</p>
        </div>

        <div className="m-auto max-w-3xl">
            <textarea ref={textref} onChange={HandleChange} className="focus:border-transparent focus:outline-none resize-none w-full h-72 shadow-md p-4 align-top border rounded-lg" placeholder="Type or paste your text ..." type="text"  />
            
            {textref.current.value!==""?<p onClick={clear} className="my-6 hover:cursor-pointer m-auto w-24 text-center bg-red-500 p-2 rounded-lg text-slate-100">Clear All</p>:
            <p onClick={clear} className="my-6 hover:cursor-not-allowed m-auto w-24 text-center bg-red-300 p-2 rounded-lg text-slate-100" disabled>Clear All</p>}
            
            <div className="flex justify-between mb-6">
                <p className="bg-blue-500 p-2 rounded-lg text-slate-100">Character : {char}</p>
                <p className="bg-blue-500 p-2 rounded-lg text-slate-100 px-6">Words : {words}</p>        
            </div>
            
        </div>
    
        
    </main>
  )
}
