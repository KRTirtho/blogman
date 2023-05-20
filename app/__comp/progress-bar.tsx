"use client";

import NextProgressBar from "next-nprogress-bar";

const Progressbar = () => (
  <NextProgressBar
    shallowRouting
    appDirectory
    options={{ showSpinner: false }}
  />
);

export default Progressbar;
