import React, { useState } from 'react';
import { connect } from 'umi';
import styles from './style.less';
import {
  List,
  Radio,
  Card,
  PageHeader,
  Carousel,
  Input,
  Divider,
  Tabs,
  Tooltip,
  Avatar,
  Select,
  Tag,
  Button,
} from 'antd';
import {
  MessageOutlined,
  BulbOutlined,
  RocketFilled,
  TagOutlined,
  EyeInvisibleFilled,
  SearchOutlined,
  AlertFilled,
  LikeOutlined,
  FormOutlined,
  VideoCameraOutlined,
  BookOutlined,
  StarOutlined,
} from '@ant-design/icons';
import Comment from './components/Comment';
import SetDrawer from './components/SetDrawer';
import { readFileSync } from 'fs';
const { TabPane } = Tabs;
const { Option } = Select;
const listData = [];
const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
];
for (let i = 0; i < 15; i++) {
  listData.push({
    title: `有没有可以隐秘表达暗恋的短句？ ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '无名的小猪',
    content:
      '知乎是网络问答社区，连接各行各业的用户。用户分享着彼此的知识、经验和见解，为中文互联网源源不断地提供多种多样的信息。准确地讲，知乎更像一个论坛：用户围绕着某一感兴趣的话题进行相关的讨论，同时可以关注兴趣一致的人。',
  });
}

function IndexPage(props) {
  const [selectedTags, setselectedTags] = useState(['Books']);
  const open = e => {
    props.dispatch({
      type: 'Share/changebodyStatus',
      payload: e,
    });
  };
  const IconText = ({ icon, text }) => (
    <span>
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </span>
  );
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  function handleChange(tag, checked) {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setselectedTags(nextSelectedTags);
  }
  let setDrawerDom = {};
  return (
    <div className={styles.content}>
      <SetDrawer
        setDrawerDom={data => {
          setDrawerDom = data;
        }}
      ></SetDrawer>
      <div className={styles.index}>
        <div className={styles.indexNav}>
          <div>
            <div>
              <Radio.Group size="large" defaultValue="热度" buttonStyle="solid">
                <Radio.Button value="热度">热度</Radio.Button>
                <Radio.Button value="最新">最新</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Input
                size="large"
                suffix={<SearchOutlined />}
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <Button
                size="large"
                onClick={() => {
                  setDrawerDom.changeVisible();
                }}
                ghost
                type="primary"
                shape="circle"
                icon={<TagOutlined />}
              />
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Button
                  style={{ background: '#a0d911', border: 'none' }}
                  size={'middle'}
                  onClick={() => {
                    setDrawerDom.changeVisible();
                  }}
                  type="primary"
                  shape="circle"
                  icon={<BookOutlined />}
                />
                <p>发动态</p>
              </li>
              <li>
                <Button
                  style={{ background: '#36cfc9', border: 'none' }}
                  size={'middle'}
                  onClick={() => {
                    setDrawerDom.changeVisible();
                  }}
                  type="primary"
                  shape="circle"
                  icon={<FormOutlined />}
                />
                <p>写观点</p>
              </li>
              <li>
                <Button
                  style={{ background: '#9254de', border: 'none' }}
                  size={'middle'}
                  onClick={() => {
                    setDrawerDom.changeVisible();
                  }}
                  type="primary"
                  shape="circle"
                  icon={<BulbOutlined />}
                />
                <p>提问题</p>
              </li>
              <li>
                <Button
                  style={{ background: '#ffa940', border: 'none' }}
                  size={'middle'}
                  onClick={() => {
                    setDrawerDom.changeVisible();
                  }}
                  type="primary"
                  shape="circle"
                  icon={<VideoCameraOutlined />}
                />
                <p>发视频</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Tabs tabPosition={'left'}>
            <TabPane tab="综 合" key="1">
              <div className={styles.TabsBody}>
                {props.bodyStatus === null ? (
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    footer={
                      <div>
                        <b>ant design</b> footer part
                      </div>
                    }
                    renderItem={item => (
                      <List.Item
                        onClick={() => {
                          open(item);
                        }}
                        style={{ cursor: 'pointer' }}
                        key={item.title}
                        actions={[
                          <IconText
                            icon={StarOutlined}
                            text="156"
                            key="list-vertical-star-o"
                          />,
                          <IconText
                            icon={LikeOutlined}
                            text="156"
                            key="list-vertical-like-o"
                          />,
                          <IconText
                            icon={MessageOutlined}
                            text="2"
                            key="list-vertical-message"
                          />,
                          <IconText
                            icon={AlertFilled}
                            text="举报"
                            key="list-vertical-message"
                          />,
                          <IconText
                            icon={EyeInvisibleFilled}
                            text="屏蔽"
                            key="list-vertical-message"
                          />,
                          <IconText
                            icon={RocketFilled}
                            text="分享"
                            key="list-vertical-message"
                          />,
                        ]}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          />
                        }
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={item.title}
                          description={item.description}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                ) : (
                  <div>
                    <PageHeader
                      style={{ borderBottom: '1px solid #d9d9d9' }}
                      onBack={() => {
                        open(null);
                      }}
                      title={props.bodyStatus.title}
                      subTitle={props.bodyStatus.description}
                    />
                    <p className={styles.bodyContent}>
                      {props.bodyStatus.content}
                    </p>
                    <Divider />
                    <Comment />
                  </div>
                )}
              </div>
            </TabPane>
            <TabPane tab="动 态" key="2">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="问 答" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="观 点" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="小 说" key="5">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="音 乐" key="6">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="视 频" key="7">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
          <div className={styles.navRight}>
            <ul>
              <li>写动态</li>
              <li>发问答</li>
              <li>说观点</li>
              <li>写小说</li>
              <li>好音乐</li>
              <li>好视频</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const data = state.Share;
  return { bodyStatus: data.bodyStatus };
}
export default connect(mapStateToProps)(IndexPage);
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
