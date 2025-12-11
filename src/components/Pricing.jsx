import { Check, Star } from "lucide-react"

export default function Pricing(){

    const plans = [
        {
            titre:"Starter",
            prix :"59.99",
            description:"perfect for one person only",
            avantages : [
                "10GB storage",
                "Basic analytics",
                "Email suport",
                "API access",
                "mobile app"
            ],
            plusPopulaire : false
        },
        {
            titre:"Team",
            prix :"99.99",
            description:"perfect for a small teams",
            avantages : [
                "Up to 5 members on the teams",
                "100GB storage",
                "advanced AI analytics",
                "Email and call support",
                "large catalog API access",
                "mobile app",
                "Advanced security"
            ],
            plusPopulaire : true
        },
        {
            titre:"Enterprise",
            prix :"159.99",
            description:"For large organisation",
            avantages : [
                "Unlimites team members",
                "unlimited storage",
                "advanced AI enterprise analytics",
                "Email  and phone support 24/7",
                "API access",
                "mobile app",
                "Advanced Security",
                "Custom integration"
            ],
            plusPopulaire : false
        }
    ]

    return <section id="pricing" className="relative min-h-screen space-y-8 lg:space-y-12 items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-5xl flex-column items-center font-semibold">
            <span className="flex text-center justify-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Simple, Transparent</span>
            <span className="flex justify-center bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">Pricing Plans</span>
        </h2>

        <p className="text-center text-gray-400  text-xl leading-relaxed">Choose the perfect plan that match your needs. All plans include a 1 month free-trial</p>

        <div className="relative">
           <div className="px-4 space-y-3 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:space-x-4 md:gap-8 lg:gap-6">
             {plans.map((plan,key)=>(
                    <div key={key} className={`relative mb-6 rounded-xl flex w-full  flex-column justify-between border p-6 mx-auto group overflow-visible bg-slate-900/50 backdrop-blur-sm ${plan.plusPopulaire ? "border-blue-400 md:scale-105":"border-gray-300/20"}`}>

                        {/* glassy card animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"/>

                        {plan.plusPopulaire && (
                            <div className="absolute left-1/3">
                                <div className="relative h-6 flex items-center justify-center gap-1 -top-9 bg-gradient-to-b from-blue-400 to-purple-400 p-2 rounded-full text-xs sm:text-sm">
                                    <Star className="w-4 h-4 fill-white"/>
                                    <span>Most popular</span>
                                </div>
                            </div>
                        )}
                        <div className="relative w-full text-center flex flex-col justify-between">
                           <div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                                    {plan.titre}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                    {plan.description}
                                </p>
                                <div>
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        {plan.prix}
                                    </span>
                                    <span className="text-gray-400 ml-1 sm:ml-2 sm:text-base">/month</span>
                                </div>
                           </div>
                            <ul className="relative mt-3">
                                {plan.avantages.map((av, avKey)=>(
                                    <li key={avKey} className="flex space-x-2 items-center mb-2">
                                        <div className="border w-4 h-4 border-gray-300/20 rounded-full flex items-center justify-center bg-blue-500/20">
                                            <Check className="w-3 h-3"/>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-400">{av}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-6 group items-center justify-center  px-3 py-2 sm:py-3 rounded-lg ${plan.plusPopulaire ? "bg-gradient-to-b from-blue-500 to-blue-400 hover:scale-102":"bg-white/10 border border-white/5 hover:bg-white/20"} transition-all font-semibold duree-300`}>
                                Get started
                            </button>
                        </div>
                    </div>
            ))}
           </div>
           <div className="text-center text-gray-400 mt-8 text-xl leading-relaxed">
            <p>need a custom plan ? <a href="#" className="text-blue-400 hover:text-blue-300">Contact us</a></p>
           </div>
        </div>
    </section>
}