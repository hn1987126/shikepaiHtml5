import React from 'react';
import ANDROIDPNG from '../../assets/images/android.png';
import IOSPNG from '../../assets/images/ios.png';
import { isAndroid, isIos } from '../../util/index';
import style from './index.module.scss';
interface OpenApplicationProp {
  clickMark: (arg: any) => void;
}
let OpenApplication = (prop: OpenApplicationProp) => {
  let hideWeixinTip = () => {
    prop.clickMark(false);
  };
  return (
    <div onClick={hideWeixinTip}>
      <div className={style.fxmark} />
      <div className={style.share_img}>
        {isIos() && <img src={IOSPNG} alt='ISO'/>}
        {isAndroid() && <img src={ANDROIDPNG} alt='Android' />}
      </div>
    </div>
  );
};
export default OpenApplication;
