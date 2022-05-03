const stateDefault={
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./img/gameOanTuXi/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh:'./img/gameOanTuXi/bua.png',datCuoc:true},
        {ma:'bao',hinhAnh:'./img/gameOanTuXi/bao.png',datCuoc:false},

    ],
    ketQua:"I'm iron man,i love you 3000",
    soBanThang:1,
    soBanChoi:1,
    computer:{ma:'bua', hinhAnh:'./img/gameOanTuXi/bua.png'},

}
const BaiTapOanTuXiReducer = (state= stateDefault, action)=>{
    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
            //Reset mang cược
            let mangCuocUpdate =[...state.mangDatCuoc];
            //Tạo ra mảng cược mới từ mảng cược cũ và action maCuoc do người dừng truyền lên
            mangCuocUpdate=mangCuocUpdate.map((item,index)=>{
                if(item.ma=== action.maCuoc){
                    return {...item,datCuoc:true}
                }
                if(item.ma===action.maCuoc){
                    return{...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            state.mangDatCuoc=mangCuocUpdate;
            // state.mangDatCuoc= mangCuocUpdate;

            // console.log('mangCuocUpdate',mangCuocUpdate);
            // //Tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó
            // let index  =mangCuocUpdate.findIndex(qc=>qc.ma===action.maCuoc);
            // if(index!==-1){
            //     mangCuocUpdate[index].datCuoc= true;
            // }

            // state.mangDatCuoc=mangCuocUpdate;
            return{...state}
            console.log(action);

        }
        case 'RAN_DOM':{
            let soNgauNhien = Math.floor(Math.random()*3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer=quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME':
            let player =state.mangDatCuoc.find(item=>item.datCuoc===true);
            let computer = state.computer;

            switch(player.ma){}
            return {...state}
        default:return{...state}
    }
}

export default BaiTapOanTuXiReducer;