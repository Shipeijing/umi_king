import React, { useState } from 'react';
import { connect } from 'umi';
import { Modal, Form, Input } from 'antd';
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
          <Form.Item label="正文">
            <BraftEditor></BraftEditor>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default connect()(index);
