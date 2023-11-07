import React from 'react'

export const Featured = () => {
  return (
    <div>
          <section>
              <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                          <div className="max-w-md mx-auto text-center lg:text-left">
                              <header>
                                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Featured Events</h2>

                                  <p className="mt-4 text-gray-500">
                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                      rerum quam amet provident nulla error!
                                  </p>
                              </header>

                              <a
                                  href="#"
                                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                              >
                                  See All
                              </a>
                          </div>
                      </div>

                      <div className="lg:col-span-2 lg:py-8">
                          <ul className="grid grid-cols-2 gap-4">
                              <li>
                                  <a href="#" className="block group">
                                      <img
                                          src="https://www.theweddingschool.in/wp-content/uploads/2018/09/download.jpg"
                                          alt=""
                                          className="object-cover w-full rounded aspect-square"
                                      />

                                  </a>
                              </li>

                              <li>
                                  <a href="#" className="block group">
                                      <img
                                          src="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
                                          alt=""
                                          className="object-cover w-full rounded aspect-square"
                                      />

                                     
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="block group">
                                      <img
                                          src="https://bdwedding.com/upload/blogimages/06f60e43214cc5075134ef7b69bfd81d.jpg"
                                          alt=""
                                          className="object-cover w-full rounded aspect-square"
                                      />

                                      
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="block group">
                                      <img
                                          src="https://eventreemedia.in/images/gallery/gallery-1.jpg"
                                          alt=""
                                          className="object-cover w-full rounded aspect-square"
                                      />

                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
