import React, { useState } from 'react';
import { connect, history } from 'umi';
import { Form, Input, Steps, Button, Checkbox, Divider } from 'antd';
import styles from '../styles/login.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Step } = Steps;
function index(props) {
  const [pwd, setPwd] = useState(0);
  const onFinish = values => {
    props.dispatch({
      type: 'UserActive/login',
      payload: values,
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const changeData = (type, e) => {
    switch (type) {
      case 'Uid':
        props.dispatch({
          type: 'UserActive/setUserData',
          payload: { ...props.UserData, Uid: Number(e.target.value) },
        });
        break;
      case 'Pwd':
        props.dispatch({
          type: 'UserActive/setUserData',
          payload: { ...props.UserData, Pwd: e.target.value },
        });
        break;

      default:
        break;
    }
  };
  const Login = (
    <div>
      <h1>欢迎登录</h1>
      <Form
        style={{ color: '#ffffff' }}
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="手机号"
          name="Uid"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            value={props.UserData.Uid}
            onChange={e => {
              changeData('Uid', e);
            }}
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="密码"
          name="Pwd"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            value={props.UserData.Pwd}
            onChange={e => {
              changeData('Pwd', e);
            }}
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item
          style={{ textAlign: 'left' }}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <div>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            props.dispatch({
              type: 'UserActive/setStatus',
              payload: { status: 2 },
            });
          }}
        >
          立即注册
        </span>
        <Divider type="vertical" />
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            props.dispatch({
              type: 'UserActive/setStatus',
              payload: { status: 1 },
            });
          }}
        >
          忘记密码
        </span>
      </div>
    </div>
  );
  const Registered = (
    <div>
      <h1>{props.status === 1 ? '找回密码' : '注册账号'}</h1>
      <Steps
        style={{ textAlign: 'left', width: '70%', margin: '20px auto' }}
        current={pwd}
      >
        <Step title="验证手机号" icon={<UserOutlined />} />
        <Step title="输入密码" icon={<LockOutlined />} />
      </Steps>
      {pwd === 1 ? (
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item style={{ marginTop: 40 }}>
            <Button
              onClick={() => {
                props.dispatch({
                  type: 'UserActive/setStatus',
                  payload: { status: 0 },
                });
              }}
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="手机号"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input style={{ width: 320, marginRight: 18 }} />
            <Button>获取验证码</Button>
          </Form.Item>

          <Form.Item style={{ marginTop: 40 }}>
            <Button
              onClick={() => {
                setPwd(1);
              }}
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
            >
              验证
            </Button>
          </Form.Item>
        </Form>
      )}
      <div>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            props.dispatch({
              type: 'UserActive/setStatus',
              payload: { status: 0 },
            });
          }}
        >
          去登录 >>>
        </span>
      </div>
    </div>
  );
  return (
    <div className={styles.index}>
      <div>
        <div>
          <div>
            <img src={require('../assets/img/logo.png')} alt="" />
            <h1>斑 鹿</h1>
            <p>自由在线社交平台，畅想欢快聊天，多种交友方式</p>
            <p>认识身边的人，让机会更对，缘分更深！</p>
          </div>
          {props.status === 0 ? Login : Registered}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const store = state.UserActive;
  return {
    status: store.status,
    UserData: store.UserData,
  };
}
export default connect(mapStateToProps)(index);
