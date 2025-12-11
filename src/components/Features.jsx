import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import nightOwl from "react-syntax-highlighter/dist/cjs/light";
export default function Features(){

    const features = [
        {
            
            "title":"AI Completion",
            "descrption":"Intelligent code suggestions powered by advanced Ai that learns from your coding pattern. Get real-time assistance with syntax, logic and best practises.",
            "code":`
                functionn handleSubmit(){
                    //Ai suggests next line
                    const data = await fetch("/api/submit")
                }
            `,
            "pos":"left"
        },
        {
            "title":"Automated testing",
            "descrption":"Generate comprehensive text suites automatically. Our AI analyse your coe and create unit tests, integration tests and edge cases coverage.",
            "code":`
                describe("user authantification",()=>{
                    //Auto generated test
                    if("login succesfully", ()=>{
                        //Test implementation
                        })
                    })
            `,
            "pos":"right"
        },
        {
            "title":"Smart debugging",
            "descrption":"Identify and fix bugs before they reach Production. Ai-powered errors detection and resolution suggestions help you debug faster.",
            "code":`
                //AI suggests fix;
                const result = await proccessingData(input);
                //fixed added await keyboard 
            `,
            "pos":"left"
        }
    ]

    return (<section id="features" className="relative min-h-screen flex-column pt-16 lg:pt-24 items-center justify-center px-4 mb-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl flex-column items-center font-semibold">
            <span className="flex text-center lg:justify-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Complete Development</span>
            <span className="flex justify-center bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">Workflow</span>
        </h2>

        <div className="mt-12 px-4 space-y-16">
            {features.map((el,key)=>(
                
                <div key={key} className={`space-y-3 lg:space-y-8 lg:mx-4 flex-column lg:flex ${el.pos == "left" ? "lg:flex-row-reverse":"lg:gap-5"}`}>
                    
                    <div className="w-full relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10 flex-1 mb-5 sm:mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20
                        rounded-xl sm:rounded-2xl transition-all duree-500"/>
                        <div className="flex items-center gap-2 bg-black px-2 py-1 rounded-t">
                                <div className="flex gap-1 sm:gap-2">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500 "/>
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500 "/>
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500 "/>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-300 font-mono">{el.title}</span>
                        </div>
                         <div className="relative overflow-hidden">
                            <SyntaxHighlighter language="javascript"
                                    style={nightOwl}
                                    customStyle={{ 
                                    backgroundColor:"black", 
                                    color:"gray",
                                    fontSize:"12px",
                                    margin:"0px",
                                    marginLeft:"-90px"   
                                    }}
                                    className="rounded-b"
                                    >
                                {el.code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                            <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{el.title}</h3>
                        </div>
                        <p className="text-center lg:text-left text-gray-300 text-base text-xl leading-relaxed">{el.descrption}</p>
                    </div>
                </div>    
            ))}
        </div>
    </section>)
}