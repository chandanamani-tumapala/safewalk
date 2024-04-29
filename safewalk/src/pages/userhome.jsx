function UserHome() {
    const handleuserbutton=async (event) => {
        try {
            const response= await axios.get('http://localhost:3000/geolocation');
        }
        catch(error) {
            console.error('error signing up:', error);
        }
    }
    return (
        <div className='container'>
        <div className="formbox">
            <form>
                <div className="btn">
                    <button name="Start" onClick={handleuserbutton}>User</button>
                </div>
                <br></br>
            </form>
        </div>
    </div>
    )
}