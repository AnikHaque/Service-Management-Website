import React from 'react'

export const AboutBanner = () => {
  return (
    <div className='mt-8 mb-8 ml-8 mr-8'>

          <section>
              <div className="dark:bg-violet-400">
                  <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                      <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-white">Providing the best Event Management Service </h1>
                    <br></br>
                      <div className="flex flex-wrap justify-center">
                          <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                          <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                      </div>
                  </div>
              </div>
              <img src="https://5.imimg.com/data5/RK/CW/MY-19128035/weeding-event-management-500x500.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 " />
          </section>
    </div>
  )
}
