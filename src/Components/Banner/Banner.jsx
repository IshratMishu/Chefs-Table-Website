

const Banner = () => {
    return (
        <div className="relative mb-20">
            <img src="/Rectangle 1.png" alt="Banner Image" />

            <div className="text-center absolute space-y-3 md:top-1/2 md:left-1/2  transform md:-translate-x-1/2 md:-translate-y-1/2">
                <h1 className="font-lexend font-bold text-5xl text-white">Find a Personalized Cooking Class Perfectly Suited to You!</h1>
                <p className="font-lexend text-lg text-white">Immerse yourself in a hands-on learning experience, explore new flavors, and unleash your creativity in the kitchen. Join us for an unforgettable journey of culinary discovery!</p>
                <div className="flex gap-5 justify-center">
                <button className="bg-[#0BE58A] font-lexend font-semibold text-xl rounded-3xl p-2 px-3">Explore Now</button>
                <button className="border-2 border-white text-white font-lexend font-semibold text-xl rounded-3xl p-2 px-3">Our Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;