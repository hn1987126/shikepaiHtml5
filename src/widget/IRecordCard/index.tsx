import { Icon } from 'antd';
import React from 'react';
import { queryString } from '../../util/index';
import style from './index.module.scss';
interface IRecordCardProps {
  amoutMoney: number;
  amoutMoneyTitle: string;
  loanPurpose: string;
  loanTerm: number;
  createDate: string;
  bigId: string;
  buystateName: string;
  phone2: string;
}
let IRecordCard = (props: IRecordCardProps) => {
  let loanDetail = (bigId: string, phone2: string) => {
    let phone = queryString().phone || null;
    let safetyKey = phone2 || null;
    let no = bigId;
    window.location.href =
      '/LoanRecordDetail?safetyKey=' + safetyKey + '&no=' + no;
  };
  return (
    <div className={style.IRecordCard} onClick={() => loanDetail(props.bigId, props.phone2)}>
      <div className={style.createDateWrap}>
        <span className={style.createDate}>{props.createDate}</span>
        <span className={style.createDateText}>申请日期</span>
      </div>
      <div className={style.loanContent}>
        <span className={style.amoutMoney}>{props.amoutMoneyTitle}</span> /
        <span className={style.loanTerm}>{props.loanTerm}</span>个月 /
        <span className={style.loanPurpose}>{props.loanPurpose}</span>
      </div>
      <div className={style.loanResult}>
        {props.buystateName === '审核通过' && <span className={style.success}>审核通过</span>}
        {props.buystateName === '审核中' && <span className={style.checking}>审核中</span>}
        {props.buystateName === '审核失败' && <span className={style.failture}>审核失败</span>}
      </div>
      <p className={style.IconRight}>
        <Icon type="right" />
      </p>
    </div>
  );
};
export default IRecordCard;
