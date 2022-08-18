function FormInforCustomer () {
    return(
        <>
            <h2>Thông Tin Khách Hàng</h2>
            <div>
                <div>
                    <input className="name" placeholder="Name..."/>
                    <input className="number" placeholder="Number..."/>
                </div>
                <input className="city" placeholder="City"/>
                <div>
                    <input className="district" placeholder="District"/>
                    <input className="village" placeholder="Village"/>
                </div>
                <input className="numberhome" placeholder="Home..."/>
            </div>
        </>
    );
}
export default FormInforCustomer;
