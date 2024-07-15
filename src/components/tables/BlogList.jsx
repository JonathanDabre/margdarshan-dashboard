import React from 'react'
import BlogData from '../../data/tables/BlogData';
import { BlogListItem } from './BlogListItem';



export const BlogList = ({ image, title, icon1, icon2, budget, width, color1, color2 }) => {
  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
        <h6 className='text-[#344767] px-6 font-bold '>List of All Blogs</h6> 
        <div className='flex justify-between pt-2'>
            <div className='w-[100%]'>
                <div className='row px-4 flex  py-4 space-x-2 text-[13px] font-bold'>
                    <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-start pl-2 items-center'>ID</div>
                    <div className='text-xs w-[65%] text-[#A8B2C4] flex justify-start pl-2 items-center'>Blog Title</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-start'>Category</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Status</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Action</div>
                </div>
                <div>
                        {BlogData.map((author, index) => (
                            <BlogListItem
                            key={index}
                            profileImage={author.profileImage}
                            name={author.name}
                            email={author.email}
                            role={author.role}
                            department={author.department}
                            status={author.status}
                            id={author.id}
                            />
                        ))}
                </div>
            </div>
        </div>      
    </div>
      
  )
}
