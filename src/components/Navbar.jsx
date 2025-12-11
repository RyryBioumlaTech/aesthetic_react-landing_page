import { Menu, X } from "lucide-react";
import {useState }from "react";

export default function Navbar({ onscroll }){
    const [menuOuvert, setmenuOuvert] = useState(false);

    return (<nav className={`fixed t-0 z-50 w-full transition-all duree-300 pt-2 px-4 sm:px-8 ${ onscroll ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg":"bg-slate-950/20 backdrop-blur-sm"} `}>
        <div className="max-w-7xl flex w-full justify-between mx-auto py-3 px-4 sm:px-6 lg:px-8 ">
            <div className="flex gap-2 items-center cursor-pointer">
                <div>
                    <img src="/vite.svg" alt="myApp" className="w-6 h-6 sm:w-8 sm:w-8"/>
                </div>
                <span className="text-lg font-medium">
                    <span>My</span>
                    <span className="text-blue-400">App</span>
                </span>
            </div>
            <ul className="hidden md:flex space-x-6 items-center">
                <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
            </ul>

            <button onClick={()=> setmenuOuvert((etat)=>!etat)} className="md:hidden">
                {menuOuvert ?(<X className="md:hidden hover:text-gray-300 w-5 h-5 sm:w-7 sm:w-7 "/>) :(<Menu className="md:hidden hover:text-gray-300 w-5 h-5 sm:w-7 sm:w-7"/>)}
            </button>
        </div>
        {menuOuvert && <ul className="w-full pb-2 flex-column justify-center md:hidden items-center bg-slate-900/95 border-t border-slate-950/20 backdrop-blur-lg  animation-glisser animation-both duree-300">
                     <li className="flex justify-center"><a href="#features" className="text-gray-300 hover:text-white" onClick={()=>setmenuOuvert(false)} >Features</a></li>
                    <li className="flex justify-center"><a href="#pricing" className="text-gray-300 hover:text-white" onClick={()=>setmenuOuvert(false)} >Pricing</a></li>
                    <li className="flex justify-center"><a href="#testimonials" className="text-gray-300 hover:text-white" onClick={()=>setmenuOuvert(false)}>Testimonials</a></li>
                </ul>
            }
    </nav>)
    
}