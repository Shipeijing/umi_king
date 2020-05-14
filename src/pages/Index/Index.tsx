import React from 'react';
import { connect } from 'umi';
import styles from './style.less';
import { Statistic, Avatar, Drawer, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
function IndexPage(props) {
  const onClose = e => {
    props.dispatch({
      type: 'Index/setVisible',
      payload: { visible: !props.visible },
    });
  };
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
        <Row gutter={16}>
          <Col span={6}>
            <Card>
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
            <Card>
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
            <Card>
              <Statistic
                title="峰值人数"
                value={51684615}
                valueStyle={{ color: '#cf1322' }}
                suffix="人"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
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
      <div className={styles.indexBody}>
        <div>
          <h1>LOL · 战场</h1>
          <h4>曾经我们共同作战，现在各有天命，上战场，寻找一起战斗的伙伴！</h4>
        </div>
        <ul>
          <li>开房间</li>
          <span>&</span>
          <li>招募战友</li>
          <span>&</span>
          <li>世界之窗</li>
        </ul>
      </div>
      <div className={styles.indexUser}>
        <div></div>
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/logo.jpg')}
        />
        <Avatar
          shape="square"
          style={{ borderRadius: 10, width: 50, height: 50 }}
          src={require('../../assets/logo.jpg')}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const data = state.Index;
  return { visible: data.visible };
}

export default connect(mapStateToProps)(IndexPage);
