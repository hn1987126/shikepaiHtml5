import React from 'react';
import dotBg from '../../assets/images/widget/dotBg.png';
import style from './index.module.scss';
interface STEP {
  description: string;
  icon: string;
}
interface IStepProps {
  current: number;
  step: STEP[];
}

let IStep = (props: IStepProps) => {
  return (
    <div className={style.IStep}>
      {props.step.map((s: STEP, index: number) => {
        return (
          <React.Fragment key={index}>
            <div className={style.stepChild}>
              <i className={style.stepIcon} style={{ backgroundImage: `url(${s.icon})` }} />
              <p className={style.stepDescription} style={index<=props.current?{color:'#f5222d'}:{} }>{s.description}</p>
            </div>

          </React.Fragment>
        );
      })}
    </div>
  );
};
export default IStep;
