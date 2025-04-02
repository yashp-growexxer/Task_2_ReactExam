import { StopOutlined } from "@ant-design/icons";
import { Flex } from "antd";

function Step({ title, message , OnClick }) {
  return (
    <div onClick={OnClick}>
      <Flex gap={"middle"} wrap="nowrap">
      <StopOutlined />
        {title}
        {message}
      </Flex>
    </div>
  );
}

export default Step;
