import { Icon, message } from 'antd';
import React, { useEffect, useState } from 'react';
import customerInfoBg from '../../assets/images/Invitation/customerInfo_bg.png';
import InvitationBg from '../../assets/images/Invitation/Invitation_bg.png';
import touchBg from '../../assets/images/Invitation/touchBg.png';
import { loanDetail } from '../../service/index';
import { queryString } from '../../util/index';
import './index.less';
interface LOADINFO {
  realName?: string;
  amoutMoney?: number;
  amoutMoneyTitle?: string;
  amoutMoneyTitleSimple?: string;
  loanPurpose?: string;
  loanTerm?: number;
  theProvice?: string;
  theCity?: string;
  region?: string;
  age?: string;
  cusQuality?: number;
  jobRole?: string;
  monthlyIncome?: string;
  payrollForm?: string;
  houseStatus?: string;
  carStatus?: string;
  buyInsurance?: string;
  innettime?: string;
  netstate?: string;
  censusStatus?: string;
  clientBigId?: string;
  creditSituation?: string;
  jiebei?: number;
  webank?: number;
  marriageStatus?: string;
  phoneNum?: string;
  policyValue?: number;
  policyTime?: string;
  propertyType?: string;
  socialSecurity?: string;
  workingYear?: string;
  createDate?: string;
  createDatetime?: string;
  bigId?: string;
  registration?: string;
  runningWrter?: string;
  buystate?: number;
}
let Invitation = () => {
  let obj: LOADINFO = {};
  let [loadInfo, setLoadInfo] = useState({ ...obj });
  useEffect(() => {
    let no = decodeURIComponent(queryString().no);
    let safetyKey = decodeURIComponent(queryString().safetyKey);
    document.title = '';
    if (!!no) {
      loanDetail({ no, safetyKey }).then((res) => {
        if (res.code === 0) {
          document.title =
            res.info.realName +
            '/' +
            res.info.theCity +
            '/借' +
            res.info.amoutMoneyTitleSimple +
            '/期限' +
            res.info.loanTerm +
            '个月';
          setLoadInfo(res.info);
        } else {
          message.info(res.msg);
        }
      });
    } else {
      message.info('无效的进件单号');
    }
  }, []);
  let handleClick = () => {
    let no = decodeURIComponent(queryString().no);
    let safetyKey = decodeURIComponent(queryString().safetyKey);
    window.location.href =
      '/InvitationDetail?no=' +
      encodeURIComponent(no) +
      '&safetyKey=' +
      encodeURIComponent(safetyKey);
  };
  return (
    <div className="Invitation" style={{ backgroundImage: `url(${InvitationBg})` }}>
      <div className="customerInfo" style={{ backgroundImage: `url(${customerInfoBg})` }} onClick={handleClick}>
        <div className="title">
          <Icon type="caret-left" />
          点击查看客户详情
          <Icon type="caret-right" />
        </div>
        <div className="infomation">
          <span className="name">{loadInfo.realName}</span>/
          <span className="age">{loadInfo.age}岁</span>/
          <span className="county" style={{ display:`none` }}>{loadInfo.theCity}/</span>
          <span className="loan">{loadInfo.amoutMoneyTitleSimple}</span>/
          <span className="term">{loadInfo.loanTerm}个月</span>
        </div>
      </div>
      <div className="touchBg" onClick={handleClick}>
        <img src={touchBg} alt="" className="animated" />
        <p>点击查看客户详情</p>
      </div>
    </div>
  );
};
export default Invitation;
