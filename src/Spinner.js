import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import  './Spinner.css';

export default function Spinner(){
  return(
    <div className = "Spinner">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  )
}