import React, { useEffect } from 'react';
import bannerBg from '../../assets/images/Register/banner.png';
import firstStep from '../../assets/images/Register/firstStep.png';
import secondStep from '../../assets/images/Register/secondStep.png';
import thridStep from '../../assets/images/Register/thridStep.png';
import fourStep from '../../assets/images/Register/fourStep.png';
import tuding from '../../assets/images/Register/tuding.png';
import IStep from '../../widget/IStep/';
import './index.less';
import XForm from './XForm';
const step = [
    {
        icon: firstStep,
        description: '银行资金'
    },
    {
        icon: secondStep,
        description: '额度高'
    },
    {
        icon: thridStep,
        description: '利率低'
    },
    {
        icon: fourStep,
        description: '放款快'
    }
];
interface RegisterProps {}
let FillCredit = (props: RegisterProps) => {
  useEffect(() => {
    document.title = '时客派：银行资金、额度高、利率低、放款快';
  }, []);
  return (
    <div className="Register">
      <img src={bannerBg} alt="" className="carousel" />
      <IStep current={-1} step={step} />
      <img className="tuding" src={tuding} alt="" />
      <div className="registerForm">
        <XForm />
      </div>
    </div>
  );
};

export default FillCredit;
