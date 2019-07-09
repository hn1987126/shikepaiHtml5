import { Button, Form, Icon, message, Radio, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { useState } from 'react';
import IconFont from '../../components/IconFont';
import { registerWorkData } from '../../service/index';
import { queryString } from '../../util/index';
interface XFormProps extends FormComponentProps {}
const { Option } = Select;
const formTopItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const formMiddleItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
};

let _XForm = (props: XFormProps) => {
  const { getFieldDecorator } = props.form;
  let phone = decodeURIComponent(queryString().phone || null);
  let no = decodeURIComponent(queryString().no || null);
  let userType = decodeURIComponent(queryString().userType || '1');
  let safetyKey = decodeURIComponent(queryString().safetyKey || null);
  let info: any = decodeURIComponent(queryString().info || '{}');
  let {
    censusStatus,
    marriageStatus,
    jobRole,
    monthlyIncome,
    payrollForm,
    workingYear,
    jobIdentity,
    runningWrter,
    manageTime,
    registration,
    hasSb
    hasGjj
  } = JSON.parse(info);

  let [wokerType, setWorkerType] = useState(jobRole);
  let handleWorkerType = (value: string) => {
    setWorkerType(value);
  };
  // 1、无社保，无本地公积金 2、有社保，有本地公积金 、无社保，有本地公积金 4、有社保，无本地公积金
  //if (!socialSecurity) {
  //  socialSecurity = '有社保，无本地公积金';
  //}
  let [shebaoValue, setShebaoValue] = useState(
    hasSb === '有' ? 'activeBtn' : 'defaultBtn'
  );
  let clickShebao = () => {
    if (shebaoValue === 'defaultBtn') {
      setShebaoValue('activeBtn');
    } else {
      setShebaoValue('defaultBtn');
    }
  };
  let [gongJiJinValue, setGongJiJinValue] = useState(
    hasGjj === '有' ? 'activeBtn' : 'defaultBtn'
  );
  let clickGongJiJin = () => {
    if (gongJiJinValue === 'defaultBtn') {
      setGongJiJinValue('activeBtn');
    } else {
      setGongJiJinValue('defaultBtn');
    }
  };

  let handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let params: any = {
          phone,
          safetyKey,
          no,
          userType,
          censusStatus: values.censusStatus || null,
          marriageStatus: values.marriageStatus || null,
          jobRole: values.jobRole || null,
          monthlyIncome: values.monthlyIncome || null,
          payrollForm: values.payrollForm || null,
          workingYear: values.workingYear || null,
          jobIdentity: values.jobIdentity || null,
          runningWrter: values.runningWrter || null,
          manageTime: values.manageTime || null,
          registration: values.registration || null
        };
        let _shebao = shebaoValue === 'defaultBtn' ? '无' : '有';
        let _gongjijin = gongJiJinValue === 'defaultBtn' ? '无' : '有';
        //params.socialSecurity = _shebao + '，' + _gongjijin;
        params.hasSb = _shebao;
        params.hasGjj = _gongjijin;
        registerWorkData(params).then((res) => {
          if (res.code === 0) {
            let no = encodeURIComponent(res.no);
            let userType = encodeURIComponent(res.userType);
            let safetyKey = encodeURIComponent(res.safetyKey);
            let info = encodeURIComponent(JSON.stringify(res.info || {}));
            window.location.href =
              '/FillCredit?phone=' +
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
    <div className="middle">
      <Form layout="horizontal" hideRequiredMark={true}>
        <div className="radioWrap">
          <Form.Item hasFeedback label="户籍类型" {...formTopItemLayout}>
            {getFieldDecorator('censusStatus', {
              rules: [{ required: true, message: '户籍类型不能为空' }],
              initialValue: censusStatus ? censusStatus : '本地户籍'
            })(
              <Radio.Group size="large">
                <Radio value="本地户籍">本地</Radio>
                <Radio value="外地户籍">外地</Radio>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item hasFeedback label="婚姻状况" {...formTopItemLayout}>
            {getFieldDecorator('marriageStatus', {
              rules: [{ required: true, message: '婚姻状况不能为空' }],
              initialValue: marriageStatus ? marriageStatus : '已婚'
            })(
              <Radio.Group size="large">
                <Radio value="已婚">已婚</Radio>
                <Radio value="未婚">未婚</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </div>

        <div className="FillInfoIconWrap">
          <IconFont type="icon-zhiye" className="FillInfoIcon IconFont" />
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('jobRole', {
              initialValue: jobRole ? jobRole : undefined,
              rules: [{ required: true, message: '请选择您的职业类型' }]
            })(
              <Select
                placeholder="职业类型"
                size="large"
                className="FillInfoSelect"
                suffixIcon={<Icon type="caret-down" />}
                onChange={handleWorkerType}
              >
                <Option value="上班族">上班族</Option>
                <Option value="个体户">个体户</Option>
                <Option value="企业主">企业主</Option>
                <Option value="无固定职业">自由职业</Option>
              </Select>
            )}
          </Form.Item>
        </div>

        {(!wokerType || ['无固定职业', '上班族'].includes(wokerType)) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-shouru" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('monthlyIncome', {
                initialValue: monthlyIncome ? monthlyIncome : undefined,
                rules: [{ required: true, message: '请选择您的月收入情况' }]
              })(
                <Select
                  placeholder="月收入情况"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="5000元以下">5000元以下</Option>
                  <Option value="5001-10000元">5001-10000元</Option>
                  <Option value="10001-20000元">10001-20000元</Option>
                  <Option value="20001-50000元">20001-50000元</Option>
                  <Option value="50000元以上">50000元以上</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        {(!wokerType || ['上班族'].includes(wokerType)) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-yinhangqia-" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('payrollForm', {
                initialValue: payrollForm ? payrollForm : undefined,
                rules: [{ required: true, message: '请选择薪资发放形式' }]
              })(
                <Select
                  placeholder="薪资发放形式"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="银行代发">银行代发</Option>
                  <Option value="转账工资">转账工资</Option>
                  <Option value="现金发放">现金发放</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        {(!wokerType || ['上班族'].includes(wokerType)) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-shizhong" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('workingYear', {
                initialValue: workingYear ? workingYear : undefined,
                rules: [{ required: true, message: '请选择当前工龄' }]
              })(
                <Select
                  placeholder="当前工龄"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="1年以下">1年以下</Option>
                  <Option value="1-3年">1-3年</Option>
                  <Option value="3-5年">3-5年</Option>
                  <Option value="5-10年">5-10年</Option>
                  <Option value="10-20年">10-20年</Option>
                  <Option value="20年以上">20年以上</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        {(!wokerType || ['上班族'].includes(wokerType)) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-jianzhu" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('jobIdentity', {
                initialValue: jobIdentity ? jobIdentity : undefined,
                rules: [{ required: true, message: '请选择所在公司性质' }]
              })(
                <Select
                  placeholder="所在公司性质"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="私企员工">私企员工</Option>
                  <Option value="外企员工">外企员工</Option>
                  <Option value="国企员工">国企员工</Option>
                  <Option value="事业单位员工">事业单位员工</Option>
                  <Option value="公务员">公务员</Option>
                  <Option value="其他">其他</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}
        {['个体户', '企业主'].includes(wokerType) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-shouru" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('runningWrter', {
                initialValue: runningWrter ? runningWrter : undefined,
                rules: [{ required: true, message: '请选择您的经营流水/月' }]
              })(
                <Select
                  placeholder="经营流水/月"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="5万以下">5万以下</Option>
                  <Option value="5-10万">5-10万</Option>
                  <Option value="10-20万">10-20万</Option>
                  <Option value="20-30万">20-30万</Option>
                  <Option value="30-50万">30-50万</Option>
                  <Option value="50-100万">50-100万</Option>
                  <Option value="100万以上">100万以上</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}
        {['个体户', '企业主'].includes(wokerType) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-shizhong" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('manageTime', {
                initialValue: manageTime ? manageTime : undefined,
                rules: [{ required: true, message: '请选择经营年限' }]
              })(
                <Select
                  placeholder="经营年限"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="不足6个月">不足6个月</Option>
                  <Option value="6-12个月">6-12个月</Option>
                  <Option value="1-3年">1-3年</Option>
                  <Option value="3-5年">3-5年</Option>
                  <Option value="5-10年">5-10年</Option>
                  <Option value="10年以上">10年以上</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        {['个体户', '企业主'].includes(wokerType) && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-icon-test-copy" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('registration', {
                initialValue: registration ? registration : undefined,
                rules: [{ required: true, message: '请选择经营注册地' }]
              })(
                <Select
                  placeholder="经营注册地"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="本地">本地</Option>
                  <Option value="外地">外地</Option>
                  <Option value="未注册执照">未注册执照</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        <Form.Item hasFeedback {...formMiddleItemLayout}>
          {getFieldDecorator('socialSecurity')(
            <>
              <Button className={shebaoValue + ' socialSecurityBtn'} onClick={clickShebao}>
                有社保
              </Button>
              <Button className={gongJiJinValue + ' socialSecurityBtn'} onClick={clickGongJiJin}>
                有本地公积金
              </Button>
            </>
          )}
        </Form.Item>

        <Form.Item {...formMiddleItemLayout}>
          <Button type="primary" className="btnSubmit" htmlType="submit" onClick={handleSubmit}>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const XForm = Form.create<XFormProps>({
  name: 'XForm_'
})(_XForm);

export default XForm;
