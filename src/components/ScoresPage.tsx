import { useTranslation } from "react-i18next";
import "@/i18n/i18n";
import { Game } from "@/types/game";
import TitleLogo from "./TitleLogo";

const TEXT_SHADOW = "3px 3px 0 black";

interface ScorePageProps {
  game: Game;
}

export default function ScoresPage({ game }: ScorePageProps) {
  const { t } = useTranslation();
  const startingTeam = game.final_round_starting_team ?? 0;
  const firstTeamIndex = startingTeam;
  const secondTeamIndex = 1 - startingTeam;
  const firstTeam = game.teams[firstTeamIndex];
  const secondTeam = game.teams[secondTeamIndex];
  const firstTeamTotal = firstTeam?.points ?? 0;
  const secondTeamTotal = secondTeam?.points ?? 0;

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-primary-900 via-primary-200 to-primary-900 py-5">
      <TitleLogo insert={game.title_text} />
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
