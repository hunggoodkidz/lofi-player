import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import mute from "../../images/mute.png";
import volumeOn from "../../images/volumeOn.png";

//let lastPlayedVolume = 0;

interface AudioControlsProps {
    playPause: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    buttonClass: string;
    playPauseImage: string;
    buttonClass2: string;
    LiveStreamAudio: string;
    LiveStreamPlayPause: boolean;
  }

  const AudioControls: React.FC<AudioControlsProps> = ({
    playPause,
    buttonClass,
    playPauseImage,
    buttonClass2,
    LiveStreamAudio,
    LiveStreamPlayPause,
  }) => {

  const [muteCheck, setUnmute] = useState("volumeOn"); //unmute/mute change
  const [muteCheck2, setUnmute2] = useState("audioOnImg");
  const [volumeImg, setVolumeImg] = useState(volumeOn);
  const [volume, setVolume] = useState(0.35);

  // const handleMute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const classNameVol = (e.target as HTMLDivElement).className;
  //   if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
  //     setVolumeImg(mute);
  //     setUnmute("volumeOff");
  //     setUnmute2("audioOffImg");
  //     lastPlayedVolume = volume;
  //     setVolume(0);
  //   } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
  //     setVolumeImg(volumeOn);
  //     setUnmute("volumeOn");
  //     setUnmute2("audioOnImg");
  //     setVolume(lastPlayedVolume);
  //   }
  // };

  const handleMute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const classNameVol = (e.target as HTMLDivElement).className;
    if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
      setVolumeImg(mute);
      setUnmute("volumeOff");
      setUnmute2("audioOffImg");
      setVolume(0);
    } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
      setVolumeImg(volumeOn);
      setUnmute("volumeOn");
      setUnmute2("audioOnImg");
      // Set the volume to the last played volume
      setVolume(0.35); // Assuming lastPlayedVolume is initialized to 0.35 elsewhere
    }
  };

  return (
    <div className="audioControl">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        onClick={playPause}
        className={buttonClass}
      >
        <img src={playPauseImage} className={buttonClass2} alt="" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMute}
        className={muteCheck}
      >
        <img className={muteCheck2} src={volumeImg} alt="" />
      </motion.div>
      <div>
        <input
          className="volumeDial"
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.01}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </div>
      <ReactPlayer
        className="liveStreamPlayer"
        playing={LiveStreamPlayPause}
        volume={volume}
        url={LiveStreamAudio}
      />
    </div>
  );
};

export default AudioControls;
