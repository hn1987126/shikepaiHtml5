import React, { useState } from 'react';
import applyRecordImg from '../../assets/images/widget/applyRecordImg.png';
import CustomerServiceImg from '../../assets/images/widget/CustomerService.png';
import qrCode from '../../assets/images/widget/qrCode.png';
import Modal from '../../components/Modal/index';
import { isWeiXin, queryString } from '../../util/index';
import style from './index.module.scss';
interface FloatWindowProps {
  customer?: boolean;
  record?: boolean;
  style?: any;
}
let FloatWindow = (props: FloatWindowProps) => {
  let [dialog, showDialog] = useState(false);
  let handleClick = () => {
    let ModalWrap = document.getElementById('ModalWrap');
    if (ModalWrap) {
      ModalWrap!.style.cssText = 'display:block';
    }
    showDialog(true);
  };
  let downloadIamge = (selector: any) => {
    let image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    let img = document.querySelector(selector);
    let url = img.src;
    let event = new MouseEvent('click');
    let a = document.createElement('a');
    a.download = img.title || '下载图片';
    a.href = url;
    a.dispatchEvent(event);
    showDialog(false);
  };
  let goLoanRecordDetail = () => {
    let phone = queryString().phone || null;
    let safetyKey = queryString().safetyKey || null;
    window.location.href = '/LoanRecordList?phone=' + phone + '&safetyKey=' + safetyKey;
  };
  return (
    <div className={style.floatWindow} style={props.style}>
      {props.customer && (
        <img
          src={CustomerServiceImg}
          className={style.CustomerService}
          alt=""
          onClick={handleClick}
        />
      )}
      {props.record && (
        <img
          src={applyRecordImg}
          className={style.applyRecord}
          alt=""
          onClick={goLoanRecordDetail}
        />
      )}
      {dialog && props.customer && (
        <div>
          <Modal>
            <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
              <div className={style.qrCode}>
                <p className={style.text}>
                  {isWeiXin() ? '长按识别图中二维码' : '保存二维码添加客服微信'}
                </p>
                <img className={style.img} id="qrcodeImg" src={qrCode} title="客服微信" alt="" />
              </div>
              {!isWeiXin() && (
                <p className={style.saveImg} onClick={() => downloadIamge('#qrcodeImg')}>
                  保存图片至本地
                </p>
              )}
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default FloatWindow;
