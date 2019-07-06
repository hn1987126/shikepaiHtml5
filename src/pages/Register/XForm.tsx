import { Button, Checkbox, Form, Icon, Input, message, Modal, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconFont from '../../components/IconFont';
import { queryByPhone, registerBasicData, sendSMS } from '../../service/index';
import { queryString } from '../../util/index';
interface XFormProps extends FormComponentProps {}
const { Option } = Select;
let checkCode = (rule: any, val: string, cb: Function) => {
  if (!val) {
    return cb('请输入您的身份证号');
  }
  let p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
  let code = val.substring(17);
  if (p.test(val)) {
    let sum = 0;
    let _val: any = val.split('');
    for (let i = 0; i < 17; i++) {
      sum += _val[i] * factor[i];
    }
    if (parity[sum % 11] === parseInt(code, 10) || parity[sum % 11] === code.toLocaleUpperCase()) {
      return cb();
    }
  }
  return cb('请输入正确的身份证号');
};
const formTopItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
};
const formMiddleItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
};

let _XForm = (props: XFormProps) => {
  const { getFieldDecorator, validateFields } = props.form;
  let initTime = 60;
  let [time, setTIme] = useState(initTime);
  let [disableFlag, setDisableFlag] = useState(false);
  // 99：1个月只能申请1次贷款哦,本月你已提交过一次贷款申请啦
  // 100：你有一笔待审核的贷款申请\n暂不支持再次提交
  let [showModal, setShowModal] = useState(-1);
  let [loadDetailQuery, setLoadDetailQuery] = useState({} as any);
  let handleModalCancel = () => {
    setShowModal(-1);
  };
  let handleModalLink = () => {
    window.location.href =
      '/LoanRecordDetail?phone=' +
      encodeURIComponent(loadDetailQuery.phone || '') +
      '&safetyKey=' +
      encodeURIComponent(loadDetailQuery.safetyKey || '') +
      '&no=' +
      encodeURIComponent(loadDetailQuery.no || '');
  };
  let handleBlur = () => {
    validateFields(['mobile'], { force: true }, (error, value) => {
      if (error) return false;
      let params = { phone: value.mobile };
      queryByPhone(params).then((res) => {
        if ([99, 100].includes(res.code)) {
          let phone = res.info.phone;
          let safetyKey = res.info.safetyKey;
          let no = res.info.no;
          setLoadDetailQuery({ phone, safetyKey, no });
        }
        setShowModal(res.code);
      });
    });
  };
  let getCaptcha = () => {
    validateFields(['mobile'], { force: true }, (error, value) => {
      if (error) return false;
      let params = { phone: value.mobile };
      sendSMS(params).then((res) => {
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
        let params: any = {
          phone: values.mobile,
          code: values.captcha,
          amoutMoney: values.loan,
          loanTerm: values.time,
          loanPurpose: values.purpose,
          ref: decodeURIComponent(queryString().ref) || null
        };
        if (![98, 99, 100, -1].includes(showModal)) {
          params.realName = values.userName;
          params.idNumber = values.IdCard;
        }
        registerBasicData(params).then((res) => {
          if (res.code === 0) {
            let phone = encodeURIComponent(values.mobile);
            let no = encodeURIComponent(res.no);
            let userType = encodeURIComponent(res.userType);
            let safetyKey = encodeURIComponent(res.safetyKey);
            let info = encodeURIComponent(JSON.stringify(res.info || {}));
            window.location.href =
              '/FillInfo?phone=' +
              phone +
              '&no=' +
              no +
              '&userType=' +
              userType +
              '&safetyKey=' +
              safetyKey +
              '&info=' +
              info;
          } else {
            message.info(res.msg);
          }
        });
      }
    });
  };
  return (
    <>
      <Form layout="horizontal" hideRequiredMark={true}>
        <div className="top">
          <span className="otherMount">
            <Link to="/Recommend?title=贷款超市">
              其他金额
              <IconFont type="icon-arrow" />
            </Link>
          </span>
          <div className="flexWrap">
            <Form.Item label="借多少:" hasFeedback {...formTopItemLayout}>
              {getFieldDecorator('loan', {
                initialValue: '1',
                rules: [{ required: true, message: '请选择金额' }]
              })(
                <Select placeholder="金额" suffixIcon={<Icon type="caret-down" />}>
                  <Option value="1">5万以下</Option>
                  <Option value="2">5-10万</Option>
                  <Option value="3">10-20万</Option>
                  <Option value="4">20-50万</Option>
                  <Option value="5">50-100万</Option>
                  <Option value="6">100万以上</Option>
                </Select>
              )}
            </Form.Item>
          </div>
          <Form.Item label="借多久:" hasFeedback {...formTopItemLayout}>
            {getFieldDecorator('time', {
              rules: [{ required: true, message: '请选择借款期限' }]
            })(
              <Select placeholder="借款期限" suffixIcon={<Icon type="caret-down" />}>
                <Option value="3">3个月</Option>
                <Option value="6">6个月</Option>
                <Option value="12">12个月</Option>
                <Option value="18">18个月</Option>
                <Option value="24">24个月</Option>
                <Option value="36">36个月</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="怎么用:" hasFeedback {...formTopItemLayout}>
            {getFieldDecorator('purpose', {
              rules: [{ required: true, message: '请选择借款目的' }]
            })(
              <Select placeholder="借款用途" suffixIcon={<Icon type="caret-down" />}>
                <Option value="医疗服务贷款">医疗服务贷款</Option>
                <Option value="装修贷款">装修贷款</Option>
                <Option value="消费贷款">消费贷款</Option>
                <Option value="扩大经营贷款">扩大经营贷款</Option>
                <Option value="购房贷款">购房贷款</Option>
                <Option value="购车贷款">购车贷款</Option>
                <Option value="教育培训贷款">教育培训贷款</Option>
                <Option value="旅行贷款">旅行贷款</Option>
                <Option value="三农贷款">三农贷款</Option>
                <Option value="其他贷款">其他贷款</Option>
              </Select>
            )}
          </Form.Item>
        </div>
        <div className="middle">
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('mobile', {
              rules: [
                { required: true, message: '请输入您的手机号' },
                { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
              ]
            })(
              <Input
                className="Ipt"
                autoComplete="off"
                prefix={<IconFont type="icon-shouji" className="IconFont" />}
                placeholder="手机号"
                onBlur={handleBlur}
              />
            )}
          </Form.Item>

          {![-1, 98, 99, 100].includes(showModal) && (
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入您的真实姓名' }]
              })(
                <Input
                  className="Ipt"
                  autoComplete="off"
                  prefix={<IconFont type="icon-user" className="IconFont" />}
                  placeholder="真实姓名"
                />
              )}
            </Form.Item>
          )}
          {![-1, 98, 99, 100].includes(showModal) && (
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('IdCard', {
                rules: [{ validator: checkCode }]
              })(
                <Input
                  className="Ipt"
                  autoComplete="off"
                  prefix={<IconFont type="icon-Id" className="IconFont" />}
                  placeholder="身份证号"
                />
              )}
            </Form.Item>
          )}

          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('captcha', {
              rules: [{ required: true, message: '请输入验证码' }]
            })(
              <Input
                className="Ipt"
                autoComplete="off"
                prefix={<IconFont type="icon-yanzhengma" className="IconFont" />}
                suffix={
                  <Button
                    type="primary"
                    className={disableFlag ? 'disableFlag btnCaptcha' : 'btnCaptcha'}
                    onClick={getCaptcha}
                    disabled={disableFlag}
                  >
                    {time === 60 ? '获取验证码' : time + 's后获取'}
                  </Button>
                }
                placeholder="验证码"
              />
            )}
          </Form.Item>
          <Form.Item {...formMiddleItemLayout}>
            {getFieldDecorator('agreement', {
              rules: [{ required: true, message: '请勾选客户服务协议' }],
              initialValue: true,
              valuePropName: 'checked'
            })(
              <Checkbox>
                我已仔细阅读并同意{' '}
                <a href="/LoanGVRP" target="__blank">
                  《客户服务协议》
                </a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item {...formMiddleItemLayout}>
            <Button type="primary" className="btnSubmit" htmlType="submit" onClick={handleSubmit}>
              马上拿钱
            </Button>
          </Form.Item>
        </div>
      </Form>
      {showModal === 99 && (
        <Modal
          title="提示"
          visible={showModal === 99}
          footer={null}
          width="23rem"
          closable={false}
          centered={true}
          keyboard={false}
          maskClosable={false}
          wrapClassName="ModalWrapper"
        >
          <div className="ModalContent">
            <p>1个月只能申请1次贷款哦， </p>
            <p>本月你已提交过一次贷款申请啦</p>
          </div>
          <div className="ModalBtnGroup">
            <div className="m1" onClick={handleModalCancel}>
              以后再说
            </div>
            <div className="m2" onClick={handleModalLink}>
              查看申请详情
            </div>
          </div>
        </Modal>
      )}
      {showModal === 100 && (
        <Modal
          title="提示"
          visible={showModal === 100}
          footer={null}
          width="23rem"
          closable={false}
          centered={true}
          keyboard={false}
          maskClosable={false}
          wrapClassName="ModalWrapper"
        >
          <div className="ModalContent">
            <p>你有一笔待审核的贷款申请，</p>
            <p>暂不支持再次提交</p>
          </div>
          <div className="ModalBtnGroup">
            <div className="m1" onClick={handleModalCancel}>
              稍后申请
            </div>
            <div className="m2" onClick={handleModalLink}>
              查看申请详情
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

const XForm = Form.create<XFormProps>({
  name: 'register_'
})(_XForm);

export default XForm;
