import { useNavigate } from "react-router-dom";
import '../css/app.css';
function Signup() {

    const navigate = useNavigate();

    const handleuserbutton = async (event) => {
        event.preventDefault();

        navigate('/usersignup');
    };
    const handleescortbutton = async (event) => {
        event.preventDefault();
        navigate('/escortsignup');
    };
    return (
        <div className='container'>
            <div className="formbox">
                <form>
                    <div className="btn">
                        <button name="userbtn" onClick={handleuserbutton}>User</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="btn">
                        <button name="escortbtn" onClick={handleescortbutton}>Escort</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;