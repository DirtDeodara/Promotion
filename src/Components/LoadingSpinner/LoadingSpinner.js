import React, { useState } from "react";
import { Image } from 'react-native';

const loadingGif = require("../../../assets/hex.gif");
const LoadingSpinner = () => {
  return (
    <Image style={{ height: 100, width: 100 }} source={loadingGif} />
  )
};

export default LoadingSpinner;