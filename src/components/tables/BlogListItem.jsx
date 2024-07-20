import React from "react";

export const BlogListItem = ({profileImage, name, role, status, id}) => {
  
  
  return (
    <div className="row px-4 flex space-x-2 border-t ">
        <div className="col-4 w-[5%] flex items-center justify-start px-2">
            <div className="flex justify-start text-[12px] text-[#8392AB] font-semibold">{id}</div>
        </div>
        <div className="col-1 w-[65%] flex space-x-4 items-center justify-start">
            <div className="">
                <img className="w-[50px] " src={profileImage} alt={name} />
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-semibold text-[#344767]">{name}</p>
            </div>
        </div>

        <div className="col-2 w-[10%] pr-[3px] py-4">
            <div className="flex flex-col text-[12px]">
                <div className="role font-semibold text-[#707C95]">{role}</div>
            </div>
        </div>

        <div className="col-3 w-[10%] flex justify-center py-4 text-[13px] font-semibold text-[#68758F]">
            <div className="flex items-center">            
                {
                    status ?
                    <button className="text-[10px] font-bold rounded-md text-white bg-gradient-to-br from-[#8CE62E] to-[#1FB137] px-2 py-[3px]">ONLINE</button>
                    :
                    <button className="text-[10px] font-bold rounded-md text-white bg-gradient-to-br from-[#A3B3D3] to-[#697C9B] px-2 py-[3px]">OFFLINE</button>
                }
            </div>
        </div>
        <div className="col-5 w-[10%] flex justify-center">
            <p className="text-sm flex  items-center font-semibold text-[#8392AB]"><p className="cursor-pointer">Edit</p></p>
        </div>
    </div>
  );
};
