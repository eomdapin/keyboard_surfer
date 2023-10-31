const API_KEY = process.env.REACT_APP_API;
const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=keyBoard&image_type=photo&category=computer&min_width=400&min_height=400&page=`;

const path = '/keyboard_surfer/';
const naviName = ['notice', 'product', 'freeboard', 'mypage'];
const pathTitle = {
  notice: '공지사항',
  product: '상품목록',
  freeboard: '자유게시판',
  mypage: '마이페이지',
}
const pathSub = {
  notice: ['notice/notice', 'notice/event'],
  product: ['product/sub_1', 'product/sub_2', 'product/sub_3', 'product/sub_4', 'product/sub_5',],
  freeboard: ['freeboard/freeboard', 'freeboard/todaycheck'],
  mypage: ['mypage/ordersearch', 'mypage/ordercancel', 'mypage/cart'],
};
const pathName = {
  notice: ['공지사항', '이벤트'],
  product: ['풀배열 키보드', '텐키리스 키보드', '66Key 키보드', '마우스 패드', '악세서리'],
  freeboard: ['자유게시판', '출석체크'],
  mypage: ['주문조회', '주문취소', '장바구니'],
};

export { API_URL, path, naviName, pathTitle, pathSub, pathName, };