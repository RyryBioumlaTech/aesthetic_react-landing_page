import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const footerLinks = {
    product:["Features","Pricing","Security","Roadmap","ChangeLog"],
    company:["About","Careers","Blog","Press","Partners"],
    resources:[
        "Documentation",
        "Help Center",
        "Community",
        "API References",
        "Status"
    ],
    legal:[
        "Privacy",
        "Terms",
        "Cookies Policy",
        "Licences",
        "Compliance"
    ]
}

export default function Footer(){
    return <footer className="border-t mt-4 border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* hidden on mobile footer part */}
            <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
                        <div className="rounded-lg">
                             <img src="/vite.svg" alt="myApp" className="w-6 h-6 sm:w-8 sm:w-8"/>
                        </div>
                        <span className="text-lg sm:text-xl font-bold">
                            <span className="text-white">My</span>
                            <span className="text-blue-400">App</span>
                        </span>
                    </div>
                    <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
                        Transform your workflow with AI-powered tools and automation.
                        Built for modern teams.
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                        <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                            <Twitter className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                            <Github className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                            <Linkedin className="w-5 h-5"/>
                        </a>
                        <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                            <Mail className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
                {/* visible on sm screen and above footer part*/}
                <div className="col-span-3 lg:col-span-4">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        {Object.entries(footerLinks).map(([category, links])=>(
                            <div key={category}>
                                <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                                    {category}
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {links.map((link)=>(
                                        <li key={link}>
                                            <a href="#" 
                                            className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-400 text-xs sm:text-sm">
                    c 2025 MyApp. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 sm:space-x-5 text-xs">
                    <a href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base">
                        Privacy Policy                    
                    </a>
                    <a href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base">
                        Terms of Services                    
                    </a>
                    <a href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base">
                        Cookie settings                    
                    </a>
                </div>
            </div>
        </div>
    </footer>
}