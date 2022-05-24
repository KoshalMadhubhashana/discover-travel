import React, { useState } from "react";
import { Form, Input, Button, Spin, Tooltip, notification, Avatar } from "antd";

import {
  FileDoneOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import axios from "axios";
import TextArea from "antd/lib/input/TextArea";

import "./../../common/Styles/insurance/Admin.css"
import "./../../common/Styles/insurance/insurance.css";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AdminContact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const userHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "/admin/create",
        {
          name,
          message,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Send Message 😘",
          placement,
        });
        form.resetFields();
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      form.resetFields();
      setLoading(false);
    }
  };

  const [form] = Form.useForm();
  return (
    <div className="container mx-auto top-down">
      <div className="flex justify-center mt-8 gap-28 mb-10 w-full" style={{flexDirection: "row"}}>
        <div className="mycard mybg text-center">
          <div className="mt-4 text-xl font-semibold text-lime-400">Contact Numbers</div>
          <div className="  justify-center gap-32 px-10 py-10">
            <div className=" text-lg">Official Contact Number</div>
            <div className=" text-lg">071 7076000</div>
          </div>
          <div className="  justify-center gap-32 px-10 py-10">
            <div className=" text-lg ">Hotline</div>
            <div className=" text-lg ">0111123456</div>
          </div>
        </div>
        <div className="text-center px-32 mycard mybg">
          <div className="mb-10">
            <div className="mt-20 flex">
              <div className=" flex-row mt-6" style={{width:"150px"}}>
                <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="" width="500px"/>
                <div className=" font-semibold text-xl">User</div>
              </div>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={() => userHandler("top")}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue={name}
                >
                  <Input
                    style={{ width: "240px" }}
                    placeholder="Enter Name"
                    prefix={
                      <FileDoneOutlined className="site-form-item-icon" />
                    }
                    suffix={
                      <Tooltip title="Please Enter Name">
                        <InfoCircleOutlined
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      </Tooltip>
                    }
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue={message}
                >
                  <TextArea
                    style={{ width: "400px" }}
                    placeholder="Enter Message"
                    onChange={(e) => setMessage(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <div className="flex ml-40">
                    <button type="primary" className="btn mybtn-primary" htmlType="submit">
                      {loading ? (
                        <>
                          <Spin /> Sending...
                        </>
                      ) : (
                        "Send"
                      )}
                    </button>{" "}
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
