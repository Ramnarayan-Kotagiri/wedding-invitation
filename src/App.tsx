import { useState, useEffect } from 'react'
import { EventDetails } from '@/components/demo/EventDetails'
import { CountdownTimer } from '@/components/demo/CountdownTimer'
import { About } from '@/components/demo/About'
import { VideoSection } from './components/demo/VideoSection'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    setTimeout(() => setIsLoaded(true), 2000)
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className=" min-h-screen text-foreground">
      {/* Background Image */}


      {/* Content Layer */}
      <main className="z-50 container mx-auto px-4 space-y-12 mt-10">
        <About />
        <CountdownTimer targetDate={new Date('2024-11-09T21:39:00')} />
        <EventDetails />
        <VideoSection />
      </main>
    </div>

  )
}