import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react"; // Play icon for thumbnail
import invitationTelugu from '../../assets/vid/invitationTelugu.mp4'; // Import video files
import invitationEnglish from '../../assets/vid/invitationEnglish.mp4';

export function VideoSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // To switch between the two videos

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">A Special Invitation</h2>
            <div className="flex justify-center space-x-4">
                {/* Telugu Invitation */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <div
                            className="relative cursor-pointer group"
                            onClick={() => { setIsOpen(true); setSelectedVideo(invitationTelugu); }} // Set Telugu video
                        >
                            <img
                                src="src/assets/img/invitationTelugu.jpg"  // Add a custom thumbnail or keep a placeholder
                                alt="Telugu Invitation Thumbnail"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayIcon className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white p-0 rounded-lg shadow-lg">
                        <div className="aspect-w-16 aspect-h-9">
                            {selectedVideo && (
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-full rounded-lg"
                                />
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* English Invitation */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <div
                            className="relative cursor-pointer group"
                            onClick={() => { setIsOpen(true); setSelectedVideo(invitationEnglish); }} // Set English video
                        >
                            <img
                                src="src/assets/img/invitationEnglish.jpg"  // Add a custom thumbnail or placeholder
                                alt="English Invitation Thumbnail"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayIcon className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </DialogTrigger>

                    <DialogContent className="bg-white p-0 rounded-lg shadow-lg">
                        <div className="aspect-w-16 aspect-h-9">
                            {selectedVideo && (
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-full rounded-lg"
                                />
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
