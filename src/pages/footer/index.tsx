import React from 'react';
import IconFont from '../../components/IconFont';
import style from './index.module.scss';
let Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.f1}>
        <p className={style.footer_p}>贷款有风险，借款需谨慎，请依据个人能力合理借款；</p>
        <p className={style.footer_p}>贷款额度以实际审批结果为准</p>
      </div>
      <div className={style.f2} style={{ display:`none` }}>
        <p className={style.footer_p}>版权所有<IconFont type='icon-banquan'></IconFont>深圳前海华众互联网金融服务有限公司</p>
      </div>
    </div>
  );
};

export default Footer;
