"use client";

import React from "react";
import Box from "@mui/material/Box";
import MUISlider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Tooltip from "./Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Slider({
  label,
  value,
  shortDescription,
  onMoreInfo,
}: {
  label: string;
  value: number;
  shortDescription?: React.ReactNode;
  onMoreInfo?: () => void;
}) {
  const [isHovering, setIsHovering] = React.useState(false);

  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "50%",
          }}
        >
          {label}

          {shortDescription && (
            <Tooltip
              shortDescription={shortDescription}
              onMoreInfo={onMoreInfo}
              triggerSx={{
                visibility: isXs || isHovering ? "visible" : "hidden",
              }}
            />
          )}
        </Typography>
      </Box>

      <MUISlider
        min={0}
        max={100}
        value={value}
        valueLabelDisplay="auto"
        sx={{
          pt: 1,
          pb: 0.5,

          width: "100%",
          "& .MuiSlider-rail": {
            color: "text.secondary",
          },

          pointerEvents: "none",

          //   Disabled slider
          "& .MuiSlider-thumb": {
            display: "none",
          },

          //   Hide thumb for active and hover as well:
          "& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:hover":
            {
              display: "none",
            },
        }}
      />
    </Box>
  );
}
