import { AiFillHome } from "react-icons/ai";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiCreditCard } from "react-icons/hi";
import { RiBox2Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

const sidePanelData = [
    {
        id: 1,
        icon: <AiFillHome />,
        optionName: "Dashboard",
        path: "/dashboard"
    },
    {
        id: 2,
        icon: <PiBuildingApartmentFill />,
        optionName: "Blog List",
        path: "/blog-list"
    },
    {
        id: 3,
        icon: <HiCreditCard />,
        optionName: "Add Blog",
        path: "/blog-new"
    },
    {
        id: 4,
        icon: <RiBox2Fill />,
        optionName: "Blog Comments",
        path: "/blog-comment"
    },
    {
        id: 5,
        icon: <FaTools />,
        optionName: "Blog Category",
        path: "/blog-category"
    }
]

export default sidePanelData;
