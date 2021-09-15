import React, { Component, } from "react";
import "./index.css";
import ThongTinDatGhe from "./thongTinDatGhe";
import DanhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./hangGhe";
export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return DanhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie">
                <div className="bg_movie">
                    <div className="bg_movie_coating"></div>
                    <div className="container-fluid">
                        <div className="row mt-3">

                            <div className="col-8 text-center">
                                <h1 className="text-warning "> Đặt Vé Xem Phim</h1>
                                <h4 className="text-light">Màn Hình</h4>
                                <div className="curtain ">
                                    <div className="screen"></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>

                            <div className="col-4">
                                <h2 className="text-warning mt-4">Danh Sách Ghế Bạn Chọn</h2>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
