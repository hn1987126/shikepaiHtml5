import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { loanList } from '../../service/index';
import { queryString } from '../../util/index';
import IRecordCard from '../../widget/IRecordCard/';
import './index.less';
let getScrollTop = () => {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
};
let getScrollHeight = () => {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
};
let getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

let LoanRecordList = () => {
  let [dataSource, setDataSource] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = '贷款申请记录';
  }, []);
  useEffect(() => {
    setLoading(true);
    let params = {
      phone: decodeURIComponent(queryString().phone) || null,
      safetyKey: decodeURIComponent(queryString().safetyKey) || null,
      page: currentPage,
      pagesize: 20
    };
    loanList(params).then((res) => {
      if (res.code === 0) {
        setDataSource(dataSource.concat(res.data));
        setLoading(false);
      } else {
        message.info(res.msg);
      }
    });
  }, [currentPage]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
        if (!loading) {
          setCurrentPage(++currentPage);
        }
      }
    });
  });

  return (
    <div className="LoanRecordList">
      {dataSource.map((list, index) => (
        <IRecordCard {...list} key={index} />
      ))}
    </div>
  );
};

export default LoanRecordList;
