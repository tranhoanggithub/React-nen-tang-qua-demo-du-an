const stateDefault={
    taiXiu:false,//True:là tài(từ 3->11) ,false là xỉu(12<)
    mangXucXac:[
        {ma:1,hinhAnh:require('./../BaiTapRedux/assets/1.png')},
        {ma:1,hinhAnh:require('./../BaiTapRedux/assets/1.png')},
        {ma:1,hinhAnh:require('./../BaiTapRedux/assets/1.png')},
    ],
    soBanThang:0,
    tongSoBanChoi:0
}

const BaiTapGameXucXacReducer =(state=stateDefault,action)=>{
    switch(action.type)
    {
        case 'DAT_CUOC':
            state.taiXiu=action.taiXiu;
            return{...state}


        case'PLAY_GAME':{
            //Bước 1 xử lý ramdom xúc xắc
            let mangXucXacNgauNhien=[];
            for (let i=0;i<3;i++){
                //Mỗi lần lặp ramdom ra số ngẫu nhiên từ 1->6
                let soNgauNhien= Math.floor(Math.random()*6)+1;
                //Tạo ra đối tượng xúc xắc từ số ngẫu nhiên
                let XucXacNgauNhien ={ma:soNgauNhien,hinhAnh:`./../BaiTapRedux/assets/$(soNgauNhien).png`};
                //Push vào màn xúc xắc ngẫu nhiên
                mangXucXacNgauNhien.push(XucXacNgauNhien);
            }
            //Gán state mangXucXac= mangXucXacNgauNhien
            state.mangXucXac=mangXucXacNgauNhien;
            //Xử lý tăng bàn chơi
            state.tongSoBanChoi+=1;
            //Xử lý số bàn thắng
            let tongSoDiem=mangXucXacNgauNhien.reduce((tongDiem,XucXac,index)=>
            {
                return tongDiem+=XucXac.ma;
            },0);
            //Xét điều liện để người dùng thắng game    
            if((tongSoDiem>11&&state.taiXiu===true)||(tongSoDiem<=11&& state.taiXiu===false)){
                state.soBanThang+=1;

            }
            return {...state};
           
        }
        default:return{...state}
    }
}

export default BaiTapGameXucXacReducer;