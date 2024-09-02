import React from "react";
import { Form, Input, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        `${API_BASE_URL}/update-about`,
        {
          ...values,
          _id: portfolioData.about._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL" rules={[{ required: true, message: 'Please input the Lottie URL!' }]}>
          <Input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name="description1" label="Description 1" rules={[{ required: true, message: 'Please input the first description!' }]}>
          <Input.TextArea placeholder="Description 1" />
        </Form.Item>

        <Form.Item name="description2" label="Description 2" rules={[{ required: true, message: 'Please input the second description!' }]}>
          <Input.TextArea placeholder="Description 2" />
        </Form.Item>

        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    fieldKey={[fieldKey, 'name']}
                    rules={[{ required: true, message: 'Missing skill name' }]}
                  >
                    <Input placeholder="Skill Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'percentage']}
                    fieldKey={[fieldKey, 'percentage']}
                    rules={[{ required: true, message: 'Missing skill percentage' }]}
                  >
                    <Input type="number" placeholder="Percentage" min={0} max={100} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <div className="flex justify-end w-full">
          <Button type="primary" htmlType="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;