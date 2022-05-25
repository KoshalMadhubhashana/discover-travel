import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  Avatar,
  Select,
} from "antd";

import {
  FileDoneOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import axios from "axios";
import TextArea from "antd/lib/input/TextArea";

import "./../../common/Styles/Admin.css";
import Api from "./apicountry";

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

const { Option } = Select;

const AdminContact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [nationality, setNationality] = useState("");
  const [nic, setNic] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const onChangeCountry = (e) => {
    setCountry(e);
  };

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
            email,
            nationality,
            homeTown,
            nic,
            phoneNumber,
            country,
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


      <div className="bg-bg-contact mybg top-down">
        <div className="container mx-auto">
          <div className="flex justify-center py-6  gap-28  w-full">
            <div className=" border-2 text-center border-gray-900 contact-bg">
              <div className="mt-4 text-xl font-semibold text-lime-400">
                Contact Numbers
              </div>
              <div className="  justify-center gap-32 px-10 py-10">
                <div className=" text-lg text-white">Official Contact Number</div>
                <div className=" text-lg text-white">071 7076000</div>
              </div>
              <div className="  justify-center gap-32 px-10 py-10">
                <div className=" text-lg text-white">Hotline</div>
                <div className=" text-lg text-white">0111123456</div>
              </div>
            </div>
            <div className=" border-2 text-center border-gray-900 px-32 bg-bg-form bg-cover">
              <div className="mb-10">
                <div className="mt-20 ml-4 flex gap-14">
                  <div className=" flex-row mt-6">
                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="" width="500px"/>
                    <div className=" font-semibold  text-xl">User</div>
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
                          style={{ width: "300px" }}
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
                        name="phone number"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Phone Number!",
                          },
                          {
                            min: 10,
                            message: "Phone Number must be minimum 10 characters.",
                          },
                          { max: 10 },
                        ]}
                        initialValue={phoneNumber}
                    >
                      <Input
                          style={{ width: "300px" }}
                          placeholder="Enter Phone Number"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter Phone Number">
                              <InfoCircleOutlined
                                  style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="number"
                      />
                    </Form.Item>
                    <Form.Item
                        name="nic"
                        label="NIC"
                        rules={[
                          {
                            required: true,
                          },
                          { min: 9, message: "NIC be minimum 10 characters." },
                          { max: 12 },
                        ]}
                        initialValue={nic}
                    >
                      <Input
                          style={{ width: "300px" }}
                          placeholder="Enter NIC"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter NIC">
                              <InfoCircleOutlined
                                  style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setNic(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                          },
                          { type: "email" },
                          { max: 50 },
                        ]}
                        initialValue={email}
                    >
                      <Input
                          style={{ width: "300px" }}
                          placeholder="Enter Email"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter Email">
                              <InfoCircleOutlined
                                  style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                        name="nationality"
                        label="Nationality"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={nationality}
                    >
                      <Input
                          style={{ width: "300px" }}
                          placeholder="Enter Nationality"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter Nationality">
                              <InfoCircleOutlined
                                  style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setNationality(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                    >
                      <Select style={{ width: 300 }} onChange={onChangeCountry}>
                        {Api.map((element) => (
                            <Option value={element}>{element}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                        name="home town"
                        label="Home Town"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={homeTown}
                    >
                      <Input
                          style={{ width: "300px" }}
                          placeholder="Enter Home Town"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter Home Town">
                              <InfoCircleOutlined
                                  style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setHomeTown(e.target.value)}
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
                          style={{ width: "520px" }}
                          placeholder="Enter Message"
                          onChange={(e) => setMessage(e.target.value)}
                          autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <div className="flex ml-40">
                        <button type="primary" htmlType="submit" className="btn mybtn-primary">
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
      </div>
  );
};

export default AdminContact;