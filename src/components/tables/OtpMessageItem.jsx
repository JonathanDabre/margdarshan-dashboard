import { MdModeEditOutline } from 'react-icons/md';

export default function OtpMessageItem({ subject, content, onEdit }) {
    return (
        <>
            <div className="min-w-[100%] lg:min-w-[25%] lg:max-w-[25%] rounded overflow-hidden shadow-lg m-4 flex flex-col">
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold mb-2">Subject: {subject}</div>
                    <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
                
                <div className="px-6 pb-4 flex justify-end">
                    <button 
                        className="bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold p-3 rounded-full"
                        onClick={onEdit}
                    >
                        <MdModeEditOutline />
                    </button>
                </div>
            </div>
        </>
    );
}
