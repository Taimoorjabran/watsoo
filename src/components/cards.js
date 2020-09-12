import React from 'react';
import { Row, Col } from 'antd';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default function DataCard() {
  return (
    <div>
      <Row justify="center" align="top">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
      </Row>
    </div>
  )
}
