import React, { useState } from 'react';

export default function UpdateProduct() {
    const [selectedSizes, setSelectedSizes] = useState([]);
    // Assuming arrSize is defined somewhere in your code
    const [arrSize, setArrSize] = useState([
        { name: 'M', quantity: null },
        { name: 'L', quantity: null },
        { name: 'S', quantity: null },
    ]);

    const handleSizeChange = (event, sizeName) => {
        // Implement the logic to handle size changes
    };

    const handleSubmit = () => {
        // Implement the logic to handle form submission
    };

    return (
        <>
            <section>
                <div className="add-product container-layout">
                    <div className="add-content">
                        <h1 className="add-title">Đăng Bán Sản Phẩm</h1>
                        <p className="add-title-clone">Hãy đăng những thông tin sản phẩm bạn cần bán</p>
                    </div>
                    <div className="add-name">
                        <label className="add-label">Tên sản phẩm:</label>
                        <input type="text" className="add-name-input" />
                    </div>
                    <div className="add-description">
                        <label className="add-label">Mô tả sản phẩm:</label>
                        <textarea className="add-description-text" rows="4"></textarea>
                    </div>
                    <div className="add-price">
                        <label className="add-label">Giá:</label>
                        <input type="number" className="add-price-input" />
                    </div>
                    <div className="add-discountedPrice">
                        <label className="add-label">Discounted Price:</label>
                        <input type="number" className="add-discountedPrice-input" />
                    </div>
                    <div className="add-discountPersent">
                        <label className="add-label">Discount Percent:</label>
                        <input type="number" className="add-discountPersent-input" />
                    </div>
                    <div className="add-type">
                        <div className="add-brand">
                            <label className="add-label">Chọn nhãn hiệu:</label>
                            <select id="add-brand-check" className="add-select">
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Converse">Converse</option>
                                <option value="Puma">Puma</option>
                                <option value="Alexander Mqueen">Alexander Mqueen</option>
                                <option value="New Balance">New Balance</option>
                                <option value="Reebok">Reebok</option>
                            </select>
                        </div>
                        <div className="add-size">
                            <label className="add-label">Chọn Size và Số lượng:</label>
                            {arrSize.map((size) => (
                                <div key={size.name} className="add-size-checkbox">
                                    <div className="add-size-name">
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${size.name}`}
                                            checked={selectedSizes.some(
                                                (selectedSize) => selectedSize.name === size.name,
                                            )}
                                            onChange={(event) => handleSizeChange(event, size.name)}
                                            style={{
                                                transform: 'scale(1.2)',
                                                cursor: 'pointer',
                                                backgroundColor: selectedSizes.some(
                                                    (selectedSize) => selectedSize.name === size.name,
                                                )
                                                    ? 'pink'
                                                    : 'initial',
                                            }}
                                        />
                                        <label
                                            style={{ fontSize: '20px', cursor: 'pointer' }}
                                            htmlFor={`checkbox-${size.name}`}
                                        >
                                            {size.name}
                                        </label>
                                    </div>
                                    <input type="number" className="add-size-input" id={`size-${size.name}`} />
                                </div>
                            ))}
                        </div>
                        <div className="add-color">
                            <label className="add-label">Chọn màu:</label>
                            <select id="add-color-check" className="add-select">
                                <option value="#FF0000">Đỏ</option>
                                <option value="#00FF00">Xanh lá</option>
                                <option value="#FFFF00">Vàng</option>
                                <option value="#C0C0C0">Bạc</option>
                                <option value="#00FFFF">Xanh Dương</option>
                                <option value="#FFFFFF">Trắng</option>
                                <option value="#000000">Đen</option>
                                <option value="#808080">Xám</option>
                            </select>
                        </div>
                    </div>
                    <div className="add-image">
                        <label className="add-label">Hình ảnh sản phẩm:</label>
                        <input type="file" className="add-image-input" />
                    </div>
                    <div className="add-product-btn">
                        <button onClick={handleSubmit} className="add-product-btn-submit">
                            Đồng ý
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
