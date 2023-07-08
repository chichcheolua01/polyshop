// Import các component
import Card from "./Card";

// Import các interface
import { ICardUser } from "../../../../interface";

// Type để truyền dữ liệu giữa các props
type ListCardProps = { cardUser: ICardUser[] | undefined };

// Khởi tạo component
const ListCard = ({ cardUser }: ListCardProps) => {
  return (
    <>
      <div className="bg-white p-5 rounded-xl">
        {cardUser ? (
          cardUser.length > 0 ? (
            <div>
              <div className="text-center p-5">
                <h4 className="text-xl font-semibold">
                  Danh sách thẻ ngân hàng
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cardUser.map((card) => (
                  <Card key={card._id} card={card} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center p-5">
                <h4 className="text-xl font-semibold">Thêm thẻ ngân hàng</h4>
              </div>

              <div className="w-full flex justify-center">
                <div className="w-full md:w-1/2">
                  <Card add />
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="text-center">Bạn chưa đăng nhập</div>
        )}
      </div>
    </>
  );
};

export default ListCard;
