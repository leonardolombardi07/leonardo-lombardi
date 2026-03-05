"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled, SxProps } from "@mui/material/styles";
import React from "react";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import MUITooltip, {
  tooltipClasses,
  TooltipProps,
} from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDebounce } from "@uidotdev/usehooks";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Tooltip({
  shortDescription,
  onMoreInfo,
  triggerSx,
}: {
  shortDescription: React.ReactNode;
  onMoreInfo?: () => void;
  triggerSx?: SxProps;
}) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const [isOpenByClicking, setIsOpenByClicking] = React.useState(false);

  const [isOpenByHovering, setIsOpenByHovering] = React.useState(false);

  const debouncedIsOpenByHovering = useDebounce(isOpenByHovering, 500);

  return (
    <ClickAwayListener onClickAway={() => setIsOpenByClicking(false)}>
      <Box
        sx={{ display: "inline" }}
        onMouseOver={() => setIsOpenByHovering(true)}
        onMouseLeave={() => setIsOpenByHovering(false)}
      >
        <NoBlackBackgroundStyledTooltip
          open={!isXs && (isOpenByClicking || debouncedIsOpenByHovering)}
          enterTouchDelay={0}
          leaveTouchDelay={0}
          placement={"auto"}
          title={
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                p: 2,
              }}
            >
              <Typography>{shortDescription}</Typography>

              {onMoreInfo && (
                <Button
                  size="small"
                  variant="text"
                  color="info"
                  endIcon={<ArrowRightIcon />}
                  onClick={() => {
                    if (onMoreInfo) {
                      onMoreInfo();
                    }

                    setIsOpenByClicking(false);
                    setIsOpenByHovering(false);
                  }}
                >
                  More Information
                </Button>
              )}
            </Paper>
          }
        >
          <IconButton
            size="small"
            onClick={() => {
              if (onMoreInfo) {
                onMoreInfo();
              }
            }}
          >
            <HelpIcon
              sx={{
                fontSize: 15,
                position: "absolute",
                top: -9,
                right: -7,
                ...triggerSx,
              }}
            />
          </IconButton>
        </NoBlackBackgroundStyledTooltip>
      </Box>
    </ClickAwayListener>
  );
}

const NoBlackBackgroundStyledTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <MUITooltip {...props} classes={{ popper: className }} />
  ),
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    maxWidth: "none",
  },
}));
