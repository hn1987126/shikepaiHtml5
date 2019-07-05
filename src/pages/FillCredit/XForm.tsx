import { Button, Form, Icon, Input, message, Radio, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { useState } from 'react';
import IconFont from '../../components/IconFont';
import { registerCreditData } from '../../service/index';
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
    creditSituation,
    webank,
    jiebei,
    houseStatus,
    propertyType,
    carStatus,
    buyInsurance,
    policyValue,
    policyTime
  } = JSON.parse(info);
  let [InsuranceVal, setInsuranceVal] = useState(buyInsurance || '是');
  let changeInsuranceType = (e: any) => {
    setInsuranceVal(e.target.value);
  };
  let handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let params: any = {
          phone,
          safetyKey,
          no,
          userType,
          creditSituation: values.creditSituation,
          webank: values.webank,
          jiebei: values.jiebei,
          houseStatus: values.houseStatus,
          carStatus: values.carStatus,
          buyInsurance: InsuranceVal
        };
        if (values.houseStatus === '有房产') {
          params.propertyType = values.propertyType;
        }
        if (InsuranceVal === '是') {
          params.policyValue = Number(values.policyValue) ? Number(values.policyValue) : 0;
          params.policyTime = values.policyTime || null;
        }
        registerCreditData(params).then((res) => {
          if (res.code === 0) {
            // 这里需要设置跳转的页面
            message.info('注册成功');
            let phone = queryString().phone || null;
            let no = queryString().no || null;
            let safetyKey = queryString().safetyKey || null;
            window.location.href =
              '/RegSuccess?phone=' + phone + '&safetyKey=' + safetyKey + '&no=' + no;
          } else {
            message.info(res.msg);
          }
        });
      }
    });
  };

  let [propertyTypeValue, setPropertyTypeValue] = useState(houseStatus === '有房产' ? 1 : 0);
  let handlePropertyType = (value: string) => {
    if (value === '无房产') {
      setPropertyTypeValue(0);
    } else {
      setPropertyTypeValue(1);
    }
  };

  return (
    <div className="middle">
      <Form layout="horizontal" hideRequiredMark={true}>
        <div className="FillInfoIconWrap">
          <IconFont type="icon-yongxinyonghu" className="FillInfoIcon IconFont creditSituation" />
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('creditSituation', {
              initialValue: creditSituation ? creditSituation : undefined,
              rules: [{ required: true, message: '请选择您的信用状况' }]
            })(
              <Select
                placeholder="信用状况"
                size="large"
                className="FillInfoSelect"
                suffixIcon={<Icon type="caret-down" />}
              >
                <Option value="有信用卡或贷款，无逾期">有信用卡或贷款，无逾期</Option>
                <Option value="无信用卡或贷款">无信用卡或贷款</Option>
                <Option value="1年内逾期少于3次且少于90天">1年内逾期少于3次且少于90天</Option>
                <Option value="1年内逾期不少于3次">1年内逾期不少于3次</Option>
              </Select>
            )}
          </Form.Item>
        </div>

        <Form.Item hasFeedback {...formMiddleItemLayout}>
          {getFieldDecorator('webank', {
            initialValue: webank ? webank : undefined,
            rules: [{ required: true, message: '请填写您的微粒贷额度' }]
          })(
            <Input
              className="Ipt"
              autoComplete="off"
              prefix={<IconFont type="icon-wx-weilidai" className="IconFont webank" />}
              suffix={<span className="suffixMoney">（元）</span>}
              placeholder="微粒贷额度"
            />
          )}
        </Form.Item>

        <Form.Item hasFeedback {...formMiddleItemLayout}>
          {getFieldDecorator('jiebei', {
            initialValue: jiebei ? jiebei : undefined,
            rules: [{ required: true, message: '请填写您的借呗额度' }]
          })(
            <Input
              className="Ipt"
              autoComplete="off"
              prefix={<IconFont type="icon-jiebei-fan" className="IconFont" />}
              suffix={<span className="suffixMoney">（元）</span>}
              placeholder="借呗额度"
            />
          )}
        </Form.Item>

        <div className="FillInfoIconWrap">
          <IconFont type="icon-fangchanxinxi" className="FillInfoIcon IconFont" />
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('houseStatus', {
              initialValue: houseStatus ? houseStatus : undefined,
              rules: [{ required: true, message: '请选择您的房产情况' }]
            })(
              <Select
                placeholder="房产情况"
                size="large"
                className="FillInfoSelect"
                suffixIcon={<Icon type="caret-down" />}
                onChange={handlePropertyType}
              >
                <Option value="无房产">无房产</Option>
                <Option value="有房产">有房产</Option>
              </Select>
            )}
          </Form.Item>
        </div>

        {propertyTypeValue === 1 && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-fangchanxinxi" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('propertyType', {
                initialValue: propertyType ? propertyType : undefined,
                rules: [{ required: true, message: '请选择您的房产类型' }]
              })(
                <Select
                  placeholder="房产类型"
                  size="large"
                  className="FillInfoSelect"
                  suffixIcon={<Icon type="caret-down" />}
                >
                  <Option value="小产权房">小产权房</Option>
                  <Option value="经济/限价房">经济/限价房</Option>
                  <Option value="房改/危改房">房改/危改房</Option>
                  <Option value="商铺">商铺</Option>
                  <Option value="厂房">厂房</Option>
                  <Option value="商住两用房">商住两用房</Option>
                  <Option value="办公楼">办公楼</Option>
                  <Option value="军产房">军产房</Option>
                  <Option value="商品住宅">商品住宅</Option>
                  <Option value="宅基地/自建房">宅基地/自建房</Option>
                  <Option value="有房，但不确认房产类型">有房，但不确认房产类型</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        )}

        <div className="FillInfoIconWrap">
          <IconFont type="icon-che" className="FillInfoIcon IconFont" />
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('carStatus', {
              initialValue: carStatus ? carStatus : undefined,
              rules: [{ required: true, message: '请选择您的车产情况' }]
            })(
              <Select
                placeholder="车产情况"
                size="large"
                className="FillInfoSelect"
                suffixIcon={<Icon type="caret-down" />}
              >
                <Option value="无车产">无车产</Option>
                <Option value="有车产">有车产</Option>
              </Select>
            )}
          </Form.Item>
        </div>
        <div className="radioWrap">
          <Form.Item hasFeedback label="保单情况" {...formTopItemLayout}>
            {getFieldDecorator('InsuranceType', {
              rules: [{ required: true, message: '请选择您的保单情况' }],
              initialValue: InsuranceVal ? InsuranceVal : undefined
            })(
              <Radio.Group size="large" onChange={changeInsuranceType}>
                <Radio value="是">有保单</Radio>
                <Radio value="否">无保单</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </div>

        {InsuranceVal === '是' && (
          <Form.Item hasFeedback {...formMiddleItemLayout}>
            {getFieldDecorator('policyValue', {
              initialValue: policyValue ? policyValue : undefined,
              rules: [{ required: true, message: '请填写您的保单价值' }]
            })(
              <Input
                className="Ipt"
                autoComplete="off"
                prefix={<IconFont type="icon-shouru" className="IconFont" />}
                suffix={<span className="suffixMoney">（万元）</span>}
                placeholder="保单价值"
              />
            )}
          </Form.Item>
        )}

        {InsuranceVal === '是' && (
          <div className="FillInfoIconWrap">
            <IconFont type="icon-shizhong" className="FillInfoIcon IconFont" />
            <Form.Item hasFeedback {...formMiddleItemLayout}>
              {getFieldDecorator('policyTime', {
                initialValue: policyTime ? policyTime : undefined,
                rules: [{ required: true, message: '请选择保单时间' }]
              })(
                <Select
                  placeholder="保单时间"
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

        <Form.Item>
          <Button type="primary" className="btnSubmit" htmlType="submit" onClick={handleSubmit}>
            提交借款申请
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
