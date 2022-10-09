import React from "react";
import LiveChannelItem from "./LiveChannelItem/LiveChannelItem";

const LiveChannels = () => {
  return (
    <div className="p-2 md:px-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-twitchColor">Live Channels</span>{" "}
        {" we think you''ll like"}
      </h2>
      {/**Video */}
      <div className="grid ssm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          title="No hit Inmortal Severance"
          user="LilAggy"
          game="Sekiro Shadows Die Twice"
          previewImg="/assets/live/live4.jpg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/058be40b-1f8f-408d-af68-d71b5a1e4bef-profile_image-70x70.png"
        />
        <LiveChannelItem
          title="FERIADO A PURO CS"
          user="lucasmdq_"
          game="Counter-Strike: Global Offensive"
          previewImg="/assets/live/live5.jpg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/db7b4c7f-51f7-4b78-a811-61dce24795ae-profile_image-50x50.png"
        />

        <LiveChannelItem
          title="Reaching Radiant"
          user="Hiko"
          game="Valorant"
          previewImg="/assets/live/live2.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/14d8f9eb-73bc-4a00-9730-aa45b5522c4d-profile_image-150x150.png"
        />
        <LiveChannelItem
          title="ENTRA TIESO!"
          user="ricoy23"
          game="Rust"
          previewImg="/assets/live/live3.jpg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/ricoy23-profile_image-3a5c89918e06fa42-50x50.png"
        />

        <LiveChannelItem
          title="Tripod Man Gains RP"
          user="Natt"
          game="Dota 2 "
          previewImg="/assets/live/live6.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/8dda9f12-7c23-4813-85e7-e5826234dfa1-profile_image-150x150.png"
        />
        <LiveChannelItem
          title="CHARITY STREAM!"
          user="elxokas"
          game="Pokémon Community Game"
          previewImg="/assets/live/live1.jpg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-50x50.png"
        />
        <LiveChannelItem
          title="JESUS LOVES YOU!!!"
          user="coletteleclair"
          game="Just Chatting"
          previewImg="/assets/live/live7.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/86a2d030-8198-4bb3-a97a-ad8437402f36-profile_image-50x50.png"
        />
        <LiveChannelItem
          title="Covert_Muffin teaching EFT..."
          user="iMeztli"
          game="Escape from Tarkov"
          previewImg="/assets/live/live8.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/3cad4f19-d166-4597-907c-dda34de02c68-profile_image-50x50.png"
        />
        <LiveChannelItem
          title="Grinding"
          user="vickitita"
          game="League of Legends"
          previewImg="/assets/live/live9.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/d19809ed-6c94-4154-889a-91257655bc26-profile_image-50x50.png"
        />
        <LiveChannelItem
          title="Let's plays Fortnite"
          user="Mariela"
          game="Fortnite"
          previewImg="/assets/live/live11.jpeg"
          profileImg="https://static-cdn.jtvnw.net/jtv_user_pictures/7f1edf2b-946b-40f2-9953-72858d593d1e-profile_image-50x50.png"
        />
      </div>
    </div>
  );
};

export default LiveChannels;
