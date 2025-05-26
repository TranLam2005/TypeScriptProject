import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#002B45] w-full text-white text-sm px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Cột 1: Thông tin tổ chức */}
          <div className="space-y-4 col-span-2">
            <div>
              <h2 className="font-bold uppercase leading-snug">
                Trung tâm Lưu trữ lịch sử Khánh Hòa
              </h2>
              <p className="text-xs text-gray-300">
                Cổng thông tin kho lưu trữ lịch sử Khánh Hòa
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                📍 196 Thống Nhất, thành phố Nha Trang, tỉnh Khánh Hòa
              </p>
              <p className="flex items-start gap-2">
                📞 0258.3818801 - Fax: 0258.3818801
              </p>
              <p className="flex items-start gap-2">✉️ ttlts@khanhhoa.gov.vn</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                  🌐
                </div>
              </a>
              <a href="#">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                  💬
                </div>
              </a>
              <a href="#">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                  ▶️
                </div>
              </a>
            </div>
          </div>
  
          {/* Cột 2–5: Liên kết nhanh */}
          <div>
            <h3 className="font-bold mb-2">Giới thiệu</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <a href="/gioi-thieu/lich-su-phat-trien">Lịch sử phát triển</a>
              </li>
              <li>
                <a href="">Cơ cấu tổ chức</a>
              </li>
              <li>
                <a href="#">Chức năng nhiệm vụ</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-2">Tra cứu</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <a href="#">Văn bản lưu trữ</a>
              </li>
              <li>
                <a href="#">Hồ sơ lưu trữ</a>
              </li>
              <li>
                <a href="#">Phông lưu trữ</a>
              </li>
              <li>
                <a href="#">Cơ quan lưu trữ</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-2">Dịch vụ</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <a href="#">Đăng ký tài khoản</a>
              </li>
              <li>
                <a href="#">Khai khác sử dụng</a>
              </li>
              <li>
                <a href="#">Nộp lưu tài liệu</a>
              </li>
              <li>
                <a href="#">Đăng ký nộp lưu</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-2">Thông tin</h3>
            <ul className="space-y-1 text-gray-200">
              <li>
                <a href="#">Quy định thành phần hồ sơ</a>
              </li>
              <li>
                <a href="#">Thời hạn bảo quản hồ sơ</a>
              </li>
              <li>
                <a href="#">Tiêu chuẩn hộp, bìa</a>
              </li>
              <li>
                <a href="#">Quy định về nguồn nộp</a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-300 text-xs">
          © 2024 Bản quyền thuộc về Sở Nội Vụ tỉnh Khánh Hòa.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  