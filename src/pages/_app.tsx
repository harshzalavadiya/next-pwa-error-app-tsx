import AppXYZ from "@components/@core/app";
import App from "next/app";
import React from "react";

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        {/* Importing 👇 in `_app.tsx` Creates error otherwise works fine in other tsx files */}
        <AppXYZ />
      </>
    );
  }
}
