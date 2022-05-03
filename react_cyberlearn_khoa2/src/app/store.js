import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from '../redux/BaiTapXucXacReducer'
import BaiTapOanTuXiReducer from '../redux/BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from '../redux/BaiTapDatVeReducer'

export default configureStore({//store tổng của ứng dụng
  reducer: {
    stateGioHang:BaiTapGioHangReducer,//state giỏ hàng,
    BaiTapGameXucXacReducer:BaiTapGameXucXacReducer, //state Bài tập game xúc xắc
    BaiTapOanTuXiReducer:BaiTapOanTuXiReducer, //state Bài tập oẳn tù xì
    BaiTapDatVeReducer:BaiTapDatVeReducer//state bài tập đặt vé
    
  }
})