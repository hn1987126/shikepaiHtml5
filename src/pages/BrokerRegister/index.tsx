import React, { useEffect } from 'react';
import BrokerRegisterBg from '../../assets/images/BrokerRegister/BrokerRegister.png';
import './index.less';
import XForm from './XForm';
let BrokerRegister = () => {
  useEffect(() => {
    document.title = '时客派-注册领20金币福利';
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
