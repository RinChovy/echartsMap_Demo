// import echarts from 'echarts'
import React, { PureComponent } from 'react';
import { Unit } from '../style';
import { merchantTop } from '../../../services/index';
// 模块化样式表
class RightBottomChart extends PureComponent {
  state = {
    listData: [],
    list: [],
    box: 'boxN',
    index: 0,
    index_box: false,
    height: 3.3,
  };
  componentDidMount() {
    merchantTop().then(res => {
      if (res?.code === 0) {
        let list = res.data.list;
        list.forEach((v, k) => {
          v.id = k + 1;
        });
        this.setState({
          listData: list,
        });
        this.loopTime = setInterval(this.setTime, 2000);
      }
    });
    this.loopTime2 = setInterval(() => {
      merchantTop().then(res => {
        if (res?.code === 0) {
          let list = res.data.list;
          list.forEach((v, k) => {
            v.id = k + 1;
          });
          this.setState({
            listData: list,
          });
        }
      });
    }, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.loopTime);
    clearInterval(this.loopTime2);
  }

  setTime = () => {
    const { listData, index, index_box } = this.state;
    let newList = listData.slice(index, index + 6);
    if (index > listData.length - 6) {
      newList = newList.concat(listData.slice(0, index - 3));
    } else {
      // console.log(newList);
    }
    this.setState({
      box: index_box ? 'boxN-2 tableAnimation' : 'boxN tableAnimation',
    });
    setTimeout(() => {
      index === listData.length
        ? this.setState({
            list: newList,
            box: index_box ? 'boxN' : 'boxN-2',
            index: 1,
            index_box: index_box ? false : true,
          })
        : this.setState({
            list: newList,
            box: index_box ? 'boxN' : 'boxN-2',
            index: index + 1,
            index_box: index_box ? false : true,
          });
    }, 1000);
  };
  render() {
    const { list, box, height } = this.state;
    const tableTr = list.map((v, k) => {
      return (
        <tr key={k}>
          <td>{v.id}</td>
          <td>{v.merchantName}</td>
          <td>{v.categoryName}</td>
          <td>{v.componentName}</td>
          <td>{v.createDate}</td>
        </tr>
      );
    });
    return (
      <>
        <Unit height={height}>
          <table className="tablePage" border="1">
            <tbody>
              <tr>
                <th>序号</th>
                <th>单位名称</th>
                <th>类别</th>
                <th>渠道</th>
                <th>创建时间</th>
              </tr>
            </tbody>
          </table>
          <div className="tablePage tablePage2">
            <div className="boxW">
              <div className={box}>
                <table style={{ display: 'block' }}>
                  <tbody style={{ display: 'table', width: '100%' }}>{tableTr}</tbody>
                </table>
              </div>
            </div>
          </div>
        </Unit>
      </>
    );
  }
}

export default RightBottomChart;
