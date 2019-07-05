import React from 'react';
import style from './index.module.scss';
interface IListProps {
  icon?: string;
  title?: string;
  border?: boolean;
  content?: string | number | boolean;
}
let IList = (props: IListProps) => {
  return (
    <>
      {!!props.content ? (
        <div className={props.border ? style.IListCard : ''}>
          <div className={style.IList} style={{}}>
            <div className={style.title}>
              {props.icon ? (
                <i className={style.title_i} style={{ backgroundImage: `url(${props.icon})` }} />
              ) : (
                ''
              )}
              <p>{props.title}</p>
            </div>
            <div className={style.content}>{props.content}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default IList;
