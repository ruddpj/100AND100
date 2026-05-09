import { Game } from "@/types/game";
import Image from "next/image";
import { useEffect, useState } from "react";

interface QRPageProps {
  game: Game;
}

export default function QRPage({ game }: QRPageProps) {
  const [titleSize, setTitleSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setTitleSize(
        window.innerWidth < 640
          ? 45 // Mobile
          : window.innerWidth < 1024
            ? 80 // Tablet
            : 90 // Desktop and larger
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-primary-900 via-primary-200 to-primary-900 py-5">
      {/* Image Section */}
      <div
        style={{
          width: `${titleSize}%`,
          transition: "width 2s",
        }}
        className="inline-block align-middle"
      >
        <div className="flex w-full justify-center">
          <h1>No QR-code Provided</h1>
        </div>
      </div>
    </div>
  );
}
