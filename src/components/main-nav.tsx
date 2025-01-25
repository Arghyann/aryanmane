import Link from "next/link";
import { Music } from "lucide-react";

export function MainNav() {
  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-24 flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2 group">
        <Music className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        <span className="font-bold text-primary/80 group-hover:text-primary transition-colors">
          Playlist Manager
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          href="/shift"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Shift Playlists
        </Link>
        <Link
          href="/collaborate"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Collaborate
        </Link>
      </div>
    </div>
  );
}
