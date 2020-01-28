import React from "react";
import { Button } from 'antd';

const ScrollButton = (props) => {
    console.log(props);
  return (
    <div>
        <Button
            {...props}
            size=""
            type="primary"
            style={{ maxWidth: 275 }}
        >
        LINK
      </Button>
    </div>
  );
}
export default ScrollButton;
