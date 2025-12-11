export const code = {
    "App.jsx":`
    import { useState } from "react";
    import { myapp } from "@myapp";

    function App(){
        const [code, setCode] = useState("");

        const handleCompletion = async () => {
            const suggestion = await Icode.compile(code);
            setCode(suggestion);
            }
        
        return (
            <div className = "code">
                <CodeEditor
                    onChange = setCode(code)
                    onCode = {handleCompletion}
            </div>
        );
    }
    `,
    "Hero.jsx":`
    import { useState, useEffect, useMemo } from "react";
    import { myapp } from "@myapp";

    function Hero(){
        const [cali, setCali] = useState(1);

        const handleVision = async () => {
            const vision = await Icode.compile(code);
            setCali(vision);
            }
        
        return (
            <div className = "code">
                <CodeEditor
                    onChange = setCali(cali)
                    onCode = {handleVision}
            </div>
        );
    }
    `,
    "Navbar.jsx":`
    import { useState, useEffect } from "react";
    import { myapp } from "@myapp";

    function Navbar(){
        const [projection, setProjection] = useState(0);

        useEffect () => {
            const suggestion = await Icode.compile(code);
            setCode(suggestion);
            }
        
        return (
            <div className = "projection">
                <CodeEditor
                    onChange = setCode(code)
                    onCode = {handleCompletion}
            </div>
        );
    }`,

}

export const floatingCards = {
    "App.jsx":{
        "bgColor":"bg-blue-500/20",
        "icone":"AI",
        "couleurIcone":"text-blue-400",
        "couleurTitre":"text-blue-200",
        "couleurContenu":"text-blue-300",
        "titre":"powered code editor",
        "contenu":"The first super ai-ish powered code editor that think for you"
    },
    "Hero.jsx":{
        "bgColor":"bg-purple-500/20",
        "icone":"BLT",
        "couleurIcone":"text-purple-400",
        "couleurTitre":"text-purple-200",
        "couleurContenu":"text-purple-300",
        "titre":"Auto bolt thinking",
        "contenu":"Dynamic thinking done automaticaly"
    },
    "Navbar.jsx":{
        "bgColor":"bg-emerald-500/20",
        "icone":"SRCH",
        "couleurIcone":"text-emerald-400",
        "couleurTitre":"text-emerald-200",
        "couleurContenu":"text-emerald-300",
        "titre":"Smart search",
        "contenu":"Intelligent code research accross your project"
    }
}