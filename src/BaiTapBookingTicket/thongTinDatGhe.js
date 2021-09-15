import React, { Component } from "react";
import "./thongTinDatGhe.css";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/action/datvePhimActions";

class ThongTinDatGhe extends Component {
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia.toLocaleString()}</td>
                                        <td>
                                            <button
                                                className="text-danger"
                                                onClick={() => {
                                                    this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                                                }}
                                            >
                                                Hủy
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.danhSachGheDangDat
                                        .reduce((tongTien, gheDangDat, index) => {
                                            return (tongTien += gheDangDat.gia);
                                        }, 0)
                                        .toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.datVePhimReducer.danhSachGheDangDat,
    };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
