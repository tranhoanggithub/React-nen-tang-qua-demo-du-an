//setup State giỏ hàng tren store

const stateGioHang={
    gioHang:[{maSP:1,tenSP:'Sản phẩm mặc định',hinhAnh:'',soLuong:1,gia:1000}]
}

const BaiTapGioHangReducer =(state=stateGioHang,action) =>{

    switch(action.type){
        case'THEM_GIO_HANG':{
            let index=state.gioHang.findIndex(spGH=>spGH.maSP===action.spGioHang.maSP);
            if(index!==-1){
                state.gioHang[index].soLuong+=1;
            }else{
                state.gioHang.push(action.spGioHang)
            }
            //Cập nhập lại state.gioHang
            //SetState
            state.gioHang=[...state.gioHang];
            return{...state};
        };
        case 'XOA_GIO_HANG':{
            let gioHangCapNhap={...state.gioHang};
            //Tìm ra phần tử cần xóa dựa vào  maSP
            let index=gioHangCapNhap.findIndex(spGH=>spGH.maSP===action.maSP)
            if(index!==-1)
            {
                gioHangCapNhap.splice(index,1);
            }
            // Cập nhập lại state giỏ hàng mới để component
            state.gioHang=gioHangCapNhap;
            return {...state}
        };break;
        case 'TANG_GIAM_SO_LUONG':{
            let gioHangCapNhap=[...state.gioHang]
            //Xử lý tăng giảm trên giỏ hàng cập nhập
            let index= gioHangCapNhap.findIndex(spGH=>spGH.maSP=== action.maSP)
            if(index!==-1)
            {
                if(action.tangGiam)
                {
                    gioHangCapNhap[index].soLuong+=1;
                }else{
                    if(gioHangCapNhap[index].soLuong>1){
                    gioHangCapNhap[index].soLuong-=1;
                }else
                {
                    alert('Số lượng tối thiểu là 1')
                }
                }
            }
            // Lấy giá trị giỏ hàng cập nhập gắn vào state gio hang
            state.gioHang=gioHangCapNhap;
            return{...state}
        };break;
        default: return{...state}
    }
   
}

export default BaiTapGioHangReducer;

