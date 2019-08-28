import React, { useEffect } from 'react';
import BrokerAwardBg_1 from '../../assets/images/BrokerAward/BrokerAward_1.png';
import BrokerAwardBg_2 from '../../assets/images/BrokerAward/BrokerAward_2.png';
import BrokerAwardBtnBg from '../../assets/images/BrokerAward/BrokerAwardBtn.png';
import { queryString } from '../../util/index';
import './index.less';
let BrokerAward = () => {
  let fornew = queryString().fornew;
  let fornewFlag = fornew * 1 === 1;
  let userInfo = decodeURIComponent(queryString().userInfo);
  useEffect(() => {
    document.title = '时客派-信贷经纪人获客展业神器';
  }, []);
  let handleAction = () => {
    if (fornewFlag) {
      window.location.href = '/Download?url=profile';
      console.log('跳转用户详情页,查看金币');
    } else {
      window.location.href = '/Download?url=openApplication';
      console.log('立即跳转抢单');
    }
  };
  return (
    <div
      className="BrokerAward"
      style={{ backgroundImage: `url(${fornewFlag ? BrokerAwardBg_1 : BrokerAwardBg_2})` }}
    >
      <div className="BrokerAwardContent">
        <div className="BrokerAwardTextWrap">
          <p className="BrokerAwardText1">
            {fornewFlag ? '20金币已放至账户' + userInfo : '欢迎使用时客派展业'}
          </p>
          <p className="BrokerAwardText2">
            {fornewFlag ? '登录时客派App即可查看' : '信贷经理首选的一站式获客展业平台'}
          </p>
        </div>
        <div className="BrokerAwardBtnWrap">
          <div
            className="BrokerAwardBtn"
            style={{ backgroundImage: `url(${BrokerAwardBtnBg})` }}
            onClick={handleAction}
          >
            {fornewFlag ? '立即查看' : '立即领福利'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerAward;
