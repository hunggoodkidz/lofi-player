import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/player/additionalInfo";
import PauseImage from "./components/player/pauseImage";
import Loading from "./components/player/loadingImage";
import RadioStations from "./components/player/radioStations";
import play from "./images/playBtn.png";
import AudioControls from "./components/player/audioControl";
import pauseImg from "./images/pause.png";
//import { motion } from "framer-motion";
import ReactPlayer from "react-player";


function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
  );

  const [stationName, setStationName] = useState("LofiGirl");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  // const handlePausePlaySwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const className = (e.target as HTMLDivElement).className;

  //   if (className === "PlayPause" || className === "playBtn") {
  //     setPlayPause(pauseImg);
  //     setBtnClass("PlayPause2");
  //     setBtnClass2("playBtn2");
  //     start();
  //   } else if (className === "PlayPause2" || className === "playBtn2") {
  //     setPlayPause(play);
  //     setBtnClass("PlayPause");
  //     setBtnClass2("playBtn");
  //     pause();
  //   }
  // };

  const handlePausePlaySwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default behavior of the event
    
    const className = (e.target as HTMLDivElement).className;
  
    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`
  );

  // <------------- Dạ em làm biếng làm API nên em làm API ảo ạ -------------->

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    setStationName("LofiGirl");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = () => {
    setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1");
    setStationName("Ambient Renders");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=GlEps1Ra06U&ab_channel=RelaxingAmbienceASMR"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const RainingVibes = () => {
    setVideo("//www.youtube.com/embed/MZhivjxcF-M&t?autoplay=1&mute=1&start=10");
    setStationName("Raining Vibes");
    setYoutubeChannal(
      "https://www.youtube.com/@lofieveryday364"
    );
    setLivestream(
      ""
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1");
    setStationName("ChillHop Music");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const CodingVibes = () => {
    setVideo("//www.youtube.com/embed/CfPxlb8-ZQ0?autoplay=1&mute=1&start=1");
    setStationName("CodingVibes");
    setYoutubeChannal(
      "https://www.youtube.com/@MusictagJazz"
    );
    setLivestream(
      ""
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  const astralThrob = () => {
    setVideo("//www.youtube.com/embed/RJcIzUNKSQk?autoplay=1&mute=1&start=1");
    setStationName("Astral Throb");
    setYoutubeChannal("https://www.youtube.com/c/AstralThrob");
    setLivestream(
      "https://www.youtube.com/watch?v=UedTcufyrHc&ab_channel=NightrideFM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1");
    setStationName("Chilled Cow");
    setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://www.youtube.com/watch?v=DWcJFNfaw9c&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1");
    setStationName("theJazz Cafe");
    setYoutubeChannal("https://www.youtube.com/c/TheJazzHopCaf%C3%A9");
    setLivestream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const DuBaoThoiTietHomNayMua = () => {
    setVideo("//www.youtube.com/embed/heMYSOZoT3c?autoplay=1&mute=1&start=0");
    setStationName("Grey D");
    setYoutubeChannal(
      "https://www.youtube.com/@St319Entertainment"
    );
    setLivestream(
      ""
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/embed/wePMdTNW3C4?autoplay=1&mute=1&start=1");
    setStationName("Spring Mornings");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"
    );
    setLivestream(
      ""
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = () => {
    setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0");
    setStationName("AnimeVibe");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream(
      "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const TaiViSao = () => {
    setVideo("//www.youtube.com/embed/U0Vr1zotKIo?autoplay=1&mute=1&start=10");
    setStationName("MCK");
    setYoutubeChannal("https://www.youtube.com/channel/UC8EB7c0E_TS4tpTQwMtv6fw");
    setLivestream(
      "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgi"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">Nhạc Chuông</div>
        <div className="subHeading"></div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe} //
            Astral={astralThrob}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Spinnin={DuBaoThoiTietHomNayMua}
            Ivy={RainingVibes} //
            High={CodingVibes}//
            Lofi={LofiGirlVideo}
            Study={TaiViSao}//
            Jazz={theJazzHopCafe}//
            Nice={NiceGuys}//
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
              Dev By Hưng - Ninzy
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
        playPause={handlePausePlaySwitch}
        buttonClass={BtnClass}
        playPauseImage={playPauseImg}
        buttonClass2={BtnClass2}
        LiveStreamAudio={currentLivestream}
        LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div className="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          //loop= {true}
          playing={livestream}
          volume= {3.5}
          url={video}
        />
      </div>
      <Loading />
    </div>
  );
}

export default App;
