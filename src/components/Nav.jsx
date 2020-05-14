import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';
import styles from '../styles/nav.less';
import NProgress from 'nprogress';
import { Menu, Select, Button, Badge, Input } from 'antd';
import {
  FlagOutlined,
  MessageOutlined,
  FireOutlined,
  TeamOutlined,
  BellOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
const { Option } = Select;
const { Search } = Input;
NProgress.configure({ showSpinner: false });
function NavPage(props) {
  const [current, setCurrent] = useState('/index');
  const [resize, setResize] = useState('');
  const handleClick = e => {
    NProgress.start();
    if (e.key === '/') {
      e.key = '/index';
    }
    setCurrent(e.key);
    const key = e.key === '/index' ? '/' : e.key;
    history.push(key);
    NProgress.done();
  };
  useEffect(() => {
    const e = { key: window.location.pathname };
    if (e.key !== current && e.key !== '/') {
      handleClick(e);
    }
    window.addEventListener('resize', e => {
      if (e.target.innerWidth < 1000) setResize('none');
      else setResize('');
    });
  });
  return props.status === null ? (
    <div className={styles.MenuCenter}>
      <div>
        <img src={require('../assets/yay.jpg')} alt="" />
        <h1>LOL · 战场</h1>
      </div>
      <Menu
        style={{ backgroundColor: '#535353', color: '#ffffff' }}
        onClick={handleClick}
        selectedKeys={current}
        mode="horizontal"
      >
        <Menu.Item key="/index">
          <FlagOutlined />
          主页
        </Menu.Item>
        <Menu.Item key="/Share">
          <FireOutlined />
          动态
        </Menu.Item>
        <Menu.Item key="/Chat">
          <MessageOutlined />
          消息
        </Menu.Item>
        <Menu.Item key="/Friends">
          <TeamOutlined />
          关注
        </Menu.Item>
        <Menu.Item key="/Statistics">
          <LineChartOutlined />
          数据
        </Menu.Item>
      </Menu>
      <div>
        <div
          onClick={() => {
            handleClick({ key: '/User' });
          }}
        >
          <span className="avatar-item">
            <img src={require('../assets/logo.jpg')} alt="" />
          </span>
          <span style={{ marginLeft: 10 }}>{props.UserData.Name}</span>
        </div>
        <Select
          defaultValue="男爵领域"
          style={{ width: 100, color: '#ffffff' }}
          bordered={false}
        >
          <Option value="jack">男爵领域</Option>
        </Select>
        <Select
          defaultValue="上单"
          style={{ width: 70, color: '#ffffff' }}
          bordered={false}
        >
          <Option value="jack">上单</Option>
        </Select>
        <Badge dot={true} count={1}>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>
      </div>
    </div>
  ) : (
    ''
  );
}
function mapStateToProps(state) {
  const store = state.UserActive;
  return {
    status: store.status,
    UserData: store.UserData,
  };
}
export default connect(mapStateToProps)(NavPage);
