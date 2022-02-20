import React from "react";

interface Props {
    message: string;
}

const MessageComponent: React.FC<Props> = ({message}) => {
    return (
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="max-w-md px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="py-4">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                title="photo"
                className="w-20 h-20 object-cover rounded-full border-2 border-gray-800"
                src="https://images.unsplash.com/photo-1550041443-2d8b512e921e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold text-justify">Mensaje</h2>
              <p className="mt-2 text-gray-600">{message}</p>
            </div>
            <div className="flex justify-end mt-4">
              <p className="text-xl font-medium text-gray-800">
                M.D.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MessageComponent;