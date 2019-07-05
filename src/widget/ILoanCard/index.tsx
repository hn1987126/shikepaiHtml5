import React from 'react';
import style from './index.module.scss';
interface ILoanCardProps {
  imgUrl: string;
  title: string;
  feature: any[];
  link: string;
  money: string;
}
let ILoanCard = (props: ILoanCardProps) => {
  let handClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <div className={style.ILoanCard}>
      <div className={style.ILoanTitle}>
        <img src={props.imgUrl} className={style.titleIcon} alt="" />
        {props.title}
      </div>
      <div className={style.ILoanContent}>
        <div className={style.loadAndDetail}>
          <div className={style.loan}>
            <p className={style.loan_1}>{props.money}</p>
            <p className={style.loan_2}>额度范围(元)</p>
          </div>
          <div className={style.detail}>
            <p className={style.detail_1}>{props.feature[0]}</p>
            <p className={style.detail_2}>{props.feature[1]}</p>
          </div>
        </div>
        <div className={style.loabBtn} onClick={() => handClick(props.link)}>
          申请贷款
        </div>
      </div>
      <div className={style.borderLine} />
    </div>
  );
};
export default ILoanCard;
