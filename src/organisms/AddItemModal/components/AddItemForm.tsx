import React, { FC } from "react";

import * as yup from "yup";

import { FormikInput } from "molecules/FormikInput";
import { Formik, FormikHelpers, Form } from "formik";

const validationSchema = yup.object().shape({
  desc: yup.string().required("required"),
  name: yup.string().required("required"),
});

const defaultValues = {
  name: "",
  desc: "",
};

export type AddItemProps = {
  onSubmit: (
    values: typeof defaultValues,
    formikHelpers?: FormikHelpers<any>
  ) => void;
};

export const AddItem: FC<AddItemProps> = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={defaultValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ dirty, values }) => (
          <Form className="space-y-4 ">
            <FormikInput type="text" name="name" label="Name" />

            <FormikInput type="text" name="desc" label="Description" />

            <div className={`flex pt-5 justify-end `}>
              <button
                type="submit"
                className="flex justify-center items-center  text-xs font-medium rounded shadow-sm  hover:border-primary border-2 font-bold px-4  py-2  rounded-md hover:font-bold  focus:outline-none text-sm px-4 px-16  py-3 font-bold bg-primary text-white "
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
