import Card from "./Card";

import { IUser } from "../../../../interface";

type ListCardProps = { currentUser: IUser | null };

const ListCard = ({ currentUser }: ListCardProps) => {
  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        {currentUser &&
          currentUser.cards.map((card) => (
            <Card
              key={card._id}
              name={card.card_holder_name}
              number={card.card_number}
              startDate={card.start_date}
              endDate={card.end_date}
              cvv={card.cvv}
            />
          ))}
      </div>
    </>
  );
};

export default ListCard;
