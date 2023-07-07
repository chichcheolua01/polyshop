import { useState } from "react";
import { Checkbox } from "antd";

import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ICardUser } from "../../../../interface";

type CardProps = {
  card: ICardUser;
};

const Card = ({ card }: CardProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const [newName, setNewName] = useState(card.card_holder_name || "");
  const [newNumber, setNewNumber] = useState(card.card_number || "");
  const [newStartDate, setNewStartDate] = useState(card.start_date || "");
  const [newEndDate, setNewEndDate] = useState(card.end_date || "");
  const [newCvv, setNewCvv] = useState(card.cvv || "");
  const [newMain, setNewMain] = useState(card.main || false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setNewMain(e.target.checked);
  };

  return (
    <>
      <div className="h-auto p-5 w-full m-auto rounded-xl relative text-white transition-transform transform hover:scale-110">
        {isEdit ? (
          <div className="absolute top-8 right-10">
            <Checkbox onChange={onChange} defaultChecked={newMain} />
          </div>
        ) : null}

        <div
          className={`bg-cover bg-fixed rounded-xl p-10
          ${
            card.main
              ? "bg-[url(/images/card/card-1.png)]"
              : "bg-[url(/images/card/card-2.png)]"
          }
          `}
        >
          <div className="flex justify-between">
            <div>
              <p className="font-light">Name</p>
              {isEdit ? (
                <input
                  type="text"
                  value={newName}
                  className="text-white outline-none bg-gradient-to-r from-[#335af3] to-[#487cf5] tracking-widest font-medium"
                  onChange={(e) => setNewName(e.target.value)}
                />
              ) : (
                <p className="font-medium tracking-widest">
                  {card.card_holder_name}
                </p>
              )}
            </div>

            <img className="w-14 h-14" src="/images/card/master-card.png" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            {isEdit ? (
              <input
                type="number"
                value={newNumber}
                className="text-white outline-none bg-gradient-to-r from-[#3054f2] to-[#4476f5] tracking-widest font-medium"
                onChange={(e) => setNewNumber(e.target.value)}
              />
            ) : (
              <p className="font-medium tracking-widest">{card.card_number}</p>
            )}
          </div>
          <div className="pt-6 pr-6">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="font-light text-xs">Valid</p>
                {isEdit ? (
                  <input
                    type="text"
                    value={newStartDate}
                    className="text-white outline-none bg-gradient-to-r from-[#2f53f2] to-[#3b67f3] font-medium w-full tracking-widest"
                    onChange={(e) => setNewStartDate(e.target.value)}
                  />
                ) : (
                  <p className="font-medium tracking-widest">
                    {card.start_date}
                  </p>
                )}
              </div>

              <div>
                <p className="font-light text-xs">Expiry</p>
                {isEdit ? (
                  <input
                    type="text"
                    value={newEndDate}
                    className="text-white outline-none bg-gradient-to-r from-[#3a65f4] to-[#4577f5] w-full tracking-widest font-medium"
                    onChange={(e) => setNewEndDate(e.target.value)}
                  />
                ) : (
                  <p className="font-medium tracking-widest">{card.end_date}</p>
                )}
              </div>

              <div>
                <p className="font-light text-xs">CVV</p>
                {isEdit ? (
                  <input
                    type="number"
                    value={newCvv}
                    className="text-white outline-none bg-gradient-to-r from-[#4678f6] to-[#5c92f8] tracking-widest font-medium w-full"
                    onChange={(e) => setNewCvv(e.target.value)}
                  />
                ) : (
                  <p className="font-medium tracking-widest">{card.cvv}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {isEdit ? (
          <div className="absolute bottom-8 right-10 flex justify-end gap-5">
            <button
              className="mt-3 hover:text-rose-500"
              onClick={() => alert("Sửa")}
            >
              Lưu
            </button>

            <button className="mt-3 hover:text-rose-500" onClick={toggleEdit}>
              Hủy
            </button>
          </div>
        ) : (
          <div className="absolute bottom-8 right-10 flex justify-end gap-5">
            <button className="mt-3 hover:text-rose-500" onClick={toggleEdit}>
              Sửa
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
