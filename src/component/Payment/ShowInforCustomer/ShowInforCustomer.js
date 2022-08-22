function ShowInforCustomer({
  payment,
  changeFullName,
  changePhone,
  changeNumberHome,
  changeCity,
  city,
  district,
  changeDistrict,
  village,
  disableDistrict,
  disableVillage,
  changeVillage,
}) {
  return payment.map((p, index) => {
    const cityCurrent = city.filter((f) => f.code === p.city);
    const districtCurrent = district.filter((f) => f.code === p.district);
    const villageCurrent = village.filter((f) => f.code === p.village);
    return (
      <div className="form-information-customer" key={index}>
        <h2>Thông Tin Khách Hàng</h2>
        <div className="form-information">
          <div className="input-person">
            <input
              placeholder="Name..."
              onChange={changeFullName}
              value={p.fullName}
            />
            <input
              placeholder="Number..."
              onChange={changePhone}
              value={p.phone}
            />
          </div>
          <select className="form-city" onChange={changeCity}>
            <option value={cityCurrent[0].code}>{cityCurrent[0].name}</option>
            {city.map((c, index) => {
              return c.code !== p.city ? (
                <option key={index} value={c.code}>
                  {c.name}
                </option>
              ) : null;
            })}
          </select>
          <div className="input-address">
            <select
              className="district"
              onChange={changeDistrict}
              disabled={disableDistrict}
            >
              {districtCurrent.length !== 0 ? (
                <option value={districtCurrent[0].code}>
                  {districtCurrent[0].name}
                </option>
              ) : (
                <option value="">Quận/Huyện</option>
              )}
              {district.map((d, index) => {
                return d.code !== p.district ? (
                  <option key={index} value={d.code}>
                    {d.name}
                  </option>
                ) : null;
              })}
            </select>
            <select
              className="village"
              disabled={disableVillage}
              onChange={changeVillage}
            >
              {villageCurrent.length !== 0 ? (
                <option value={villageCurrent[0].code}>
                  {villageCurrent[0].name}
                </option>
              ) : null}
              {village.map((w, index) => {
                return w.code !== p.village ? (
                  <option key={index} value={w.code}>
                    {w.name}
                  </option>
                ) : null;
              })}
            </select>
          </div>
          <input
            className="numberhome"
            placeholder="Home..."
            onChange={changeNumberHome}
            value={p.numberHome}
          />
        </div>
      </div>
    );
  });
}
export default ShowInforCustomer;
