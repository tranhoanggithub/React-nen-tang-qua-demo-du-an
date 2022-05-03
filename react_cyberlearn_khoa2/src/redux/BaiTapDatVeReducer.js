const stateDefault={
    danhSachGheDangDat:[
        {soGhe:"A1",gia:1000}
    ]
}

const BaiTapDatVeReducer =(state = stateDefault,action)=>{
    switch(action.type){
        case 'DAT_GHE':{
            let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat];
            let index =danhSachGheDangDatUpdate.findIndex(gheDangDat=>
                gheDangDat.soGhe===action.ghe.soGhe);

            if(index !==-1){//Ghế đang đăt đã có trong mảng khi người dùng click=>remove đi
                danhSachGheDangDatUpdate.splice(index,1);
            }else{//Ghế đang đăt đã có trong mảng khi người dùng click=>remove đi=>push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhập lại state=>giao diện render lại
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state}
        }
        default:return{...state}
    }
}

export default BaiTapDatVeReducer;