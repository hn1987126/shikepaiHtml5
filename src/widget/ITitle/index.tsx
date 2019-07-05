import React from 'react';
import style from './index.module.scss';
interface ITitleProps {
  icon?: string;
  title: string;
  border?: boolean;
}
let ITitle = (props: ITitleProps) => {
  return (
    <>
      {props.title ? (
        <div className={props.border ? style.baseContent : ''}>
          <div className={style.iTitle}>
            {props.icon ? (
              <i className={style.titleIcon} style={{ backgroundImage: `url(${props.icon})` }} />
            ) : (
              ''
            )}
            {props.title}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ITitle;
