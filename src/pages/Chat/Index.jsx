import React from 'react';
import { connect } from 'umi';
import styles from './style.less';
import { Avatar, Popover, Badge, Input, Button, Divider } from 'antd';
import {
  SmileOutlined,
  ManOutlined,
  CloseCircleOutlined,
  EllipsisOutlined,
  VideoCameraOutlined,
  WhatsAppOutlined,
  EditOutlined,
  PictureOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

function IndexPage(props) {
  const datalist = [
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    11,
    1,
    0,
    0,
    1,
    1,
    1,
  ];
  const content = (
    <div className={styles.chatMe}>
      <h4>
        卡哇伊的妹子 <ManOutlined style={{ color: '#f5222d' }} />
      </h4>
      <span>江苏 · 南京</span>
      <p>今天真实一个不错的天气！</p>
    </div>
  );
  const changenavStatus = () => {
    const data = !props.navStatus;
    console.log(props);
    props.dispatch({
      type: 'Chat/changenavStatus',
      payload: data,
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <div>
          <div>
            {datalist.map((item, index) => (
              <Popover key={index} content={content}>
                <Badge dot={true} count={item}>
                  <Avatar
                    shape="square"
                    style={{ borderRadius: 10, width: 50, height: 50 }}
                    src={require('../../assets/img/logo.jpg')}
                  />
                </Badge>
              </Popover>
            ))}
          </div>
          <EllipsisOutlined
            className={styles.ellipses}
            onClick={changenavStatus}
          />
        </div>
        <div
          className={`${styles.chatUser} ${
            props.navStatus ? styles.chatUserin : styles.chatUserout
          }`}
        >
          {datalist.map((item, index) => (
            <Badge dot={true} count={item}>
              <Avatar
                shape="square"
                style={{ borderRadius: 10, width: 50, height: 50 }}
                src={require('../../assets/img/logo.jpg')}
              />
            </Badge>
          ))}
        </div>
        <div>
          <div className={styles.chatBody}>
            <div>
              <h4>正在与陈帅对话...</h4>
              <span>
                <VideoCameraOutlined style={{ marginLeft: 10 }} />
                <WhatsAppOutlined style={{ marginLeft: 10 }} />
                <PictureOutlined style={{ marginLeft: 10 }} />
                <EditOutlined style={{ marginLeft: 10 }} />
                <CloseCircleOutlined style={{ marginLeft: 10 }} />
              </span>
            </div>
            <div className={styles.chatMessage}>
              {datalist.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={index}
                      style={
                        index % 2 === 0
                          ? { justifyContent: 'flex-start' }
                          : { justifyContent: 'flex-end' }
                      }
                    >
                      <LeftMessage></LeftMessage>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      style={
                        index % 2 === 0
                          ? { justifyContent: 'flex-start' }
                          : { justifyContent: 'flex-end' }
                      }
                    >
                      <RightMessage></RightMessage>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className={styles.chatBut}>
            <Button
              shape="circle"
              style={{ marginRight: 10 }}
              type="link"
              icon={<ShoppingOutlined />}
            />
            <Button
              shape="circle"
              style={{ marginRight: 10 }}
              type="link"
              icon={<SmileOutlined />}
            />
            <Input
              size="large"
              style={{ marginRight: 10 }}
              placeholder="input search text"
            />
            <Button size="large" type="primary">
              发送
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftMessage(item) {
  return (
    <>
      <img src={require('../../assets/img/logo.jpg')} alt="" />
      <div>这里是一条游泳的消息</div>
    </>
  );
}
function RightMessage(item) {
  return (
    <>
      <div>这里是一条游泳的消息</div>
      <img src={require('../../assets/img/logo.jpg')} alt="" />
    </>
  );
}
function mapStateToProps(state) {
  const data = state.Chat;
  return { navStatus: data.navStatus };
}
export default connect(mapStateToProps)(IndexPage);
