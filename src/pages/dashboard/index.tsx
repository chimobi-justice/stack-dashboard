import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";

import { CHART_DATA } from "../../constants/dashboardInfo";

import {
  DashboardContainer,
  DashboardCard,
  DashboardInfoContainer,
  DashboardInfoWrapper,
} from "./styled.dashboard";

const Dashboard: FunctionComponent = () => {
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
      </DashboardCard>
      <DashboardInfoContainer>
        <DashboardInfoWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={CHART_DATA}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="numberOfConatact"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </DashboardInfoWrapper>
      </DashboardInfoContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
