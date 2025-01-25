"use client";

import { useState } from "react";
import { Plus, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const MotionCard = motion(Card);

export default function CollaborativePlaylists() {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating new playlist:", newPlaylistName);
    toast({
      title: "Playlist Created",
      description: `Your new collaborative playlist "${newPlaylistName}" has been created.`,
    });
    setNewPlaylistName("");
  };

  const handleJoinPlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Joining playlist with code:", joinCode);
    toast({
      title: "Joined Playlist",
      description: "You have successfully joined the collaborative playlist.",
    });
    setJoinCode("");
  };

  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-24">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
          Collaborative Playlists
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <MotionCard
            className="shadow-xl rounded-xl overflow-hidden border-none"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-6 w-6 text-primary" />
                <span>Create New Playlist</span>
              </CardTitle>
              <CardDescription>
                Start a new collaborative playlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatePlaylist} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="playlist-name">Playlist Name</Label>
                  <Input
                    id="playlist-name"
                    placeholder="Enter playlist name"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary/90 hover:bg-primary/100 transition-colors"
                >
                  Create Playlist
                </Button>
              </form>
            </CardContent>
          </MotionCard>

          <MotionCard
            className="shadow-xl rounded-xl overflow-hidden border-none"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Join Existing Playlist</span>
              </CardTitle>
              <CardDescription>
                Join a collaborative playlist using a code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJoinPlaylist} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="join-code">Join Code</Label>
                  <Input
                    id="join-code"
                    placeholder="Enter join code"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary/90 hover:bg-primary/100 transition-colors"
                >
                  Join Playlist
                </Button>
              </form>
            </CardContent>
          </MotionCard>
        </div>
      </motion.div>
    </div>
  );
}
