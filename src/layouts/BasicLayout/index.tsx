import { Layout } from 'antd';
import React from 'react';

import { BaseRouters } from '../../routes/index';
import { BaseLayoutProps } from '../../typings/baseLayout';
const { Content } = Layout;

const Mylayout = (props: BaseLayoutProps) => {
  return (
    <Layout className='BasicLayout' style={{width:'100%',height:'100%'}}>
      {/* <Header>Header</Header> */}
      <Content className='content'>
        <BaseRouters />
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default Mylayout;
