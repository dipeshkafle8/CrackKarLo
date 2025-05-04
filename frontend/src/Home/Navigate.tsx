import { useNavigate } from "react-router-dom";
import { House } from 'lucide-react';
const NavigateToHome= () =>{
    const navigate= useNavigate();
     return(
        <>
        <div>
            <House onClick={() => navigate('/')} size={27}/>
        </div>
        </>
     )
}

export default NavigateToHome;