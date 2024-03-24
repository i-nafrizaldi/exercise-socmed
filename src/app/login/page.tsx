"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

import FormInput from "@/components/forms/FormInput";
import { useFormik } from "formik";
import { LoginValidationSchema } from "./schemas/LoginValidationSchema";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import axios from "axios";
import { appConfig } from "../../utils/config";

const Login: React.FC = () => {
  const { baseUrl } = appConfig;
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: LoginValidationSchema,
      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/user?email=${values.email}&password=${values.password}`,
        );
        console.log(data);

        // dispatch(
        //   loginAction({
        //     id: 1,
        //     name: "budi",
        //     email: "budi@mail.com",
        //     isVerify: true,
        //   }),
        // );
      },
    });
  return (
    <main className="container mx-auto">
      <div className="flex justify-center">
        <Card className="w-[450px] rounded-lg">
          <CardHeader>
            <CardTitle className="mb-5 text-center text-3xl text-primary">
              Welcome to Sosmek
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* EMAIL */}
                <FormInput
                  name="email"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="email"
                  type="email"
                  value={values.email}
                />

                {/* PASSWORD */}
                <FormInput
                  name="password"
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="password"
                  type="password"
                  value={values.password}
                />
              </div>
              <Button className="mt-6 w-full" type="submit">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;
