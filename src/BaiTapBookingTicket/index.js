import React, { Component } from "react";
import "./index.css";
import ThongTinDatGhe from "./thongTinDatGhe";

export default class BaiTapBookingTicket extends Component {
    render() {
        return (
            <div className="bookingMovie">
                <div className="bg_movie">
                    <div className="bg_movie_coating"></div>
                    <div className="container-fluid">
                        <div className="row mt-3">

                            <div className="col-8 text-center">
                                <h1 className="text-warning display-4 "> Đặt Vé Xem Phim</h1>
                                <h2 className="text-light">Màn Hình</h2>
                                <div className="curtain ">
                                    <div className="screen"></div>
                                </div>
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
