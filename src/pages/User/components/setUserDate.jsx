import React from 'react';
import { connect } from 'umi';
import { Modal, Form, Upload, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@connect()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      previewVisible: '',
      previewImage: '',
      fileList: '',
      previewTitle: '',
    };
  }
  changeVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  uploadButton = () => (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    this.props.setDrawerDom(this.changeVisible);

    return (
      <div>
        <Modal
          width={500}
          title="发布动态"
          visible={this.state.visible}
          onOk={() => {
            this.setState({ visible: !this.state.visible });
          }}
          onCancel={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          <Form layout={'horizontal '}>
            <Form.Item label="标题">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 8 ? null : this.uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
            <Form.Item label="正文">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="正文"></Form.Item>
            <Form.Item label="正文"></Form.Item>
            <Form.Item label="正文"></Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default App;
