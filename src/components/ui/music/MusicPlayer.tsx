import { useEffect, useRef } from "react";
import WindowControlButton from "../WindowControlButton";
import useMusic from "../../../stores/music";
import clarksAudio from "../../../assets/audio/VybzKartel_Ft_Popcaan_GazaSlim_Clarks.mp3";
import "../../../styles/disk-explorer.css";
import "./music.css";

interface MusicPlayerProps {
  open: boolean;
  closeDialog: () => void;
}

function MusicPlayer({ open, closeDialog }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
    setAudioRef,
  } = useMusic();

  /** Attach audio ref + volume */
  useEffect(() => {
    if (!audioRef.current) return;

    setAudioRef(audioRef.current);
    audioRef.current.volume = volume / 100;
  }, [setAudioRef]);

  /** Keep volume in sync */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  if (!open) return null;

  async function playPauseTrack() {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Playback failed:", err);
      setIsPlaying(false);
    }
  }

  function seekTo(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;

    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVolume(Number(e.target.value));
  }

  function formatTime(time: number) {
    if (!Number.isFinite(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="fixed left-4 top-16 h-[600px] bg-white border border-black rounded-lg z-50">
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full text-center">giddyPod</div>
      </div>

      <div className="player">
        <audio
          ref={audioRef}
          src={clarksAudio}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onEnded={() => setIsPlaying(false)}
        />

        <div className="details">
          <div className="track-art" />
          <h1>Clarks</h1>
          <h2>Vybz Kartel ft Popcaan & Gaza Slim</h2>
        </div>

        <div className="buttons">
          <div className="prev-track opacity-50 cursor-not-allowed">
            <i className="fa fa-step-backward fa-1x" />
          </div>

          <div className="playpause-track" onClick={playPauseTrack}>
            <i
              className={`fa ${
                isPlaying ? "fa-pause-circle" : "fa-play-circle"
              } fa-4x`}
            />
          </div>

          <div className="next-track opacity-50 cursor-not-allowed">
            <i className="fa fa-step-forward fa-1x" />
          </div>
        </div>

        <div className="slider_container">
          <div className="current-time">{formatTime(currentTime)}</div>

          <input
            type="range"
            min={0}
            max={duration || 0}
            value={Math.min(currentTime, duration)}
            step={0.1}
            className="seek_slider"
            onChange={seekTo}
          />

          <div className="total-duration">{formatTime(duration)}</div>
        </div>

        <div className="slider_container">
          <i className="fa fa-volume-down" />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            className="volume_slider"
            onChange={handleVolumeChange}
          />
          <i className="fa fa-volume-up" />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
