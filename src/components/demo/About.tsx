import { lali, ram } from "@/assets"


export function About() {
    return (
        <section id="about" className="py-12 font-primary">
            <h2 className="text-4xl font-bold text-center mb-2">Our Union</h2>
            <div className="flex justify-center mb-8">
                {/* You can add your decorative element here if needed */}
            </div>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src={ram}
                                alt="Ram"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-secondary mt-4">Ram</h3>
                </div>
                <div className="text-center font-tertiary">
                    <p className="mb-4">
                    With immense joy and excitement, we are pleased to announce that we are embarking on a beautiful journey together as we tie the knot!
                    </p>
                    <p className="mb-4">
                    We warmly invite you to be a part of our wedding celebration. Please watch our invitation video attached for all the details.
                    </p>
                    <p>
                        Your presence and blessings will make our special day even more memorable, and we sincerely hope you can join us.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src={lali}
                                alt="Bride"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-secondary mt-4">Lalithya</h3>
                </div>
            </div>
        </section>
    )
}