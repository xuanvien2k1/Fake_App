import Header from "../../component/Header/Header";
import Payment from "../../component/Payment/Payment";
import "./CheckOut.css";
function CheckOut({cart,changeFullName,changePhone, changeNumberHome, city, changeCity, district, changeDistrict, village, disableDistrict, disableVillage, paymentProduct, changeVillage, showNoticePayment, payment, closeNoticePayment}) {
    return(
        <>
        <Header cart={cart}/>
        <Payment cart={cart} 
                changeFullName={changeFullName}
                changePhone={changePhone}
                changeNumberHome={changeNumberHome}
                city={city}
                changeCity={changeCity}
                district={district}
                changeDistrict={changeDistrict}
                village={village}
                disableDistrict={disableDistrict}
                disableVillage={disableVillage}
                paymentProduct={paymentProduct}
                changeVillage={changeVillage}
                showNoticePayment={showNoticePayment}
                payment={payment}
                closeNoticePayment={closeNoticePayment}
        />
        </>
    );
}
export default CheckOut;