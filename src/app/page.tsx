"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shuffle,
  Users,
  Music,
  UserCheckIcon,
  PlaySquare,
  UserCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MotionCard = motion(Card);

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-24 space-y-16">
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="flex h-14 justify-center items-center mb-4">
          <Music className="h-12 w-12 text-primary mr-4" />
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            Playlist Manager
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Seamlessly transfer and collaborate on playlists across music
          platforms
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Shuffle,
            title: "Shift Playlists",
            description: "Move your playlists from Spotify to YouTube Music",
            details:
              "Effortlessly transfer your favorite playlists between platforms with intelligent sync technology.",
            link: "/shift",
            linkText: "Get Started",
          },
          {
            icon: Users,
            title: "Collaborate on Playlists",
            description: "Create and join collaborative playlists",
            details:
              "Curate the perfect soundtrack together, sharing musical experiences in real-time.",
            link: "/collaborate",
            linkText: "Start Collaborating",
          },
        ].map((feature, index) => (
          <MotionCard
            key={feature.title}
            className="shadow-xl rounded-xl overflow-hidden border-none"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{
              opacity: 0,
              x: index === 0 ? -20 : 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.2,
              bounceDamping: "ease",
            }}
          >
            <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3">
                <feature.icon className="h-7 w-7 text-primary" />
                <span className="text-xl font-semibold">{feature.title}</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {feature.details}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-primary/5 hover:bg-primary/100 transition-colors"
              >
                <Link
                  href={feature.link}
                  className="flex items-center justify-center"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
