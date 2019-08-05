import { Icon } from 'antd';
import React, { useEffect, useState } from 'react';
import DownloadBg from '../../assets/images/Download/Download.png';
import DownloadBtnBg from '../../assets/images/Download/DownloadBtn.png';
import { isAndroid, isIos, isWeiXin, queryString } from '../../util/index';
import OpenApplication from '../../widget/OpenApplication/';
import './index.less';
let Download = () => {
  let [showMark, setShowMark] = useState(false);
  let [showDownloadLoading, setShowDownloadLoading] = useState(false);
  let handleClickMark = (flag: boolean) => {
    setShowMark(flag);
  };
  let handleAction = () => {
    let webview = decodeURIComponent(queryString().url);
    let timer = setTimeout(() => {
      if (isAndroid()) {
        window.location.href = 'http://www.shikepai.com/upload/brokerApp/skp_V3.1.4.apk';
      }
    }, 2000);
    window.addEventListener('visibilitychange', (event: any) => {
      if (document.visibilityState === 'hidden') {
        setShowDownloadLoading(false);
        clearTimeout(timer);
        event.cancelBubble = true;
      }
    });
    if (isIos()) {
      window.location.href =
        //'https://itunes.apple.com/cn/app/%E6%97%B6%E5%AE%A2%E6%B4%BE/id1394103492?mt=8';
        'itms-services:///?action=download-manifest&url=https://download.shikepai.com/skp.plist';
    } else {
      if (isWeiXin()) {
        setShowMark(true);
      } else {
        if (webview === 'profile') {
          window.location.href = 'agent://city96003';
        } else if (webview === 'openApplication') {
          window.location.href = 'agent://city96003';
        } else {
          console.log('未知跳转页');
        }
        setShowDownloadLoading(true);
      }
    }
  };
  useEffect(() => {
    document.title = '时客派-信贷经理获客展业神器';
  }, []);
  return (
    <>
      <div className="Download" style={{ backgroundImage: `url(${DownloadBg})` }}>
        <div className="DownloadBtnWrap">
          <div
            className="DownloadBtn"
            style={{ backgroundImage: `url(${DownloadBtnBg})` }}
            onClick={handleAction}
          >
            {showDownloadLoading ? (
              <>
                <Icon type="loading" /> 加载中...
              </>
            ) : (
              '立即下载体验'
            )}
          </div>
        </div>
      </div>
      {showMark && <OpenApplication clickMark={handleClickMark} />}
    </>
  );
};
export default Download;
