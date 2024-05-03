
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export const Card = ({course , likedCourse , setLikedcourse}) => {



    function clickHandler(){
        if(likedCourse.includes(course.id)){
            setLikedcourse( (prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Likes removed Successfully");
        }
        else{
            if(likedCourse.length === 0){
                setLikedcourse([course.id]);
            }
            else{
                setLikedcourse((prev) => [ ...prev, course.id ]);

            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className=' w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className=' relative'>
            <img src={course.image.url} alt='' ></img>
            <div>
                <button onClick={clickHandler} className=' w-[40px] h-[40px] bg-white rounded-full absolute right-2 
                                                             bottom-3 grid place-items-center '>
                   {
                     likedCourse.includes(course.id)? ( <FcLike fontSize='1.7rem' />) : (<FcLikePlaceholder fontSize='1.7rem' />)
                   }
                </button>
            </div>
        </div>
        <div className=' p-4 '>
            <p className=' text-white font-semibold text-lg leading-6 '>{course.title}</p>
            <p className=' mt-2 text-white '>
                {
                    course.description.length > 100 ? (course.description.substr(0 , 100)) + "..."
                    :(course.description)
                } 
             </p>
        </div>
    </div>
  )
}
export default Card;
