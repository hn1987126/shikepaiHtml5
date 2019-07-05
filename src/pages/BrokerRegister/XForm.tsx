import { Button, Form, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { useState } from 'react';
import { brokerRegister, brokerSMS } from '../../service/index';
import { queryString } from '../../util/index';
interface XFormProps extends FormComponentProps {}
const formItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
};
let _XForm = (props: XFormProps) => {
  const { getFieldDecorator, validateFields } = props.form;
  let initTime = 60;
  let [time, setTIme] = useState(initTime);
  let [disableFlag, setDisableFlag] = useState(false);
  let getCaptcha = () => {
    validateFields(['mobile'], { force: true }, (error, value) => {
      if (error) return false;
      let params = { phone: value.mobile };
      brokerSMS(params).then((res) => {
        if (res.code === 0) {
          setDisableFlag(true);
          setTIme(time--);
          let timer = setInterval(() => {
            setTIme(time--);
            if (time < 0) {
              setDisableFlag(false);
              clearInterval(timer);
              setTIme(initTime);
            }
          }, 1000);
        } else {
          message.info(res.msg);
        }
      });
    });
  };
  let handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let params = {
          phone: values.mobile,
          code: values.captcha,
          companyName: values.companyName,
          ref: decodeURIComponent(queryString().ref) || ''
        };
        brokerRegister(params).then((res) => {
          if (res.code === 0) {
            window.location.href = '/BrokerAward?fornew=1&userInfo=' + encodeURIComponent(values.mobile);
          } else if (res.code === 100) {
            window.location.href = '/BrokerAward?fornew=2&userInfo=' + encodeURIComponent(values.mobile);
          } else {
            message.info(res.msg);
          }
        });
      }
    });
  };
  return (
    <Form layout="horizontal" hideRequiredMark={true} {...formItemLayout}>
      <Form.Item hasFeedback>
        {getFieldDecorator('mobile', {
          rules: [
            { required: true, message: '请输入您的手机号' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
          ]
        })(<Input className="Ipt" placeholder="手机号" autoComplete="off" />)}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator('captcha', {
          rules: [{ required: true, message: '请输入验证码' }]
        })(
          <Input
            className="Ipt"
            autoComplete="off"
            suffix={
              <Button
              className={disableFlag ? 'disableFlag btnCaptcha' : 'btnCaptcha'}
              onClick={getCaptcha}
              disabled={disableFlag}
              >
                {time === 60 ? '获取验证码' : time +'s后获取'}
              </Button>
            }
            placeholder="短信验证码"
          />
        )}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator('companyName', {
          rules: [{ required: true, message: '请输入您的公司名称' }]
        })(<Input className="Ipt" placeholder="公司名称" autoComplete="off" />)}
      </Form.Item>
      <Button type="primary" className="btnSubmit" htmlType="submit" onClick={handleSubmit}>
        立即领金币
      </Button>
      <p className="register-text">
        注册即代表同意
        <a href="/BrokerGVRP" target="__blank">
          《用户协议》
        </a>
      </p>
    </Form>
  );
};

const XForm = Form.create<XFormProps>({
  name: 'register_'
})(_XForm);

export default XForm;
