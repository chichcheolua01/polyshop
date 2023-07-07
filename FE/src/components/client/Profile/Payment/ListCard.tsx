import Card from "./Card";

import { ICardUser } from "../../../../interface";

type ListCardProps = { cardUser: ICardUser[] | undefined };

const ListCard = ({ cardUser }: ListCardProps) => {
  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-xl">
        {cardUser &&
          cardUser.map((card) => <Card key={card._id} card={card} />)}
      </div>
    </>
  );
};

export default ListCard;
