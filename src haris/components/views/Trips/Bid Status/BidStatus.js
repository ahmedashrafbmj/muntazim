import { Radio, Space, Tabs,Tag,Table  } from 'antd';
import React, { useState }  from 'react';
import 'antd/dist/antd.css'; 
import styles from "./BidStatus.module.css"
import './bidstatus.css'
const { TabPane } = Tabs;
const columns = [
  {
    title: 'UserName',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Budget',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Your Bid',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>67,000</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: ['Clent'],
    age: `sdjfhuhusdhusdhufhu`,
    address: "80,000",
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Clent',
    age: `sdjfhuhusdhusdhufhu`,
    address: '80,000',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Clent',
    age: `sdjfhuhusdhusdhufhu`,
    address: '80,000',
    tags: ['67,000'],
  },
];

const BidStatus = () => {
  const [tabPosition, setTabPosition] = useState('left');
  

 

  return (
    <>
      <h1 className={styles.h1}>Bid Status</h1>
    <div className={styles.tabTab}>
      <Tabs className='tb' tabPosition={tabPosition} > 
        <TabPane tab="All" key="1" >
        <Table className={styles.table} columns={columns}  dataSource={data} />
        </TabPane>
        <TabPane tab="Rejected" key="2">
        <Table columns={columns} style={{background:"red"}}  dataSource={data}  />        </TabPane>
        <TabPane tab="Accepted" key="3">
        <Table columns={columns}  dataSource={data}/>        </TabPane>
        <TabPane tab="Pending" key="4">
        <Table columns={columns}  dataSource={data} />        </TabPane>
      </Tabs>
      </div>
    </>
  );
};

export default BidStatus;