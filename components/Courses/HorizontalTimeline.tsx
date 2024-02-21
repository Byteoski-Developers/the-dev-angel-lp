"use client";
import React, { useEffect, useRef } from "react";
import { RefObject } from "react";
import { ICurriculumData, curriculumData } from "@/constants/curriculumData";
import { CurriculumCard } from "./CurriculumCard";
import { Box, LinearProgress, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const HorizontalTimeline: React.FC = () => {
  const parentRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const childRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  let [selected, setSelected] = React.useState<number>(0);
  let [width, setWidth] = React.useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF5722",
        light: "#FF5722",
        dark: "#FF5722",
      },
    },
  });

  useEffect(() => {
    let value = calculateValue(0);
    setSelected(0);
    setWidth(value);
  }, [parentRef.current?.offsetWidth, childRef.current?.offsetWidth]);

  function setIndex(index: number) {
    let value = calculateValue(index);
    setSelected(index);
    setWidth(value);
    return index;
  }

  function calculateValue(index: number) {
    let extra =
      (parentRef.current?.offsetWidth ?? 0) -
      (childRef.current?.offsetWidth ?? 0);
    extra = extra / 2;
    let value = (2 * index + 1) * ((childRef.current?.offsetWidth ?? 0) / 12);
    value += extra;
    value /= parentRef.current?.offsetWidth ?? 1;
    return value * 100 - 1;
  }

  return (
    <div className="flex flex-col sm:w-full md:w-full lg:w-full justify-center items-center">
      <div
        ref={parentRef}
        className="w-[100vw] flex flex-col justify-center items-center"
      >
        <div
          ref={childRef}
          className="items-center flex justify-center min-w-10"
        >
          {curriculumData.map((item: ICurriculumData) => (
            <button
              key={item.id}
              onClick={() => setIndex(item.id)}
              className=" sm:mx-2 lg:px-2 w-[90px] md:w-[109px] lg:w-[160px] text-center text-sm md:text-sm"
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex sm:w-full my-4">
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                value={width}
                color="primary"
                variant="determinate"
              />
            </Box>
            {/* <Slider
              min={0}
              max={100}
              size="small"
              defaultValue={width}
              aria-label="Small"
              valueLabelDisplay="auto"
              color="primary"
              key={width}
              onChange={(e, value) => {
                setIndex(selected)
              }}
            /> */}
          </ThemeProvider>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          {curriculumData.map((item: ICurriculumData) => (
            <CurriculumCard key={item.id} item={item} selected={selected} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HorizontalTimeline;
