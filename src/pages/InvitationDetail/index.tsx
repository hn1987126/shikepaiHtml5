import { Icon, message } from 'antd';
import React, { useEffect, useState } from 'react';
import assetsInfo from '../../assets/images/InvitationDetail/assetsInfo.png';
import baseInfo from '../../assets/images/InvitationDetail/baseInfo.png';
import creditBg from '../../assets/images/InvitationDetail/credit.png';
import informationBg from '../../assets/images/InvitationDetail/information.png';
import jiebaiBg from '../../assets/images/InvitationDetail/jiebai.png';
import wldBg from '../../assets/images/InvitationDetail/wld.png';
import workInfo from '../../assets/images/InvitationDetail/workInfo.png';
import { loanDetail } from '../../service/index';
import { isAndroid, isWeiXin, queryString } from '../../util/index';
import IList from '../../widget/IList/';
import ITitle from '../../widget/ITitle/';
import OpenApplication from '../../widget/OpenApplication/';
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
let InvitationDetail = () => {
  let obj: LOADINFO = {};
  let [loadInfo, setLoadInfo] = useState({ ...obj });
  let [showMark, setShowMark] = useState(false);
  let [showDownloadLoading, setShowDownloadLoading] = useState(false);
  let handleClickMark = (flag: boolean) => {
    setShowMark(flag);
  };
  useEffect(() => {
    let no = decodeURIComponent(queryString().no);
    let safetyKey = decodeURIComponent(queryString().safetyKey);
    document.title = '时派客-贷款客户详情';
    if (!!no) {
      loanDetail({ no, safetyKey }).then((res) => {
        if (res.code === 0) {
          setLoadInfo(res.info);
          document.title =
            res.info.realName +
            '/' +
            res.info.theCity +
            '/借' +
            res.info.amoutMoneyTitleSimple +
            '/期限' +
            res.info.loanTerm +
            '个月';
        } else {
          message.info(res.msg);
        }
      });
    } else {
      message.info('无效的进件单号');
    }
  }, []);

  let handleAction = (e: any) => {
    e.preventDefault();
    let no = decodeURIComponent(queryString().no);
    if (isWeiXin()) {
      setShowMark(true);
    } else {
      let timer = setTimeout(() => {
        if (isAndroid()) {
          setShowDownloadLoading(false);
          window.location.href = 'http://www.shikepai.com/upload/brokerApp/skp_V3.1.4.apk';
        } else {
          setShowDownloadLoading(false);
          window.location.href = 'itms-services:///?action=download-manifest&url=https://download.shikepai.com/skp.plist';
          //window.location.href = 'https://itunes.apple.com/cn/app/%E6%97%B6%E5%AE%A2%E6%B4%BE/id1394103492?mt=8';
        }
      }, 2000);
      window.addEventListener('visibilitychange', (event: any) => {
        setShowDownloadLoading(false);
        clearTimeout(timer);
        event.cancelBubble = true;
      });

      window.addEventListener('pagehide', (event: any) => {
        setShowDownloadLoading(false);
        clearTimeout(timer);
        event.cancelBubble = true;
      });
      if (isAndroid()) {
        setShowDownloadLoading(false);
        window.location.href = 'agent://city96003?bigId=' + no;
      } else {
        window.location.href = 'com.shikepai://' + no;
      }
      setShowDownloadLoading(true);
    }
  };
  return (
    <>
      <div className="InvitationDetail">
        <p className="title">时客派，信贷经纪人获客展业神器</p>
        <div className="detail">
          <div className="detail_1">
            <div className="detail_2">
              <div className="information" style={{ backgroundImage: `url(${informationBg})` }}>
                <div className="name">{loadInfo.realName}</div>
                <div className="time">申请时间：{loadInfo.createDatetime}</div>
                <div className="aboutLoan">
                  <div className="coumn">
                    <span className="bold">{loadInfo.amoutMoneyTitle}</span>
                    <span>贷款金额</span>
                  </div>
                  <div className="coumn">
                    <span className="bold">{loadInfo.loanTerm}个月</span>
                    <span>贷款期限</span>
                  </div>
                  <div className="coumn">
                    <span className="bold">{loadInfo.loanPurpose}</span>
                    <span>贷款目的</span>
                  </div>
                </div>
              </div>
              <IList icon={creditBg} title="个人信用" content={loadInfo.creditSituation} />
              <IList
                icon={jiebaiBg}
                title="借呗额度"
                content={loadInfo.jiebei ? loadInfo.jiebei + '元' : ''}
              />
              <IList
                icon={wldBg}
                title="微粒贷额度"
                content={loadInfo.webank ? loadInfo.webank + '元' : ''}
              />
              <br />
              <ITitle
                icon={baseInfo}
                title={
                  loadInfo.censusStatus ||
                  loadInfo.netstate ||
                  loadInfo.innettime ||
                  loadInfo.marriageStatus ||
                  loadInfo.createDatetime
                    ? '基本信息'
                    : ''
                }
              />
              <IList
                title="所在区域"
                content={(loadInfo.theProvice || '') + (loadInfo.theCity || '')}
              />
              <IList title="户籍类型" content={loadInfo.censusStatus} />
              <IList title="在网状态" content={loadInfo.netstate} />
              <IList title="在网时间" content={loadInfo.innettime} />
              <IList title="婚姻情况" content={loadInfo.marriageStatus} />
              <IList title="申请时间" content={loadInfo.createDatetime} />
              <br />
              <ITitle
                icon={workInfo}
                title={
                  loadInfo.jobRole ||
                  loadInfo.monthlyIncome ||
                  loadInfo.payrollForm ||
                  loadInfo.workingYear ||
                  loadInfo.socialSecurity
                    ? '工作信息'
                    : ''
                }
              />
              <IList title="职业角色" content={loadInfo.jobRole} />
              <IList title="月收入" content={loadInfo.monthlyIncome} />
              <IList title="工资发放形式" content={loadInfo.payrollForm} />
              <IList title="当前工龄" content={loadInfo.workingYear} />
              <IList title="是否有社保公积金" content={loadInfo.socialSecurity} />
              <br />
              <ITitle
                icon={assetsInfo}
                title={
                  loadInfo.houseStatus ||
                  loadInfo.carStatus ||
                  loadInfo.propertyType ||
                  loadInfo.carStatus ||
                  loadInfo.buyInsurance ||
                  loadInfo.policyValue
                    ? '资产信息'
                    : ''
                }
              />
              <IList
                title="名下资产"
                content={
                  loadInfo.houseStatus
                    ? loadInfo.houseStatus
                    : loadInfo.carStatus
                    ? ',' + loadInfo.carStatus
                    : ''
                }
              />
              <IList title="房屋资产" content={loadInfo.houseStatus} />
              <IList title="房屋类型" content={loadInfo.propertyType} />
              <IList
                title="有无保单"
                content={
                  loadInfo.buyInsurance === '是'
                    ? '有保单'
                    : loadInfo.buyInsurance === '否'
                    ? '无保单'
                    : ''
                }
              />
              <IList
                title="保单价值"
                content={loadInfo.policyValue ? loadInfo.policyValue + '万元' : ''}
              />
              <span className="call" onClick={handleAction}>
                {showDownloadLoading ? (
                  <>
                    <Icon type="loading" />
                    加载中...
                  </>
                ) : (
                  '立即联系'
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showMark && <OpenApplication clickMark={handleClickMark} />}
    </>
  );
};
export default InvitationDetail;
