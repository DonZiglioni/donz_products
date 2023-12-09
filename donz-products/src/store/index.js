import { proxy } from 'valtio';
import image from '/threejs.png'


const state = proxy({
    intro: true,
    color: '#EFBD4E',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: image,
    fullDecal: image,
});

export default state