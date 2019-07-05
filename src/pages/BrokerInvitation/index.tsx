import React,{useEffect} from 'react';
import BrokerInvitationBg from '../../assets/images/BrokerInvitation/BrokerInvitation.png';
import './index.less';
let BrokerInvitation = () => {
  useEffect(() => {
    document.title = '时客派-新户秒批';
  }, []);
  return (
    <div className='BrokerInvitation'>
      <img src={BrokerInvitationBg} alt=""/>
    </div>
  );
};

export default BrokerInvitation;