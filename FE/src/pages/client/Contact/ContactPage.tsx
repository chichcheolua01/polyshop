import { ChangeEvent, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageRoundedError } from "react-icons/bi";
import { FaRegMoneyBillAlt, FaRegNewspaper } from "react-icons/fa";

import Input from "../../../components/auth/Input";
import Button from "../../../components/client/Button";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendContact = () => {
    alert("Please");
  };

  return (
    <>
      <div className="container md:px-6 bg-gray-100 p-10">
        <section className="border rounded-xl p-5 bg-white">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Liên hệ</h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div className="relative mb-6">
                <Input
                  id="name"
                  type="name"
                  value={name}
                  label="Name"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </div>
              <div className="relative mb-6">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  label="Email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Message
                </label>
              </div>

              <Button label="Gửi" onClick={sendContact} />
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FiPhoneCall size={30} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Hỗ trợ kỹ thuật
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        tranluong460@gmail.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +84 367-370-371
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FaRegMoneyBillAlt size={30} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Câu hỏi bán hàng
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        tranluong460@gmail.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +84 367-370-371
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FaRegNewspaper size={30} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Press</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        tranluong460@gmail.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +84 367-370-371
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <BiMessageRoundedError size={30} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Báo cáo lỗi
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        tranluong460@gmail.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +84 367-370-371
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
