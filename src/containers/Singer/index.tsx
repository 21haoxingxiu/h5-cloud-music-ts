import React, {  useEffect } from "react";
import { Container } from "./style";

function Singer(props:any) {

  // useEffect(() => {
  //   const id = props.match.params.id
  // },[])

  return (
    <Container>
      <div>singer2423432</div>
    </Container>
  )

}

// 将ui组件包装成容器组件
export default React.memo(Singer)