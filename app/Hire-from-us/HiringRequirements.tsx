export default function HiringRequirements() {
  return (
    <>
      <div className=" w-screen container bg-white-500 max-w-md mx-auto flex items-center justify-between overflow-x-hidden">
        <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h4 className="text-center font-medium mb-4">
            Share Your Hiring Requirements
          </h4>
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Work Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="submit"
                id="submit"
                name="submit"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-orange-500"
              />
            </div>
            <p className="text-center">Have Queries?</p>
            <p className="text-center">
              Dial us at <span className="text-primaryOrange">88888888888</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
