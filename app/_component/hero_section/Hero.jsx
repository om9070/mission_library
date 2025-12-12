// 'use client'
// import React, { useState } from 'react'
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { toast } from 'react-toastify';


// export default function Hero() {
//   const [isOpen, setIsOpen] = useState(false);
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     className: "",
//     fatherName: "",
//     amount: "",
//     paymentId: "",
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string()
//       .min(10, "Must be 10 digits")
//       .max(10, "Must be 10 digits")
//       .required("Phone is required"),
//     address: Yup.string().required("Address is required"),
//     className: Yup.string().required("Class is required"),
//     fatherName: Yup.string().required("Father's name is required"),
//     amount: Yup.number().required("Amount is required"),
//     paymentId: Yup.string().required("Payment ID is required"),
//   });

//   const handleSubmit = async (values, { resetForm }) => {
//     try {

//       console.log("Form Submitted:", values);

//       // API Call
//       await fetch("/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });

//       resetForm();
//       toast("Form Submitted Successfully!");
//       setIsOpen(false)
//     } catch (error) {
//       toast.error(error.message)
//     }
//   };

//   return (
//     <>
//       <section className="bg-white dashboard lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
//         <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
//           <div className="mx-auto  text-center mt-6">
//             <h1 className="text-4xl font-serif  sm:text-8xl  title">
//               Welcome to
//               <strong className="text-indigo-600"> Mission </strong>
//               Library
//             </h1>

//             <p className="mt-3 text-xl text-pretty text-yellow-700 sm:text-2xl dark:text-red-500 bg-amber-50 rounded-2xl">
//               Mission Library – Empowering Students for Competitive Success  
//             </p>

//             <div className="mt-4 flex justify-center gap-4 sm:mt-6" onClick={() => setIsOpen(true)}>
//               <a
//                 className="inline-block rounded border px-3 py-1.5 border-indigo-600 bg-indigo-600 sm:px-5 sm:py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
//                 href="#"
//               >
//                 Apply Online
//                 <spam className="text-amber-300 px-2">(Competitive examination)</spam>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>


//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center top-10 z-10">
//           <div className="bg-white p-6 rounded w-[500px]">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               Register here for Mission Library
//             </h2>

//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {() => (
//                 <Form>
//                   {/* TWO COLUMN GRID */}
//                   <div className="grid grid-cols-2 gap-4">
//                     {Object.keys(initialValues).map((key) => (
//                       <div key={key}>
//                         <Field
//                           name={key}
//                           placeholder={key}
//                           className="border p-2 w-full rounded-xl"
//                         />
//                         <ErrorMessage
//                           name={key}
//                           component="p"
//                           className="text-red-500 text-xs"
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     type="submit"
//                     className="p-2 bg-green-600 text-white w-full rounded-xl mt-4"
//                   >
//                     Submit
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                     className="p-2 bg-gray-300 w-full mt-2 rounded-xl"
//                   >
//                     Cancel
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>

//       )}
//     </>
//   )
// }



'use client'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false)



  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    className: "",
    fatherName: "",
    amount: "",
    paymentId: "",
    dob: "",        // NEW
    gender: "",     // NEW
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().min(10).max(10).required("Phone is required"),
    address: Yup.string().required("Address is required"),
    className: Yup.string().required("Class is required"),
    fatherName: Yup.string().required("Father's name is required"),
    amount: Yup.number().required("Amount is required"),
    paymentId: Yup.string().required("Payment ID is required"),
    dob: Yup.string().required("DOB is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Form Submitted:", values);
      setLoader(true)
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      resetForm();
      toast("Form Submitted Successfully!");
      setIsOpen(false);
      setLoader(false)
    } catch (error) {
      toast.error(error.message);
      setLoader(false)

    }
  };

  return (
    <>
      <section className="bg-white dashboard lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16">
          <div className="mx-auto text-center mt-6">
            <h1 className="text-3xl font-serif sm:text-8xl title">
              Welcome to
              <strong className="text-indigo-600"> Mission </strong>
              Library
            </h1>

            <p className="mt-3 text-sm text-yellow-700 bg-amber-50 rounded-2xl sm:text-xl">
              Mission Library – Empowering Students for Competitive Success
            </p>

            <div
              className="mt-4 flex justify-center"
              onClick={() => setIsOpen(true)}
            >
              <p className="px-5 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 cursor-pointer">
                Apply Online
                <span className="text-amber-300 px-2">(Competitive examination)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center top-10 z-10">
          <div className="bg-white p-6 rounded w-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Register here for Mission Library
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  {/* 2 COLUMN GRID */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* AUTO FIELDS */}
                    {[
                      "name",
                      "email",
                      "phone",
                      "address",
                      "className",
                      "fatherName",
                      "amount",
                      "paymentId",
                    ].map((key) => (
                      <div key={key}>
                        <Field
                          name={key}
                          placeholder={key}
                          className="border p-2 w-full rounded-xl"
                        />
                        <ErrorMessage
                          name={key}
                          component="p"
                          className="text-red-500 text-xs"
                        />
                      </div>
                    ))}

                    {/* DOB */}
                    <div>
                      {/* <label className="text-sm">Date of Birth</label> */}
                      <Field
                        type="date"
                        name="dob"
                        className="border p-2 w-full rounded-xl"
                      />
                      <ErrorMessage
                        name="dob"
                        component="p"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    {/* GENDER */}
                    <div>
                      {/* <label className="text-sm">Gender</label> */}
                      <Field
                        as="select"
                        name="gender"
                        className="border p-2 w-full rounded-xl"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="p"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className="col-span-2 text-center">
                      <Image
                        src="/qrcode.jpeg"
                        alt="Preview"
                        width={60}
                        height={60}
                        className="w-24 h-24 mt-2 rounded border"
                      />
                    </div>
                  </div>

                  {loader ?
                    <div className="liquid-loader">
                      <div className="loader-track">
                        <div className="liquid-fill"></div>
                      </div>
                    </div>
                    : <button
                      type="submit"
                      className="p-2 bg-green-600 text-white w-full rounded-xl mt-4 cursor-pointer"
                    >
                      Submit
                    </button>}

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-gray-300 w-full mt-2 rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
