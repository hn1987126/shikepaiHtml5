import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
const appRoot = document.getElementById('root');
class Modal extends React.Component {
  public el: any;
  public constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
    this.el.id = 'ModalWrap';
    this.state = {
      hideModal: true
    };
  }

  public componentDidMount() {
    appRoot!.appendChild(this.el);
    this.el.addEventListener('click', () => {
      this.el.style.cssText = 'display:none';
    });
  }

  public componentWillUnmount() {
    appRoot!.removeChild(this.el);
  }

  public render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
