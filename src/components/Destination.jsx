export default function Destination() {
    return (
        <div className="bg-gray-200 shadow-lg p-8 rounded-2xl w-fit">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Destination Profile</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span className="text-lg font-medium text-gray-900">Name:</span>
            <span className="text-lg text-gray-900">John Doe</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-medium text-gray-900">Email:</span>
            <span className="text-lg text-gray-900">john.doe@example.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-medium text-gray-900">Phone:</span>
            <span className="text-lg text-gray-900">+1234567890</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-medium text-gray-900">Address:</span>
            <span className="text-lg text-gray-900">123 Main St, Cityville</span>
          </div>
        </div>
        <button className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </div>
    );
  }
  