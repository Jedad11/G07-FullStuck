const Card = ({ Name, Floor, Price, className = "" }) => {
    return (
        <div className={`xl:max-w-[1440px] mx-auto md:mb-[48px] px-[31px] ${className}`}>
            <div className="flex flex-col md:flex-row bg-[#F3EAD3] xl:ml-10 xl:mr-10 mb-5 xl:rounded-xl items-center justify-center"> {/* เปลี่ยน lg เป็น xl */}
                <img src="src/image/room1.jpg" alt="room1" className="xl:w-[311px] md:w-[225px] w-[146px] xl:h-[203px] md:h-[147px] h-[95px] md:m-10 mt-10 rounded-xl" /> {/* เปลี่ยน lg เป็น xl */}
                <div className="text-left mx-auto"> {/* ใช้ text-center ในมือถือ และ text-left สำหรับขนาดหน้าจอ md ขึ้นไป */}
                    <p className="xl:text-[32px] md:text-[24px] font-semibold mt-8 md:text-left text-center ">{Name}</p> {/* เปลี่ยน lg เป็น xl */}
                    <p className="xl:text-[18px] md:text-[15px] mb-2 mt-2 ml-2">Sawat-Pracha Uthit Soi Pracha Uthit 26/7, Bang Mod, Thung Khru, Bangkok 10140</p>
                    <div className="grid md:grid-cols-3 grid-rows-3 mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="xl:text-[20px] md:text-[16px] font-bold mb-2 mt-2 ml-2">Rental</p> {/* เปลี่ยน lg เป็น xl */}
                            <p className="xl:text-[20px] md:text-[16px]">{Price} THB/Month</p> {/* เปลี่ยน lg เป็น xl */}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="xl:text-[20px] md:text-[16px] font-bold mb-2 mt-2 ml-2">Unit type</p> {/* เปลี่ยน lg เป็น xl */}
                            <p className="xl:text-[20px] md:text-[16px]">1 Bedroom</p> {/* เปลี่ยน lg เป็น xl */}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="xl:text-[20px] md:text-[16px] font-bold mb-2 mt-2 ml-2">Floor</p> {/* เปลี่ยน lg เป็น xl */}
                            <p className="xl:text-[20px] md:text-[16px]">{Floor}th</p> {/* เปลี่ยน lg เป็น xl */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
