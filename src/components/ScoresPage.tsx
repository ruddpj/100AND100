import { useTranslation } from "react-i18next";
import "@/i18n/i18n";
import { Game } from "@/types/game";
import TitleLogo from "./TitleLogo";
import Image from "next/image";
import { useEffect, useState } from "react";

const TEXT_SHADOW = "3px 3px 0 black";

interface ScorePageProps {
  game: Game;
}

export default function ScoresPage({ game }: ScorePageProps) {
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

  const { t } = useTranslation();
  const startingTeam = game.final_round_starting_team;
  const firstTeamIndex = startingTeam;
  const secondTeamIndex = 1 - startingTeam;
  const firstTeam = game.teams[firstTeamIndex];
  const secondTeam = game.teams[secondTeamIndex];
  const firstTeamTotal = firstTeam?.points ?? 0;
  const secondTeamTotal = secondTeam?.points ?? 0;

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-primary-900 via-primary-200 to-primary-900 py-5">
      {/* Logo Section */}
      <div
        style={{
          width: `${titleSize}%`,
          transition: "width 2s",
        }}
        className="inline-block align-middle"
      >
        <div className="flex w-full justify-center">
          {game.settings.logo_url ? (
            <div className="relative mb-6 w-full max-h-[40vh] aspect-[16/9]" >
              <Image
                fill
                style={{ objectFit: "contain" }}
                src={`${game.settings.logo_url}?v=${Date.now()}`}
                alt="Game logo"
                priority
                unoptimized
              />
            </div>
          ) : (
            <TitleLogo insert={game.title_text} />
          )}
        </div>
      </div>
      <div className="w-full max-w-[1060px] rounded-2xl border-8 border-white bg-black p-6 my-6 text-white items-center font-oswald">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-4 border-white bg-gradient-to-tr from-primary-900 to-primary-500 p-6 text-center">
            <p className="text-2xl uppercase">{firstTeam?.name || `${t("team")} ${firstTeamIndex + 1}`}</p>
            <p id="endingFirstTeamTotalText" className="mt-2 text-7xl font-bold" style={{ textShadow: TEXT_SHADOW }}>
              {t("number", { count: firstTeamTotal })}
            </p>
          </div>
          <div className="rounded-xl border-4 border-white bg-gradient-to-tr from-primary-900 to-primary-500 p-6 text-center">
            <p className="text-2xl uppercase">{secondTeam?.name || `${t("team")} ${secondTeamIndex + 1}`}</p>
            <p id="endingSecondTeamTotalText" className="mt-2 text-7xl font-bold" style={{ textShadow: TEXT_SHADOW }}>
              {t("number", { count: secondTeamTotal })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
