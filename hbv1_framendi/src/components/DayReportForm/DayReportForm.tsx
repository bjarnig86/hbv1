import { Button, Form, Input, message, Modal, Radio, TimePicker } from 'antd';
import React, { useState, useEffect } from 'react';

type Props = {
  child: any;
};

const timeFormat = 'HH:mm';

export const DayReportForm = ({ child }: Props) => {
  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (values: any) => {
    //   setLoading(true);

    console.log(values);
    //   setModal(false);
    //   form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  };

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setModal(false);
  };

  return (
    <>
      <Button
        className="navMenuItem"
        type="primary"
        size="large"
        onClick={showModal}
      >
        Búa til DayReport
      </Button>
      <Modal
        title={`Búa til DayReport um ${child.firstName}`}
        open={modal}
        okText="Submit"
        cancelText="Hætta við"
        okButtonProps={{ htmlType: 'submit' }}
        onOk={form.submit}
        onCancel={handleCancel}
        width={500}
      >
        <Form
          layout="vertical"
          className="loginForm"
          name="login"
          initialValues={{ remember: true }}
          form={form}
          onFinish={handleConfirm}
          onFinishFailed={onFinishFailed}
        >
          <h3>Svefn:</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Form.Item
              style={{ margin: '0 10px' }}
              label="Frá:"
              name="sleepFrom"
            >
              <TimePicker format={timeFormat} />
            </Form.Item>

            <Form.Item label="Til:" name="sleepTo">
              <TimePicker format={timeFormat} />
            </Form.Item>
          </div>

          <Form.Item label="Matarupplýsingar" name="appetite">
            <Radio.Group>
              <Radio.Button value="BAD">Ekki vel</Radio.Button>
              <Radio.Button value="OKAY">Ágætlega</Radio.Button>
              <Radio.Button value="GOOD">Vel</Radio.Button>
              <Radio.Button value="VERY_GOOD">Mjög vel</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Athugasemd" name="comment">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
