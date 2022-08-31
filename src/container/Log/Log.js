import LogIn from "../../component/LogIn/LogIn";
import "./Log.css";

function Log({handleEmail , handlePassword,email,password,handleApi, handleLogout}){
    
    return(
        <div>
            <LogIn handleEmail={handleEmail} handlePassword={handlePassword} email={email} password={password}  handleApi={handleApi} handleLogout={handleLogout} />
        </div>
    );
}
export default Log;