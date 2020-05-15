import React from 'react';
import { connect } from 'umi';
import styles from './style.less';
import { Statistic, Popover, Avatar, Drawer, Card, Row, Col } from 'antd';
import {
  ArrowUpOutlined,
  LogoutOutlined,
  MessageOutlined,
  FlagOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
function IndexPage(props) {
  const onClose = e => {
    props.dispatch({
      type: 'Index/setVisible',
      payload: { visible: !props.visible },
    });
  };
  const Setting = (
    <ul className={styles.indexUser_Setting}>
      <li>
        <FlagOutlined />
        &nbsp;招募队友
      </li>
      <li>
        <MessageOutlined />
        &nbsp;打开聊天窗
      </li>
      <li>
        <SettingOutlined />
        &nbsp;修改战队信息
      </li>
      <li style={{ color: '#f5222d' }}>
        <LogoutOutlined />
        &nbsp;退出战队
      </li>
    </ul>
  );
  return (
    <div className={styles.index}>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={props.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className={styles.nav}>
        <div>
          <Row gutter={16}>
            <Col span={6}>
              <Card style={{ background: '#e7e7e7' }}>
                <Statistic
                  title="当前在线总人数"
                  value={35434}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="人"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: '#e7e7e7' }}>
                <Statistic
                  title="活跃人数比例"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: '#e7e7e7' }}>
                <Statistic
                  title="峰值人数"
                  value={51684615}
                  valueStyle={{ color: '#cf1322' }}
                  suffix="人"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: '#e7e7e7' }}>
                <Statistic
                  title="男女比例"
                  valueStyle={{ color: '#3f8600' }}
                  value={93}
                  suffix="/ 500"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div>采用umi+dva+ant技术栈制作 ——— 2020.5.15</div>
      </div>
      <div className={styles.indexBody}>
        <div>
          <Avatar
            shape="square"
            style={{ width: 150, height: 150 }}
            src={require('../../assets/img/logo.png')}
          />
          <h1>斑 鹿</h1>
          <h4>自由在线社交平台，畅想欢快聊天，多种交友方式！</h4>
        </div>
        <ul>
          <li>漂流瓶</li>
          <span>&</span>
          <li>点一点</li>
          <span>&</span>
          <li>姻缘绳</li>
        </ul>
      </div>
      {/* <div className={styles.indexUser}>
        <div>
          战队：最强五人组
          <span>
            <Popover content={Setting} placement="right">
              <EllipsisOutlined />
            </Popover>
          </span>
        </div>
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/img/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/img/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/img/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/img/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/img/logo.jpg')}
        />
      </div> */}
    </div>
  );
}
function mapStateToProps(state) {
  const data = state.Index;
  return { visible: data.visible };
}

export default connect(mapStateToProps)(IndexPage);
