import { Button, Form, Input } from "antd";
import React from "react";
import apiCaller from "../../api/apiCaller";
import { authApi } from "../../api/authApi";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    const errorHandler = (error) => {
      console.log("Fail: ", error);
    };
    const response = await apiCaller({
      request: authApi.login(data),
      errorHandler,
    });

    if (response) {
      message.success("Login successfully");
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate(ROUTE.DASHBOARD, {
        state: { id: response.data?._id, access_token: response.access_token },
      });
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-2 shadow-xl  bg-white rounded-3xl">
          <div className="col-span-1 py-7 px-10">
            <p className="text-6xl font-bold text-black">Login ✌️</p>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                className="mt-5"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  { type: "email", message: "Please input a valid email!" },
                ]}
              >
                <Input className="h-12 rounded-3xl" placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input className="h-12 rounded-3xl" placeholder="Password" />
              </Form.Item>
              <p className="text-right hover:underline cursor-pointer">
                Forgot Password?
              </p>
              <Form.Item className="mb-0 mt-6">
                <Button
                  className="bg-[#CA89DB] text-2xl text-white font-bold w-full h-12 rounded-3xl"
                  type="submit"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-span-1 bg-[#CA89DB] p-7 rounded-e-3xl">
            <img src="/login.jpg" className=" h-96 rounded-2xl" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
