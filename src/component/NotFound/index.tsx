import { FunctionComponent } from "react";

import { Result } from "antd";

const NotFound: FunctionComponent = () => {
  return (
    <Result status="404" title="404" subTitle="Opps It seem's you were lost" />
  );
};

export default NotFound;
