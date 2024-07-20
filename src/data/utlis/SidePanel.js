import { AiFillHome } from "react-icons/ai";
import { TiThList } from "react-icons/ti";
import { MdLibraryAdd } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiMessage3Fill } from "react-icons/ri";

const sidePanelData = [
    {
        id: 1,
        icon: <AiFillHome />,
        optionName: "Dashboard",
        path: "/dashboard"
    },
    {
        id: 2,
        icon: <TiThList />,
        optionName: "Blog List",
        path: "/blog-list"
    },
    {
        id: 3,
        icon: <MdLibraryAdd />,
        optionName: "Add Blog",
        path: "/blog-new"
    },
    {
        id: 4,
        icon: <BiSolidCommentDetail />,
        optionName: "Blog Comments",
        path: "/blog-comment"
    },
    {
        id: 5,
        icon: <BiSolidCategoryAlt />,
        optionName: "Blog Category",
        path: "/blog-category"
    },
    {
        id: 6,
        icon: <RiMessage3Fill />,
        optionName: "OTP Message",
        path: "/otp-message"
    }
]

export default sidePanelData;
