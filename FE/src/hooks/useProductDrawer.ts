// Import các thư viện
import { create } from "zustand";
// Type để truyền dữ liệu giữa các props

interface ProductDrawerStore {
  isOpen: boolean;
  isEdit: boolean;
  onOpen: (isEdit: boolean) => void;
  onClose: () => void;
}

// Khởi tạo hook
const useProductDrawer = create<ProductDrawerStore>((set) => ({
  isOpen: false,
  isEdit: false,
  onOpen: (isEdit) => set({ isOpen: true, isEdit }),
  onClose: () => set({ isOpen: false }),
}));

export default useProductDrawer;
