import { useState } from "react";
import story from "../../assets/Images/story/story.png"
const Story = () => {
    const initialText = (
        "But I must explain to you how all this mistaken idea of denouncing " +
        "pleasure and praising pain was born and I will give you a complete " +
        "account of the system, and expound the actual teachings of the great " +
        "explorer of the truth, the master-builder of human happiness. No one " +
        "rejects, dislikes, or avoids pleasure itself."
    );
    const [showFullText, setShowFullText] = useState(false);

    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    };

    const truncatedText = showFullText ? initialText : `${initialText.split(' ').slice(0, 50).join(' ')}...`;
    return (
        <div className=" text-white bg-[#251D18] shadow-2xl mb-2">
            <div className="hero-content w-full  mx-auto text-center flex-col lg:flex-row-reverse ">
                <div className="w-1/2 ml-20">
                    <img
                        src={story}
                        className="w-full pr-5"
                    />
                </div>

                <div className="w-1/2 ">
                    <h1 className="font-merriweather text-5xl font-medium">
                        Our Story
                    </h1>
                    
                    <p className="py-6 mx-auto flex justify-center font-poppins w-[484px]">{truncatedText}</p>
                    {initialText.split(' ').length > 50 && (
                        <button onClick={toggleReadMore}>
                            {showFullText ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Story;
