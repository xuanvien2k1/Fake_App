import SuccessPayment from "../PopUp/SucessPayment/SuccessPayment";
import FormInforCustomer from "./FormInforCustomer/FormInforCustomer";
import MyOrder from "./MyOrder/MyOrder";

function Payment ({cart,changeFullName,changePhone, changeNumberHome,  city, changeCity, district, changeDistrict, village, disableDistrict, disableVillage, paymentProduct, changeVillage, showNoticePayment, payment, closeNoticePayment}) {
    return(
        <>
        
        <div className="page-payment">
            <FormInforCustomer 
               
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
                changeVillage={changeVillage}
                payment={payment}
                closeNoticePayment={closeNoticePayment}
                />
            <MyOrder cart={cart}
                     paymentProduct={paymentProduct}
            />
        </div>

        <SuccessPayment show={showNoticePayment} closeNoticePayment={closeNoticePayment}/>
        </>
    );
}
export default Payment;