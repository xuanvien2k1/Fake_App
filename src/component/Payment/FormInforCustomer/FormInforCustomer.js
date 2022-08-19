import ShowInforCustomer from "../ShowInforCustomer/ShowInforCustomer";

function FormInforCustomer ({payment,changeFullName,changePhone, changeNumberHome, changeCity, city, district, changeDistrict, village, disableDistrict, disableVillage, changeVillage}) {
    if(payment.length !== 0) {
        return <ShowInforCustomer
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
                
        />
    }
    return(
      <div className="form-information-customer">
       <h2>Thông Tin Khách Hàng</h2>
       <div className="form-information">
           <div className="input-person">
               <input placeholder="Name..." onChange={changeFullName}/>
               <input placeholder="Number..." onChange={changePhone}/>
           </div>
           <select className="form-city" onChange={changeCity}>
               <option value="" hidden>Tỉnh/Thành Phố</option>
               {city.map((c, index) => {
                   return  <option key={index} value={c.code}>{c.name}</option>;
               })}
           </select>
           <div className="input-address">
           <select className="district" onChange={changeDistrict} disabled={disableDistrict}>
               <option value="" hidden>Quận/Huyện</option>
               {district.map((d, index) => {
                   return <option key={index} value={d.code}>{d.name}</option>
               })}
           </select>
           <select className="village" disabled={disableVillage} onChange={changeVillage}>
               <option value="" hidden>Xã</option>
               {village.map((v, index) => {
                   return <option key={index} value={v.code}>{v.name}</option>
               })
               }
           </select>
           </div>
           <input className="numberhome" placeholder="Home..." onChange={changeNumberHome}/>
       </div>
   </div>
    );
}
export default FormInforCustomer;
