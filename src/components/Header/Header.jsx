import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="bg-white shadow dark:bg-gray-400">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="#"
            class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </a>

          <a
            href="#"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            features
          </a>

          <a
            href="#"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            about
          </a>

          <a
            href="#"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            blog
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
