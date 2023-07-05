type CardProps = {
  name: string;
  number: number;
  startDate: string;
  endDate: string;
  cvv: number;
};

const Card = ({ name, number, startDate, endDate, cvv }: CardProps) => {
  return (
    <>
      <div className="h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="/images/card-1.png"
        />

        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest">{name}</p>
            </div>

            <img className="w-14 h-14" src="/images/master-card.png" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <p className="font-medium tracking-more-wider">{number}</p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">
                  {startDate}
                </p>
              </div>

              <div className="">
                <p className="font-light text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm">{endDate}</p>
              </div>

              <div className="">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm">{cvv}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
