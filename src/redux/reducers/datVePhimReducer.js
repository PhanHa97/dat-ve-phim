import dataMovie from "./danhSachGhe.json";

const initialState = {
    movieList: dataMovie,
};

const datVePhimReducer = (state = initialState) => {
    return { ...state };
};

export default datVePhimReducer;
