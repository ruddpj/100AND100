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
      <div
        style={{
          width: `${titleSize}%`,
          transition: "width 2s",
        }}
        className="inline-block align-middle"
      >
        <div className="relative flex w-full flex-col items-center justify-center">
          {game.settings.qr_code_url ? (
            <>
              {/* Round Question */}
              {game.settings.hide_questions === false && (
                <p
                  id="roundQuestionText"
                  className="absolute bottom-full mb-9 w-full max-w-[90%] text-center text-4xl text-foreground opacity-80 font-oswald"
                >
                  {round.question}
                </p>
              )}

              {/* QR Code Section */}
              <div className="relative w-full aspect-square max-w-[20%]">
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
