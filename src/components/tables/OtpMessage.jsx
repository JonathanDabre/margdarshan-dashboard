import React, { useState } from 'react';
import OtpContent from '../../data/utlis/OtpContent';
import OtpMessageItem from './OtpMessageItem';
import QuillEditor from './QuillEditor';

export default function OtpMessage() {
    const [value, setValue] = useState('');
    const [mailSubject, setMailSubject] = useState('');
    const [otpContent, setOtpContent] = useState(OtpContent);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddOtp = () => {
        if (mailSubject && value) {
            if (editIndex !== null) {
                const updatedContent = [...otpContent];
                updatedContent[editIndex] = { subject: mailSubject, content: value };
                setOtpContent(updatedContent);
                setEditIndex(null);
            } else {
                setOtpContent([...otpContent, { subject: mailSubject, content: value }]);
            }
            setMailSubject('');
            setValue('');
        } else {
            alert('Both subject and content are required.');
        }
    };

    const handleEditOtp = (index) => {
        setMailSubject(otpContent[index].subject);
        setValue(otpContent[index].content);
        setEditIndex(index);
    };

    return (
        <>
            <div className='rounded-xl my-7 py-5 bg-white container mx-auto px-6'>
                <h6 className='text-[#344767] font-bold'>Add New Mail</h6>
                <div className='my-2'>
                    <label htmlFor="mail-subject" className="block px-1 text-sm font-medium leading-6 text-[#344767]">
                        Mail Subject <span className="text-red-600">*</span>
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input 
                            type="text" 
                            name="mail-subject" 
                            id="mail-subject" 
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            placeholder="Mail Subject" 
                            required 
                            value={mailSubject}
                            onChange={(e) => setMailSubject(e.target.value)}
                        />
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="mail-content" className="block px-1 text-sm font-medium leading-6 text-[#344767]">Mail Content</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <QuillEditor content={value} contentSetter={setValue} />
                    </div>
                </div>
                <div className='my-4'>
                    <button 
                        type="button" 
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm mr-2"
                        onClick={handleAddOtp}
                    >
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                    <button 
                        type="reset" 
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm"
                        onClick={() => { setMailSubject(''); setValue(''); setEditIndex(null); }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className='rounded-xl my-7 py-5 bg-white container mx-auto px-6'>
                <h6 className='text-[#344767] font-bold'>OTP Mail Content</h6>
                <div className='flex flex-wrap'>
                    {otpContent.map((item, index) => (
                        <OtpMessageItem 
                            key={index} 
                            subject={item.subject} 
                            content={item.content} 
                            onEdit={() => handleEditOtp(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
