import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import earth from "../assets/earth image.png"
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="ml-10 my-10">
        <button className="shadow-md dark:bg-DarkBlue bg-white px-5 py-1 cursor-pointer dark:text-white text-HomepageItems opacity-75 flex items-center gap-2" onClick={() => { navigate(-1) }}><span><FaArrowLeft /></span> Back</button>
      </div>
      <div className="flex justify-center items-center flex-col gap-4">
        <img src={earth} className="max-w-[20rem] animation-spin motion-safe:animate-spin" />
        <p className="dark:text-white">No matching country found :(</p>
      </div>
    </div>
  )
}

export default Error404;