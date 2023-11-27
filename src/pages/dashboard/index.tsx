import { FunctionComponent } from 'react';

import DataTable from 'react-data-table-component';

import {
  RECENT_ADDED_CONTACT_COLUMNS,
  RECENT_ADDED_CONTACT_DATA,
} from '../../constants/dashboardInfo';

import { PieChart, Pie, Tooltip, Cell } from 'recharts';

import { Progress } from 'antd';
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';

import { CHART_DATA } from '../../constants/dashboardInfo';

import {
  DashboardContainer,
  DashboardCard,
  DashboardInfoContainer,
  DashboardInfoWrapper,
} from './styled.dashboard';

interface ITypes {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
  index: any;
}
const Dashboard: FunctionComponent = () => {
  const COLORS = ['#0088FE', '#ff0000', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: ITypes) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <DashboardContainer>
      <DashboardCard>
        <div>
          <h5>Number of added contacts</h5>
          <p>230</p>
          <p>
            <UserAddOutlined />
          </p>
        </div>
        <div>
          <h5>Number of deleted contacts</h5>
          <p>30</p>
          <p>
            <UserDeleteOutlined />
          </p>
        </div>
        <div>
          <h5>Number of unsaved contacts</h5>
          <p>30</p>
          <p>
            <UserDeleteOutlined />
          </p>
        </div>
      </DashboardCard>
      <DashboardInfoContainer>
        <DashboardInfoWrapper>
          <div className="info__wrapper_left">
            <div>
              <DataTable
                title="Recent Added Contacts"
                columns={RECENT_ADDED_CONTACT_COLUMNS}
                data={RECENT_ADDED_CONTACT_DATA}
              />
            </div>
          </div>
          <div className="info__wrapper_right">
            <div style={{ height: '70vh' }}>
              <div style={{textAlign: 'center'}}>
                <PieChart width={310} height={300}>
                  <Pie
                    data={CHART_DATA}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {CHART_DATA.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>

              <div style={{ textAlign: 'center' }}>
                <Progress type="circle" percent={75} />

                <div className="text_info">
                  <h4>Total Contacts by user</h4>
                </div>
              </div>
            </div>
          </div>
        </DashboardInfoWrapper>
      </DashboardInfoContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
