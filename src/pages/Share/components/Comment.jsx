import React from 'react';
import { connect } from 'umi';
import styles from '../style.less';
import { Comment, Avatar, Tooltip } from 'antd';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  HistoryOutlined,
} from '@ant-design/icons';

const actions = [
  <span key="comment-basic-like">
    <Tooltip title="Like">
      {/* <LikeFilled style={{ color: '#ffbf00' }} /> */}
      <LikeOutlined />
    </Tooltip>
    <span className="comment-action">{2000}</span>
  </span>,
  <span key=' key="comment-basic-dislike"'>
    <Tooltip title="Dislike">
      {/* <DislikeFilled style={{ color: '#ffbf00' }} /> */}
      <DislikeOutlined />
    </Tooltip>
    <span className="comment-action">{500}</span>
  </span>,
];
const ExampleComment = ({ children }) => (
  <Comment
    actions={actions}
    author={[
      <h1 style={{ display: 'inline-block', marginRight: 10 }}>小明的冥想</h1>,
      <span>
        <HistoryOutlined /> 2020.2.5
      </span>,
    ]}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);
function index() {
  return (
    <div>
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </div>
  );
}

export default connect()(index);
