import { proxy } from 'valtio';

const state = proxy({
    intro: true, // flag for currently on homepage or not
    color: '#EFBD48',
    isLogoTexture: true, // are we displaying logo on shirt
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;