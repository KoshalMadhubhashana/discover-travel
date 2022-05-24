import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin, Tooltip, notification } from "antd";
import { NavLink, useParams } from "react-router-dom";

import { FileDoneOutlined, InfoCircleOutlined } from "@ant-design/icons";

import axios from "axios";

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

const UpdatePackage = () => {
  const [loader, setLoader] = useState(false);
  const [itype, setItype] = useState("");
  const [iDescription, setIdescription] = useState("");
  const [iDate, setIdate] = useState("");
  const [iCatergory, setIcatergory] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await axios
        .get(`/insuarance/get/${id}`)
        .then((res) => {
          setItype(res.data.itype);
          setIdescription(res.data.iDescription);
          setIdate(res.data.iDate);
          setIcatergory(res.data.iCatergory);
        })
        .catch((err) => alert(err));
    };
    getData();
    setTimeout(() => {
      setLoader(!loader);
    }, 2000);
  }, []);


  const employeeHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/insuarance/update/${id}`,
        {
          itype,
          iDescription,
          iDate,
          iCatergory,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully Update details 😘",
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
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "150px" }} />
        </center>
      ) : (
        <div className=" mt-20 -translate-x-52  p-16 ">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => employeeHandler("top")}
          >
            <Form.Item
              name="insuarance type"
              label="Insuarance Type"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={itype}
            >
              <Input
                style={{ width: "60%" }}
                placeholder="Enter Insuarance Type"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Insuarance Type">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setItype(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="insuarance description"
              label="Insuarance Description"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={iDescription}
            >
              <Input
                style={{ width: "60%" }}
                placeholder="Enter Insuarance Description"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Insuarance Description">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setIdescription(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="insuarance data"
              label="Insuarance Date"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={iDate}
            >
              <Input
                style={{ width: "60%" }}
                placeholder="Enter Insuarance Date"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={[
                  <Tooltip title="Please Enter Insuarance Date">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                onChange={(e) => setIdate(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="catergory"
              label="Insuarance Catergory"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={iCatergory}
            >
              <Input
                style={{ width: "60%" }}
                placeholder="Enter Insuarance Catergory"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={[
                  <Tooltip title="Please Enter Insuarance Catergory">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                onChange={(e) => setIcatergory(e.target.value)}
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <div className="flex ml-80">
                <Button type="primary" htmlType="submit">
                  {loading ? (
                    <>
                      <Spin /> Updating in Progess...
                    </>
                  ) : (
                    "Update"
                  )}
                </Button>{" "}
                &nbsp;&nbsp;
                <NavLink to="/adminpage">
                  <Button type="primary">Back</Button>{" "}
                </NavLink>
              </div>
            </Form.Item>
          </Form>
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default UpdatePackage;
