import React from 'react';
import { connect } from 'umi';
import styles from './style.less';
import ReactEcharts from 'echarts-for-react';
function IndexPage() {
  let option2 = {
    title: {
      text: '日活跃人数（时更）'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      boundaryGap: false,
      type: 'category',
      data: [1, 2, 3, 4, 5, 6],

    },
    yAxis: {
      type: 'value',
      axisLine: {       //y轴
        show: false
      }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };
  const option3 = {
    title: {
      text: '男女总数比例',
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data: ['女性', '男性']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '60%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '女性' },
          { value: 310, name: '男性' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  const option1 = {
    title: {
      text: '上周男女活跃比例（周更）'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['女性', '男性']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      axisLine: {       //y轴
        show: false
      }
    },
    series: [
      {
        name: '女性',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '男性',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };

  return (
    <div className={styles.index}>
      <div>
        <ReactEcharts
          option={option2}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div>
        <ReactEcharts
          option={option1}
          style={{ width: '70%', height: '100%', float: 'left' }}
        />
        <div style={{ float: 'right', width: '30%', height: '100%' }}>
          <ReactEcharts
            option={option3}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
