import React, { useEffect } from 'react';
import bannerBg from '../../assets/images/Register/banner.png';
import firstStep from '../../assets/images/Register/firstStep.png';
import secondStep from '../../assets/images/Register/secondStep.png';
import thridStep from '../../assets/images/Register/thridStep.png';
import fourStep from '../../assets/images/Register/fourStep.png';
import tuding from '../../assets/images/Register/tuding.png';
import FloatWindow from '../../widget/FloatWindow';
import IStep from '../../widget/IStep/';
import Footer from '../footer/';
import './index.less';
import XForm from './XForm';
const step = [
  {
    icon: firstStep,
    description: '填个表'
  },
  {
    icon: secondStep,
    description: '接个电话'
  },
  {
    icon: thridStep,
    description: '钱到账啦'
  },
    {
        icon: fourStep,
        description: '钱到账啦'
    }
];
interface RegisterProps {}
let Register = (props: RegisterProps) => {
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
      <FloatWindow customer={true} style={{ right: '1.25rem' }} />
      <Footer />
    </div>
  );
};

export default Register;
