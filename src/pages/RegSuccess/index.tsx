import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import RegSuccessImg from '../../assets/images/Register/RegSuccess.png';
import { adList } from '../../service/index';
import { queryString } from '../../util/index';
import ILoanCard from '../../widget/ILoanCard/';
import './index.less';
let RegSuccess = () => {
  let [dataSource, setDataSource] = useState([]);
  let phone = queryString().phone || null;
  let no = queryString().no || null;
  let safetyKey = queryString().safetyKey || null;
  useEffect(() => {
    document.title = '时客派-新户秒批';
    adList().then((res) => {
      if (res.code === 0) {
        setDataSource(res.data);
      } else {
        message.info(res.msg);
      }
    });
  }, []);
  let goLoanRecordList = () => {
    window.location.href = '/LoanRecordList?phone=' + phone + '&safetyKey=' + safetyKey;
  };
  return (
    <div className="RegSuccess">
      <img src={RegSuccessImg} alt="" className="RegSuccessImg" />
      <p className="RegSuccess-title">提交成功</p>
      <p className="RegSuccess-content">请耐心等待客户经理的来电</p>
      <a
        href={'/LoanRecordDetail?phone=' + phone + '&safetyKey=' + safetyKey + '&no=' + no}
        className="newLink"
      >
        查看申请详情
      </a>
      <p className="LoanRecordList" onClick={goLoanRecordList}>
        我的申请记录
      </p>
      {dataSource.length > 0 ? (
        <div className="Recommend">
          <div className="RecommendTitle">
            <span className="RecommendTitlePrefix" />
            热门贷款推荐
          </div>
          {dataSource.map((list: any, index: number) => (
            <ILoanCard {...list} key={index} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default RegSuccess;
