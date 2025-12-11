import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { code ,floatingCards} from "../data/code";

export default function Hero(){
    const [positionSouris, setPositionSouris] = useState({x:0, y:0});
    const [tabActive, setTabAvtive] = useState("App.jsx");

    useEffect(()=>{
        function lireSouris(e){
            setPositionSouris({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", lireSouris);

        return ()=>{
            window.removeEventListener("mousemove", lireSouris);
        }
    }, []);

    const floatcards = floatingCards[tabActive]

    return <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30" style={{
            background: `radial-gradient(600px circle at ${positionSouris.x}px ${positionSouris.y}px, rgba(95, 156, 255, 0.15), transparent 40%)`
            }}>
        </div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl w-full mx-auto relative text-center sm:px-8">
            <div className="max-x-7xl mx-auto flex flex-col relative lg:grid lg:grid-cols-2 text-center lg:text-left mx-auto gap-6 sd:gap-8 lg:gap-12">
                <div>
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 mb-4 px-3 sm:px-4 py-2 rounded-full border border-blue-500/20 animation-glisser-bas duree-700">
                        <Sparkles className="w-4 h-4 text-blue-400"/>
                        <span className="text-xs  text-blue-300">Introducing MyApp</span>
                    </div>

                    <h1 className="font-semibold text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 animate-in animation-glisser-bas duree-700 delai-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text block text-transparent">Code faster</span>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text block text-transparent">Build better</span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text block text-transparent">with MyApp AI</span>
                    </h1>

                    <p className="text-gray-400 text-md sm:text-base lg:text-lg animate-in animation-glisser-bas duree-700 delai-200 max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-8 leading-relaxed">
                        accelerate your devellopment workflow with intelligent code completion, automates testing, and
                         smart-debbuging. ship production-ready code 10x faster.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start animate-in animation-glisser-bas duree-700 delai-300 gap-2">
                        <button className="flex w-full sm:w-auto group items-center justify-center gap-2 bg-gradient-to-b from-blue-500 to-blue-400 px-3 py-2 sm:py-3 rounded-lg hover:scale-102 transition-all font-semibold duree-300">
                            <span>Start coding free</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duree-300"/>
                        </button>
                        <button className="flex w-full sm:w-auto group items-center justify-center gap-2 bg-white/10 border border-white/5 px-3 py-2 sm:py-3 rounded-lg hover:bg-white/20 transition-all font-semibold duree-300">
                            <Play className="fill-white w-4 h-4"/>
                            <span>Watch demo</span>
                        </button>

                    </div>
                </div>
                {/* code editor */}
                <div className="relative order-2 w-full">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10">
                        <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[400px] border border-white/5">
                            {/*entete ide */}
                            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1 sm:gap-2">
                                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500 "/>
                                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500 "/>
                                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500 "/>
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-300">MyApp</span>
                                </div>
                                <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400"/>
                            </div>

                            <div className="p-3 sm:p-4 relative h-full">
                                <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-hidden">
                                    <button className={`text-xs sm:text-sm rounded-t-lg backdrop-blur-sm px-2 py-2 ${tabActive === "App.jsx" ? "bg-blue-500/30 border border-blue-400/20 text-white":"bg-white/5 border border-white/10 text-gray-300 hover:bg-white/20"} trasition-all duree-200 whitespace-nowrap`}
                                        onClick={()=>setTabAvtive("App.jsx")}
                                    >App.jsx</button>
                                    <button className={`text-xs sm:text-sm rounded-t-lg backdrop-blur-sm px-2 py-2 ${tabActive === "Hero.jsx" ? "bg-blue-500/30 border border-blue-400/20 text-white":"bg-white/5 border border-white/10 text-gray-300 hover:bg-white/20"} trasition-all duree-200 whitespace-nowrap`}
                                        onClick={()=>setTabAvtive("Hero.jsx")}
                                    >Hero.jsx</button>
                                    <button className={`text-xs sm:text-sm rounded-t-lg backdrop-blur-sm px-2 py-2 ${tabActive === "Navbar.jsx" ? "bg-blue-500/30 border border-blue-400/20 text-white":"bg-white/5 border border-white/10 text-gray-300 hover:bg-white/20"} trasition-all duree-200 whitespace-nowrap`}
                                        onClick={()=>setTabAvtive("Navbar.jsx")}
                                    >Navbar.jsx</button>
                                </div>

                                {/* section code */}
                                <div className="relative overflow-hidden flex-grow">
                                    <SyntaxHighlighter language="javascript"
                                    customStyle={{borderRadius:"8px", 
                                        backgroundColor:"black", 
                                        color:"gray",
                                        fontSize:"12px",
                                        textAlign:"left"    
                                    }}>
                                        {code[tabActive]}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                        {/* floating cards */}
                        <div className={`hidden lg:block absolute w-100 bottom-4 right-4 ${floatcards.bgColor} p-4 rounded-lg backdrop-blur-sm transform translate-x-8 translate-y-8`}>
                            <div className="flex space-x-2 items-center mb-2">
                                <div className={`${floatcards.couleurIcone} text-sm font-bold`}>
                                    {floatcards.icone}
                                </div>
                                <span className={`${floatcards.couleurTitre}`}>{floatcards.titre}</span>
                            </div>
                            <div className={`${floatcards.couleurContenu}`}>
                                {floatcards.contenu}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}