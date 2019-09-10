import React from 'react';
import './AdvBox.css';
import icon from './icon.png';


class AdvBox extends React.Component{
    render(){
        return(
            <div className="AdvBox">
            <img src={icon} alt="academy" />
                <a href="https://yabs.yandex.ru/count/M5VIQFz7yVq50Fa1CSrORbq00000EDgD5404I11Wn19mrB-KXmw00GcG0RZ1_P4rc06umVsHDRW1rB-KXmx00GBO0V3Kt1Re0QW2y0A-meRx0v03yCE0Rx031BW4_m7e1BeN-0JWnbk81U36Mv05uCPRm0N0ZRS1u0K5y0K1c0Q2qApp3g06gWEe1ge3oGPn4YfEz6-74D46k-AgIXdNZpdP1W000A2K0000gGUZUgJ_S5OoHx07W82O3D074lW70e083D08W8Y0WS2GW8200VW8vf_AWmU02W712W0000000010s0e2gWiGqEG5ugDw000Zltu2fP450C0BWAC5o0k0r9C1sGkZUgJ_S5OoH-WBuCPRy0i6w0mVu0q2YGu00000003mFv0Em8Gzc0xnfAZnnFxRmn2W3i24FR0E0Q4F00000000y3_P3m0000000F0_u0y1W12ugguBa12MlFBbvl60rNQQ40aH00000000y3_84C2Y4FWG5u0H5OWH0P0H0Q4H00000000y3-e4S24FVeH6Gq000005G00000T000002K00000BG0000284W6G4W7W4e606EaIh45gD3DSLhdm4XU84mAG4sIO4mQe4zEfXfwOneEg5S0J____________0TeJ2WW0400O0200A03W4-36Mm00">
                Новый сервис Яндекс.Шеф
                </a>
                <p>Попробуйте за 1490 ₽</p>
            </div>
        )
    }
}

 export default AdvBox;