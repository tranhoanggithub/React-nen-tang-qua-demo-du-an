import React, { Component } from "react";
import DemoProps from "./Props/DemoProps";
import ProductList from "./Props/ProductList";
import dataJson from "./Data/data.json";
import DanhSachSanPham from "./Props/DanhSachSanPham";
import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";
import CartModal from "./Props/ExerciseCart/CartModal";
import ProductListEXC from "./Props/ExerciseCart/ProductListEXC";
import ExerciseCart from "./Props/ExerciseCart/ExerciseCart";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapRedux/font/BaiTapGameXucXac";
import BaiTapOanTuXi from "./BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi";
import BaiTapBookingYicket from "./BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket";
import BaiTapBookingTicket from "./BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket";
import DemoPureComponent from "./DemoPureComponent/DemoPureComponent";
import ContextDemo from "./ContextDemo/ContextDemo";


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <DemoProps/> */}
        {/* <div className="row">
          <div className="col-4">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </a>
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Messages
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </a>
            </div>
          </div>
          <div className="productList col-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <ProductList arrProduct={dataJson} />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                Profile
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                Message
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                pills
              </div>
            </div>
          </div>
        </div> */}
        {/* <DanhSachSanPham/> */}
        {/* <ExerciseCarStore/>  */}
        {/* <ExerciseCart/> */}
        {/* <BaiTapGioHangRedux/> */}
        {/* <BaiTapGameXucXac/> */}
        {/* <BaiTapOanTuXi/> */}
        {/* <BaiTapBookingTicket/> */}
        {/* <DemoPureComponent/> */}
        <ContextDemo/>
        
      </div>
    );
  }
}
