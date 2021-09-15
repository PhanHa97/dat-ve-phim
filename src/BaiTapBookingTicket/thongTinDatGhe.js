import React, { Component } from "react";
import "./thongTinDatGhe.css";

export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="chair-list">
                    <button className="gheDuocChon mt-4"></button>
                    <span className="text-light mx-2">Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon my-2"></button>
                    <span className="text-light mx-2">Ghế đang đặt</span>
                    <br />
                    <button className="ghe" style={{ marginLeft: 0 }}></button>
                    <span className="text-light mx-2">Ghế chưa đặt</span>
                </div>

                <div className="mt-5">
                    <table className="table text-light" border="2">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Tổng tiền</th>
                                <th>0</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
