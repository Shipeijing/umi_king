import React, { useState } from 'react';
import { connect } from 'umi';
import { Modal, Form, Input, Tag } from 'antd';
import BraftEditor from '../../../components/BraftEditor';
function index(props) {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => {
    setVisible(true);
  };
  props.setDrawerDom({ changeVisible });
  const [form] = Form.useForm();
  return (
    <div>
      <Modal
        width={800}
        title="发布动态"
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Form layout={'horizontal '} form={form}>
          <Form.Item label="标题">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="标签">
            <Tag color="magenta">女性</Tag>
            <Tag color="red">风景</Tag>
            <Tag color="volcano">娱乐</Tag>
            <Tag color="orange">游戏</Tag>
            <Tag color="gold">明星</Tag>
            <Tag color="lime">日常</Tag>
            <Tag color="green">旅游</Tag>
            <Tag color="cyan">新闻</Tag>
            <Tag color="blue">男性</Tag>
            <Tag color="geekblue">动物</Tag>
            <Tag color="purple">国外</Tag>
          </Form.Item>
          <Form.Item label="正文">
            <BraftEditor></BraftEditor>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default connect()(index);
