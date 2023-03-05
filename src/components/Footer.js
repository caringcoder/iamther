import React from 'react'

function Footer() {
  return (
    <>
      <footer
            className="bg-slate-900
             text-3xl text-white text-center
             border-t-4
             fixed
             inset-x-0
             bottom-0
             p-4" style={{borderTopLeftRadius:'50px',borderTopRightRadius:'50px'}}>
            <div className="group  m-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} height={25} className='icon'>
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
              
              <input placeholder="Type here...." type="search" className="input" style={{borderRadius:'20px'}}/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={25} width={25} className='mx-2' fill='white'>
                <path d="M80 96V256c0 53 43 96 96 96s96-43 96-96H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S80 43 80 96zM304 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"/></svg>


            {/* {    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>} */}
            </div>
          </footer>
    </>
  )
}

export default Footer