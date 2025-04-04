"use client";
import { useTheme } from "@/components/Theme-provider";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientPage() {
  const settings = {
    dots: true,
  };

  const theme = useTheme()
  const result = clientSideFunction()
  return (
    <div className="image-slider-container">
      <h1 style={{
        color: theme.colors.secondary,
        fontSize: "24px",
        fontWeight: "700"
      }}>Client router page</h1>
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
      <p> {result} </p>
    </div>
  );
}
