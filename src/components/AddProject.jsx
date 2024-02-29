export default function AddProject({ }) {
    return (
        <form className="w-1/2 flex flex-col px-16 py-24">
            <div className="flex justify-end gap-5">
                <button className="hover:text-gray-600">Cancel</button>
                <button className="px-6 py-2 rounded-md bg-black text-white ">Save</button>
            </div>

            <div className="flex flex-col py-8">
                <label className="font-bold text-sm text-gray-500">TITLE</label>
                <input className="bg-gray-200 text-gray-600 font-medium text-sm px-2 py-2 shadow-md focus:outline-none focus:border-2 focus:border-b-gray-500 "/>
            </div>

            <div className="flex flex-col">
                <label className="font-bold text-sm text-gray-500">DESCRIPTION</label>
                <textarea className="bg-gray-200 shadow-md px-2 py-2 text-gray-600 text-sm focus:outline-none focus:border-2 focus:border-b-gray-500"/>
            </div>

            <div className="flex flex-col py-8">
                <label className="font-bold text-sm text-gray-500">DUE DATE</label>
                <input type='date' className="bg-gray-200 shadow-md px-2 py-2 text-gray-600 text-sm font-medium focus:outline-none focus:border-2 focus:border-b-gray-500" placeholder="mm/dd/yyy"/>
            </div>
        </form>
    );
}