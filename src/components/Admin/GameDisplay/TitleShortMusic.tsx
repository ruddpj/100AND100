import { useTranslation } from "react-i18next";
import { WSAction, WSEvent } from "@/types/game";

interface TitleShortMusicProps {
  send: (data: WSEvent) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export default function TitleShortMusic({ send, isPlaying, setIsPlaying }: TitleShortMusicProps) {
  const { t } = useTranslation();
  const playButtonClass = isPlaying
    ? "rounded border-2 border-success-900 bg-success-500 px-4 py-2 font-bold text-white"
    : "rounded border-2 bg-secondary-300 px-4 py-2 text-foreground";
  const pauseButtonClass = isPlaying
    ? "rounded border-2 bg-secondary-300 px-4 py-2 text-foreground"
    : "rounded border-2 border-failure-900 bg-failure-300 px-4 py-2 font-bold text-foreground";

  return (
    <div className="flex flex-row items-center space-x-5 p-5">
      <h3 className="text-2xl text-foreground">{t("Title Short Music")}</h3>
      <button
        id="playTitleShortMusicButton"
        aria-pressed={isPlaying}
        className={playButtonClass}
        onClick={() => {
          setIsPlaying(true);
          send({ action: WSAction.PLAY_TITLE_SHORT_MUSIC });
        }}
      >
        {t("Play")}
      </button>
      <button
        id="pauseTitleShortMusicButton"
        aria-pressed={!isPlaying}
        className={pauseButtonClass}
        onClick={() => {
          setIsPlaying(false);
          send({ action: WSAction.PAUSE_TITLE_SHORT_MUSIC });
        }}
      >
        {t("Pause")}
      </button>
    </div>
  );
}
