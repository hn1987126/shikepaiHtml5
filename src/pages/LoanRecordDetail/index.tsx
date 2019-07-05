import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import assetsInfo from '../../assets/images/InvitationDetail/assetsInfo.png';
import baseInfo from '../../assets/images/InvitationDetail/baseInfo.png';
import workInfo from '../../assets/images/InvitationDetail/workInfo.png';
import creditInfo from '../../assets/images/LoanRecordDetail/creditInfo.png';
import loadInfoBg from '../../assets/images/LoanRecordDetail/loadInfo.png';
import telphoneBg from '../../assets/images/LoanRecordDetail/telphoneBg.png';
import { loanRecordDetail } from '../../service/index';
import { queryString } from '../../util/index';
import IList from '../../widget/IList/';
import ITitle from '../../widget/ITitle/';
import './index.less';
let LoanRecordDetail = () => {
  let [loadInfo, setLoadInfo] = useState({} as any);
  useEffect(() => {
    document.title = '详情';
    let params = {
      phone: decodeURIComponent(queryString().phone),
      safetyKey: decodeURIComponent(queryString().safetyKey),
      no: decodeURIComponent(queryString().no)
    };
    loanRecordDetail(params).then((res) => {
      if (res.code === 0) {
        setLoadInfo(res.info);
      } else {
        message.info(res.msg);
      }
    });
  }, []);

  return (
    <div className="LoanRecordDetail">
      <div className="profileCardWrap">
        <div className="profileCard">
          <div className="userName-checkResult">
            <div className="userName">{loadInfo.realName}</div>
            <div className="checkResult">{loadInfo.buystate === 1 ? '审核通过' : '审核中'}</div>
          </div>
          <div className="loadnCreateDate">申请时间：{loadInfo.createDatetime}</div>
          <div className="loadDetailWrap">
            <div className="loadDetail">
              <div className="loadDetail_1">{loadInfo.amoutMoney}万元</div>
              <div className="loadDetail_2">贷款金额</div>
            </div>
            <div className="loadDetail">
              <div className="loadDetail_1">{loadInfo.loanTerm}个月</div>
              <div className="loadDetail_2">贷款期限</div>
            </div>
            <div className="loadDetail">
              <div className="loadDetail_1">{loadInfo.loanPurpose}</div>
              <div className="loadDetail_2">贷款目的</div>
            </div>
          </div>

          {loadInfo.buystate === 1 ? (
            <div className="brokerWrap">
              <div className="brokerTitle-brokerInfo">
                <div className="brokerTitle">1V1专属信贷经理</div>
                <div className="brokerInfo">
                  {loadInfo.refereeName} &nbsp;&nbsp; {loadInfo.phone2}
                </div>
              </div>
              <a
                href={'tel:' + loadInfo.phone2}
                className="telphoneBg"
                style={{ backgroundImage: `url(${telphoneBg})` }}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <ITitle
        icon={baseInfo}
        border={true}
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
        border={true}
        content={(loadInfo.theProvice || '') + (loadInfo.theCity || '')}
      />
      <IList border={true} title="户籍类型" content={loadInfo.censusStatus} />
      <IList border={true} title="在网状态" content={loadInfo.netstate} />
      <IList border={true} title="在网时间" content={loadInfo.innettime} />
      <IList border={true} title="婚姻情况" content={loadInfo.marriageStatus} />
      <IList border={true} title="申请时间" content={loadInfo.createDatetime} />
      <ITitle
        icon={loadInfoBg}
        border={true}
        title={loadInfo.amoutMoney || loadInfo.loanPurpose || loadInfo.loanTerm ? '借款信息' : ''}
      />
      <IList
        border={true}
        title="借款金额"
        content={loadInfo.amoutMoney ? loadInfo.amoutMoney + '万元' : ''}
      />
      <IList border={true} title="借款用途" content={loadInfo.loanPurpose} />
      <IList
        border={true}
        title="借款期限"
        content={loadInfo.loanTerm ? loadInfo.loanTerm + '个月' : ''}
      />
      <ITitle
        icon={creditInfo}
        border={true}
        title={loadInfo.creditSituation || loadInfo.jiebei || loadInfo.webank ? '信用信息' : ''}
      />
      <IList border={true} title="信用状况" content={loadInfo.creditSituation} />
      <IList
        border={true}
        title="借呗额度"
        content={loadInfo.jiebei ? loadInfo.jiebei + '元' : ''}
      />
      <IList
        border={true}
        title="微粒贷额度"
        content={loadInfo.webank ? loadInfo.webank + '元' : ''}
      />
      <ITitle
        icon={workInfo}
        border={true}
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
      <IList border={true} title="职业角色" content={loadInfo.jobRole} />
      <IList border={true} title="月收入" content={loadInfo.monthlyIncome} />
      <IList border={true} title="工资发放形式" content={loadInfo.payrollForm} />
      <IList border={true} title="当前工龄" content={loadInfo.workingYear} />
      <IList border={true} title="是否有社保公积金" content={loadInfo.socialSecurity} />
      <ITitle
        icon={assetsInfo}
        border={true}
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
        border={true}
        content={
          loadInfo.houseStatus
            ? loadInfo.houseStatus
            : loadInfo.carStatus
            ? ',' + loadInfo.carStatus
            : ''
        }
      />
      <IList border={true} title="房屋类型" content={loadInfo.propertyType} />
      <IList border={true} title="车产情况" content={loadInfo.carStatus} />
      <IList
        border={true}
        title="有无保单"
        content={
          loadInfo.buyInsurance === '是' ? '有保单' : loadInfo.buyInsurance === '否' ? '无保单' : ''
        }
      />
      <IList
        border={true}
        title="保单价值"
        content={loadInfo.policyValue ? loadInfo.policyValue + '万元' : ''}
      />
    </div>
  );
};

export default LoanRecordDetail;
