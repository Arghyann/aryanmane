"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShiftPlaylist() {
  const [source, setSource] = useState("spotify");
  const [destination, setDestination] = useState("youtube");
  const [playlistUrl, setPlaylistUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Shifting playlist:", { source, destination, playlistUrl });
    toast({
      title: "Playlist Shift Initiated",
      description:
        "Your playlist is being transferred. This may take a few minutes.",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-24">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl rounded-xl overflow-hidden border-none">
          <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70" />
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Shift Your Playlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Label>Source Platform</Label>
                <RadioGroup
                  value={source}
                  onValueChange={setSource}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="spotify" id="spotify" />
                    <Label htmlFor="spotify">Spotify</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="youtube" id="youtube" />
                    <Label htmlFor="youtube">YouTube Music</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label>Destination Platform</Label>
                <RadioGroup
                  value={destination}
                  onValueChange={setDestination}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="spotify" id="spotify-dest" />
                    <Label htmlFor="spotify-dest">Spotify</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="youtube" id="youtube-dest" />
                    <Label htmlFor="youtube-dest">YouTube Music</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="playlist-url">Playlist URL</Label>
                <Input
                  id="playlist-url"
                  placeholder="Enter your playlist URL"
                  value={playlistUrl}
                  onChange={(e) => setPlaylistUrl(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  Shift Playlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
