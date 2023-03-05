import React from 'react'




function ScrollCard() {
  const scrollableCard = [
    {
      name: "New Chat",
      icon: "fa-sharp fa-solid fa-plus"
    },
    {
      name: "Dribble Design",
      icon: "fa-light fa-image"
    },
    {
      name: "Covid Prevention",
      icon: "fa-regular fa-message"
    },
    {
      name: "Covid Prevention",
      icon: "fa-regular fa-message"
    },
  ]

  return (
    <>
      <section className="text-gray-600 body-font" style={{ backgroundColor: '#858c7c' }}>
        <div className="container px-5 py-7 overflow-auto mx-auto">
          <div className="flex flex-nowrap -m-4">
            {
              scrollableCard.map((element, index) => {
                return (
                  <div className="xl:w-1/3 md:w-1/3 px-2" key={index}>
                    <div className="border border-white-200 px-2 py-2 rounded-full flex justify-center align-middle gap-2">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500" style={{ borderRadius: '1.75rem' }}>
                        {/* <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg> */}
                        <i className={`${element.icon}`}></i>
                      </div>
                      <span className="text-sm text-gray-900 font-medium title-font mb-2 flex justify-center align-bottom " style={{ alignItems: 'self-end', whiteSpace: 'nowrap' }}>{element.name}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        
        </div>
      </section>
    </>
  )
}

export default ScrollCard