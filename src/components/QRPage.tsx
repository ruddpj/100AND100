import { Game } from "@/types/game";
import Image from "next/image";
import { useEffect, useState } from "react";

interface QRPageProps {
  game: Game;
}

export default function QRPage({ game }: QRPageProps) {
  const [titleSize, setTitleSize] = useState(10);
  const round = game.rounds[game.round]

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
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-primary-900 via-primary-500 to-primary-900 py-5">
      {/* QR Code Section */}
      <div
        style={{
          width: `${titleSize}%`,
          transition: "width 2s",
        }}
        className="inline-block align-middle"
      >
        <div className="flex w-full flex-col items-center justify-center">
          {game.settings.qr_code_url ? (
            <>
              {game.settings.hide_questions === false && (
                <p
                  id="roundQuestionText"
                  className="mt-5 py-12 max-w-[80%] text-center text-8xl text-foreground opacity-80 font-oswald"
                >
                  {round.question}
                </p>
              )}

              <div className="relative w-full aspect-square max-w-[500px]">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={`${game.settings.qr_code_url}?v=${Date.now()}`}
                  alt="QR Code"
                  priority
                  unoptimized
                />
              </div>
            </>
          ) : (
            <h1 className="text-4xl font-bold text-foreground">No QR-code Provided</h1>
          )}
        </div>
      </div>
    </div>
  );
}
