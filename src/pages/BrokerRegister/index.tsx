import React, { useEffect } from 'react';
import BrokerRegisterBg from '../../assets/images/BrokerRegister/BrokerRegister.png';
import './index.less';
import XForm from './XForm';
let BrokerRegister = () => {
  useEffect(() => {
    document.title = '时客派-信贷经纪人获客展业神器';
  }, []);
  return (
    <div className="BrokerRegister" style={{ backgroundImage: `url(${BrokerRegisterBg})` }}>
      <div className="BrokerContent">
        <XForm />
      </div>
    </div>
  );
};

export default BrokerRegister;
