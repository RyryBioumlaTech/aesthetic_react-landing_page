export default function Testimonial(){

    const testimonials = [
        {
            nom:"Alain Lebon",
            role:"Senior Developper",
            image:"/user.jpg",
            contenu:"This AI-powered solution has revolutionned how we write code"
        },
        {
            nom:"Christia Marcson",
            role:"Lead Developper",
            image:"/user.jpg",
            contenu:"The automated and debugging feature are game changer. We ship code like beast now."
        },
        {
            nom:"Ryan Bioumla",
            role:"fullstack engineer",
            image:"/user.jpg",
            contenu:"Our development speed increased 300% time faster than before we adopted thi solution"
        }
    ]

    return <section id="testimonials" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full px-4 md:px-6 lg:px-8">
            <div className="text-center md:text-left flex flex-col">
                <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold">What Developpers are saying about us</h2>
                <p className="text-sm mt-2 text-gray-300 md:pr-3 leading-relaxed">Everything you need to developp, test and deploy applications with AI-powered development tools</p>
            </div>
            <div className="flex flex-col gap-3 mt-6 md:mt-0">
                {testimonials.map((testimonial, key)=>(
                    <div className="flex flex-row gap-2 border border-slate-800 p-4 rounded-lg">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-gray-300 leading-relaxed">{testimonial.contenu}</p>
                            <div className="flex flex-row gap-2">
                                <img src={testimonial.image} alt={`${testimonial.nom}'s profile pic`} 
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full  object-cover"
                                />
                                <div className="flex flex-col gap-1/2">
                                    <span className="font-bold text-gray-200 text-sm">{testimonial.nom}</span>
                                    <span className="text-xs font-semibold text-gray-400">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}