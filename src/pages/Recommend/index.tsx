import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { adList } from '../../service/index';
import { queryString } from '../../util/index';
import ILoanCard from '../../widget/ILoanCard/';
import './index.less';
let Recommend = () => {
  let [dataSource, setDataSource] = useState ([]) ;
  useEffect(() => {
    document.title = queryString().title || '热门推荐贷款';
    adList().then((res) => {
      if (res.code === 0) {
        setDataSource(res.data);
      } else {
        message.info(res.msg);
      }
    });
  }, []);
  return (
    <div className="Recommend">
      {dataSource.map((list, index) => (
        <ILoanCard {...list} key={index} />
      ))}
    </div>
  );
};

export default Recommend;
