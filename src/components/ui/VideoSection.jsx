import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function VideoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setMuted(!muted)}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 10,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.7)",
          },
        }}
      >
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </IconButton>

      <Box
        component="iframe"
        src={`https://player.cloudinary.com/embed/?cloud_name=dahuajpp7&public_id=SubBeamPrintingPress_lyz5lh&autoplay=true&muted=${muted}&loop=true&controls=false`}
        onLoad={() => setVideoLoaded(true)}
        sx={{
          width: "100%",
          height: "100%",
          border: "none",
          aspectRatio: "640 / 360",
          display: videoLoaded ? "block" : "none",
        }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        title="Sun Beam Printing Press Video"
      />
    </>
  );
}