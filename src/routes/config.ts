import { lazy } from 'react';
const Invitation = lazy(() => import('../pages/Invitation/index'));
const InvitationDetail = lazy(() => import('../pages/InvitationDetail/index'));
const Register = lazy(() => import('../pages/Register/index'));
const Recommend = lazy(() => import('../pages/Recommend/index'));
const FillInfo = lazy(() => import('../pages/FillInfo/index'));
const FillCredit = lazy(() => import('../pages/FillCredit/index'));
const RegSuccess = lazy(() => import('../pages/RegSuccess/index'));
const BrokerInvitation = lazy(() => import('../pages/BrokerInvitation/index'));
const BrokerRegister = lazy(() => import('../pages/BrokerRegister/index'));
const BrokerAward = lazy(() => import('../pages/BrokerAward/index'));
const Download = lazy(() => import('../pages/Download/index'));
const LoanGVRP = lazy(() => import('../pages/LoanGVRP/index'));
const BrokerGVRP = lazy(() => import('../pages/BrokerGVRP/index'));
const LoanRecordList = lazy(() => import('../pages/LoanRecordList/index'));
const LoanRecordDetail = lazy(() => import('../pages/LoanRecordDetail/index'));

export const Menus = [
  {
    path: '/index',
    title: '时客派-新户秒批',
    component: Register
  },
  {
    path: '/Invitation',
    title: '客户推荐邀请函',
    component: Invitation
  },
  {
    path: '/InvitationDetail',
    title: '客户推荐邀请详情页',
    component: InvitationDetail
  },
  {
    path: '/Recommend',
    title: '热门推荐贷款',
    component: Recommend
  },
  {
    path: '/FillInfo',
    title: '时客派-新户秒批',
    component: FillInfo
  },
  {
    path: '/FillCredit',
    title: '时客派-新户秒批',
    component: FillCredit
  },
  {
    path: '/RegSuccess',
    title: '时客派-新户秒批',
    component: RegSuccess
  },
  {
    path: '/BrokerInvitation',
    title: '时客派-邀请页',
    component: BrokerInvitation
  },
  {
    path: '/BrokerRegister',
    title: '时客派-注册页',
    component: BrokerRegister
  },
  {
    path: '/BrokerAward',
    title: '时客派-奖励页',
    component: BrokerAward
  },
  {
    path: '/Download',
    title: '时客派-信贷经理获客展业神器',
    component: Download
  },
  {
    path: '/LoanGVRP',
    title: '时客派-贷款客户服务协议',
    component: LoanGVRP
  },
  {
    path: '/BrokerGVRP',
    title: '时客派-信贷经理用户协议',
    component: BrokerGVRP
  },
  {
    path: '/LoanRecordList',
    title: '贷款申请记录',
    component: LoanRecordList
  },
  {
    path: '/LoanRecordDetail',
    title: '详情',
    component: LoanRecordDetail
  }
];
