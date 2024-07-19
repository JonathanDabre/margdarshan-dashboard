import React, { useRef, useState } from 'react';
import JoditEditor from "jodit-react";

export const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState(["JEE","NEET","Advance","Boards"]); 
    return (
        <div className='rounded-xl my-7 py-5 bg-white h-[100%] container mx-auto px-6'>
            <h6 className='text-[#344767] font-bold'>Add new Blog</h6>
            <div className='my-2'>
                <label for="blog-title" class="block px-1 text-sm font-medium leading-6 text-[#344767]">
                    Blog Title <span class="text-red-600">*</span>
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="blog-title" id="blog-title" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Blog Title" required />
                </div>
            </div>
            <div className='my-2'>
                <label for="category" class="block px-1 text-sm font-medium leading-6 text-[#344767]">Category<span class="text-red-600">*</span></label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <select name="category" id="category" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={0}>
                    <option disabled value={0} > Select category </option>
                    {
                        categories.map((category,index) => (
                            <option value={category} key={index}>
                                {category}
                            </option>       
                    ))}
                    </select>
                </div>
            </div>
            <div className='my-2'>
                <label for="image" class="block px-1 text-sm font-medium leading-6 text-[#344767]">Image</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="file" name="image" id="image" class="block w-full text-gray-900 border-0 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className='my-2'>
                <label for="image-alt" class="block px-1 text-sm font-medium leading-6 text-[#344767]">
                    Image Alt Text <span class="text-red-600">*</span>
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="image-alt" id="image-alt" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Image Alt Text" required />
                </div>
            </div>
            <div className='my-2'>
                <label for="blog-content" class="block px-1 text-sm font-medium leading-6 text-[#344767]">Blog Content</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <JoditEditor
                        id="#joditEditor"
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />
                </div>
            </div>
            <div className='my-2'>
                <label for="site-author" class="block px-1 text-sm font-medium leading-6 text-[#344767]">
                    Site Author <span class="text-red-600">*</span>
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="site-author" id="site-author" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Site Author" required />
                </div>
            </div>
            <div className='my-2'>
                <label for="site-name" class="block px-1 text-sm font-medium leading-6 text-[#344767]">
                    Site Name <span class="text-red-600">*</span>
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="site-name" id="site-name" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Site Name" required />
                </div>
            </div>
            <div className='my-2'>
                <label for="meta-title" class="block px-1 text-sm font-medium leading-6 text-[#344767]">
                    Meta Title <span class="text-red-600">*</span>
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="meta-title" id="meta-title" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Meta Title" required />
                </div>
            </div>
            <div className='my-2'>
                <label for="meta-description" class="block px-1 text-sm font-medium leading-6 text-[#344767]">Meta Description</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <textarea name="meta-description" id="meta-description" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Meta Description"></textarea>
                </div>
            </div>
            <div className='my-2'>
                <label for="meta-keywords" class="block px-1 text-sm font-medium leading-6 text-[#344767]">Meta Keywords</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="meta-keywords" id="meta-keywords" class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Meta Keywords" />
                </div>
            </div>
            <div className='my-4'>
                <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm mr-2">Submit</button>
                <button type="reset" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm">Reset</button>
            </div>
        </div>
    );
};
