import { fuelYourGrowth } from "../data/heroBannerData";

function FuelYourGrowth() {

    const fygData = fuelYourGrowth.map((elem, i) => {
        return (
            <div key={i} className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: "linear-gradient(180deg, rgb(36, 36, 42) 0%, rgb(16, 17, 24) 100%)", boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={elem.icon} />
                    </svg>
                </div>
                <h3 className="bg-clip-text text-2xl" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>{elem.title}</h3>
                <p className="text-base text-center text-gray-400 mt-3">
                    {elem.content}
                </p>
            </div>
        )
    })

    return (

        <section className="max-w-[1140px] mx-auto mt-[10rem] flex flex-col text-center">
            <h3 className="bg-clip-text mb-1 uppercase" style={{ backgroundImage: "linear-gradient(0deg, rgb(134, 36, 255) 0%, rgb(233, 115, 187) 76.5625%)", WebkitTextFillColor: "transparent" }}>Fuel your growth</h3>
            <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6 text-center" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>Growth-Ready Business Features</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 h-min w-full justify-center mt-5">
                {fygData}
            </div>
        </section>
    )
}

export default FuelYourGrowth;