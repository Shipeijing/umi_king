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
  ManOutlined,
  WomanOutlined,
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
  });
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div>
          <img src={require('../assets/img/logo.png')} alt="" />
          <h1>斑 鹿</h1>
        </div>
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
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
          {/* <Menu.Item key="/Statistics">
            <LineChartOutlined />
            数据
          </Menu.Item> */}
        </Menu>
        <div>
          <div
            onClick={() => {
              handleClick({ key: '/User' });
            }}
          >
            <span className="avatar-item">
              <img src={require('../assets/img/logo.jpg')} alt="" />
            </span>
            <span style={{ marginLeft: 10, fontWeight: 900, fontSize: 16 }}>
              {props.UserData.Name}&nbsp;
            </span>
            {props.UserData.Sex === '男' ? (
              <ManOutlined style={{ color: '#1890ff' }} />
            ) : (
              <WomanOutlined style={{ color: '#f5222d' }} />
            )}
            <span style={{ margin: '0 15px' }}>{props.UserData.Address}</span>
          </div>
          <Badge dot={true} count={1}>
            <BellOutlined style={{ fontSize: 20 }} />
          </Badge>
          <Select
            defaultValue="中 文"
            style={{ width: 95, marginLeft: 10 }}
            bordered={false}
          >
            <Option value="jack">中 文</Option>
            <Option value="jack">English</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const store = state.UserActive;
  return {
    UserData: store.UserData,
  };
}
export default connect(mapStateToProps)(NavPage);
