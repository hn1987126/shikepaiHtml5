import md5 from 'crypto-js/md5';
import { post } from '../util/request';
import baseURL from './baseURL';

let commonParms = () => {
  let appId = 'skpH5';
  let timestamp = +new Date();
  let sign = md5(appId + 'ZXw@qRVNO8@Gk!z*dwrF&tW#h!FNW6*T' + timestamp).toString();
  return 'appId=' + appId + '&timestamp=' + timestamp + '&sign=' + sign;
};
export let queryByPhone = (params: any): Promise<any> => {
  let url = baseURL + '/h5/queryByPhone.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let sendSMS = (params: any): Promise<any> => {
  let url = baseURL + '/h5/sendsms.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let registerBasicData = (params: any): Promise<any> => {
  let url = baseURL + '/h5/registerBasicData.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let registerWorkData = (params: any): Promise<any> => {
  let url = baseURL + '/h5/registerWorkData.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let registerCreditData = (params: any): Promise<any> => {
  let url = baseURL + '/h5/registerCreditData.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let brokerSMS = (params: any): Promise<any> => {
  let url = baseURL + '/h5/credit/register/smsend.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let brokerRegister = (params: any): Promise<any> => {
  let url = baseURL + '/h5/credit/register/register.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let loanDetail = (params: any): Promise<any> => {
  let url = baseURL + '/h5/loan/detail.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};

export let adList = (): Promise<any> => {
  let url = baseURL + '/h5/adList.do?' + commonParms();
  return post(url, {}).then((res) => res.data);
};
export let loanList = (params: any): Promise<any> => {
  let url = baseURL + '/h5/loanList.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};
export let loanRecordDetail = (params: any): Promise<any> => {
  let url = baseURL + '/h5/loanDetail.do?' + commonParms();
  return post(url, params).then((res) => res.data);
};
