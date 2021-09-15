import React, { Component } from "react";
import "./hangGhe.css";
import { connect } from "react-redux";
import { datGheAction } from "../redux/action/datvePhimActions";

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            // trang thái ghế đã được người khác đặt
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
            }

            // xét trạng thái ghế đang đặt
            let cssGheDangDat = "";
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
                (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
            );
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon";
            }
            return (
                <button onClick={() => {
                    this.props.datGhe(ghe)
                }} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                    {ghe.soGhe}
                </button>
            );
        });
    };

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className="rowNumber" key={index}>
                    {hang.soGhe}
                </button>
            );
        });
    };

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <div className="ml-2">
                    {this.props.hangGhe.hang}
                    {this.renderSoHang()}
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.hangGhe.hang}
                    {this.renderGhe()}
                </div>
            );
        }
    };

    render() {
        return (
            <div className="hangGhe text-light text-left ">
                {this.renderHangGhe()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.datVePhimReducer.danhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
