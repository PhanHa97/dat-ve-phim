import React, { Component } from "react";
import "./hangGhe.css";

export default class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disable = false;
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disable = true;
            }

            return (
                <button disable={disable} className={`ghe ${cssGheDaDat}`} key={index}>
                    {ghe.soGhe}
                </button>
            );
        });
    };

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
    };

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <div className="ml-4">
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
