import axios from "axios";

export const SendMessage = async (senderId: string) => {
    try{
        const response = await axios.post("", {
            recipient: { id: senderId },
            message: { text: "chakhi" },
        },{
            headers:{
                Authorization:"bearer IGAGR24O75ri9BZAE9DN3NDWjZAWeHJ3alpyNVQ3dU04aER1cGV2Qk5fOHkyWnB0emhzelBkZA3h5X3pfMWhoc1NzdmxQaTNQRERmc3hZAYVlNMGgxcGFBR0VZATjhyY3lYSjd2OWF5d29CWlctWGptSmx6MHprbU5VRjVnUWRWaFRIVlUtZA28tV3M5T0Vn",
                "Content-Type": "applicaton/json"
            }
        });
        console.log(response)
    }catch(error){
        console.log(error);
    }
};
