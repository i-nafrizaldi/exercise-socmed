"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { appConfig } from "@/utils/config";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React from "react";
import { toast, Toaster } from "sonner";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import { Divide } from "lucide-react";
import FormInput from "@/components/forms/FormInput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },

      validationSchema: RegisterValidationSchema,

      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );
        if (data.length) {
          return toast.error("email alredy exist");
        }

        await axios.post(baseUrl + "/users", {
          name: values.name,
          email: values.email,
          password: values.password,
          isVerify: false,
        });

        toast.success("register success");
        router.push("/login");

        // console.log("ini data dari API" + data);
      },
    });
  return (
    <main className="container mx-auto">
      <div className="flex justify-center">
        <Card className="w-[450px] rounded-lg">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary mb-5">
              Welcome to Sosmek
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <FormInput
                  name="name"
                  error={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="name"
                  type="text"
                  value={values.name}
                />

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
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
