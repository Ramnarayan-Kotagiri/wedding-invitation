
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, CalendarIcon, GlassesIcon, MusicIcon } from "lucide-react"
import { LocationMap } from "@/components/demo/LocationMap" // Import komponen peta

export function EventDetails() {

    const events = [
        {
            id: "ceremony",
            title: "Wedding Ceremony",
            date: "November 09, 2024",
            time: "9:39 PM",
            venue: "Kranthi Kalyana Vedika",
            address: "Eluru, Andhra Pradesh",
            details: "Join us as we exchange vows and begin our journey together.",
            icon: <GlassesIcon className="w-6 h-6 text-primary" />,
            mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.47840288458!2d81.0644939!3d16.6959085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36135d5206b41f%3A0xc90c2b75e8d3828f!2sKranthi%20Kalyana%20Vedika%20-%20Kranthi%20Function%20Hall!5e0!3m2!1sen!2sin!4v1729180465146!5m2!1sen!2sin",
        },
        {
            id: "reception",
            title: "Reception",
            date: "November 10, 2024",
            time: "7:00 PM - 11:00 PM",
            venue: "Our Home",
            address: "East Edavalli, Andhra Pradesh",
            details: "Celebrate with us over dinner, drinks, and dancing!",
            icon: <MusicIcon className="w-6 h-6 text-primary" />,
            mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.5496277766677!2d81.25120712397364!3d17.004252364868684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1729180667995!5m2!1sen!2sin",
        },
    ]

    return (
        <section id="event-details" className="py-12 px-4 max-w-7xl mx-auto  " style={{ backgroundImage: "url(../../../src/assets/img/bgweding.jpeg')" }}>

            <motion.h2
                className="text-4xl font-bold text-center mb-8 text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Event Details
            </motion.h2>

            <p className="text-lg text-muted-foreground mb-10 text-center">We can't wait to celebrate with you!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="cursor-pointer"
                    >
                        <Card
                            className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"

                        >
                            <CardHeader className="bg-primary/10">
                                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                                    {event.icon}
                                    {event.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.date}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <ClockIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.time}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.venue}</p>
                                </div>

                                <p className="mt-2 text-sm text-muted-foreground">{event.address}</p>
                                <p className="mt-2 italic">{event.details}</p>

                                <div className="mt-4">
                                    <LocationMap mapSrc={event.mapSrc} />
                                </div>


                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >

                {/* <Button size="lg">RSVP Now</Button> */}
            </motion.div>
        </section>
    )
}
