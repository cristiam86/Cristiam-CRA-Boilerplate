import React from 'react';
import Camera from './Camera';

const icons = {
  camera: Camera
}

const MODES = {
  normal: { divBG: '#cdcdcd', iconColor: '#000000' },
  negative: { divBG: '#000000', iconColor: '#ffffff' }
}

const SIZES = {
  small: {width: 20, height: 20},
}

const Icon = ({ icon, mode = 'normal', size = 'small' }) => {
  const { divBG, iconColor } = MODES[mode];
  const { width, height } = SIZES[size]

  const IconComponet = icons[icon];
  return <IconComponet width={width} height={height} divBG={divBG} iconColor={iconColor} />;
}
 
export default Icon;