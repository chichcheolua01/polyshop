import { Drawer } from "antd";

type CartDrawnProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawn = ({ isOpen, onClose }: CartDrawnProps) => {
  return (
    <>
      <div>
        <Drawer
          title="Giỏ hàng"
          placement="right"
          onClose={onClose}
          open={isOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
};

export default CartDrawn;
