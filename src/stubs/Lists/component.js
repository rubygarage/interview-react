import React from 'react';
import { Layout, Row, Col, Card, Typography, Modal, Pagination, notification } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { range } from 'lodash';

import Header from '../Header';
import CreateListModal from '../CreateListModal';

const showNotification = () => {
  notification['error']({
    message: 'Remove list',
    description: 'Oops, something went wrong',
  });
};

const showModal = () => {
  Modal.confirm({
    title: 'Do you want to delete list?',
    onOk() { showNotification() },
    onCancel() {},
  });
};

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalVisible: false };

    this.showModal = () => {
      this.setState({ modalVisible: true });
    };

    this.hideModal = () => {
      this.setState({ modalVisible: false });
    };
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row>
            <Col offset={2} span={20}>
              <div className="top-margin">
                <Typography.Title>
                  My Lists <PlusOutlined onClick={this.showModal} />
                </Typography.Title>
              </div>
            </Col>
          </Row>
          {/* <Row type="flex" justify="center">
            <Col>No results</Col>
          </Row> */}
          {/* <Row type="flex" justify="center">
            <Col>
              <Typography.Text type="danger">
                Oops, something went wrong, try again
              </Typography.Text>
            </Col>
          </Row> */}
          <Row
            gutter={8}
            type="flex"
            offset={2}
          >
            {range(10).map(index => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 8 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <Card
                  hoverable
                  className="top-margin"
                  actions={[<DeleteOutlined onClick={showModal} />]}
                >
                  <Typography.Title level={4}>
                    List name
                    {index}
                  </Typography.Title>
                  Description
                </Card>
              </Col>
            ))}
          </Row>
          <Row
            type="flex"
            justify="center"
          >
            <Col>
              <Pagination
                defaultCurrent={1}
                total={50}
                className="pagination"
              />
            </Col>
          </Row>
        </Layout.Content>
        <Modal
          visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    );
  }
}

export default Lists;
