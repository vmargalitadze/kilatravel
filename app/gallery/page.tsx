import React from 'react'
import './gallery.css'
function page() {
    return (
      <>
        <section
          style={{
            backgroundImage: `url('/diego-jimenez-A-NVHPka9Rk-unsplash.jpg')`,
          }}
          className="relative team_header object-cover w-full h-96 items-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800/60 to-slate-700"></div>
          <div className="container team_header relative">
            <div className="grid team_header grid-cols-1 text-center">
              <h3 className="text-4xl font-semibold text-white">
                ჩვენს <span className="team-span"> შესახებ </span>
              </h3>
            </div>
          </div>
        </section>
  
        <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 bg-gray-50">
  <div className="flex flex-col md:flex-row gap-2">
    {/* First Column */}
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-1">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
          alt="Image 1"
        />
      </div>
      <div className="flex flex-1 gap-2">
        <div className="flex flex-1">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80"
            alt="Image 2"
          />
        </div>
        <div className="flex flex-1">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
            alt="Image 3"
          />
        </div>
      </div>
    </div>

    {/* Second Column */}
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-1 gap-2">
        <div className="flex flex-1">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80"
            alt="Image 4"
          />
        </div>
        <div className="flex flex-1">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
            alt="Image 5"
          />
        </div>
      </div>
      <div className="flex flex-1">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80"
          alt="Image 6"
        />
      </div>
    </div>
  </div>
</div>



<div className="max-w-screen-2xl mx-auto px-4  relative bg-white">
    <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col">
              
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
            </div>
        </div>
        <div className="flex flex-1">
            <div className="grid grid-cols-2 gap-2">
              <div>
              
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
              
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
               
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
              
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
              </div>
            </div>
        </div>
    </div>
</div>
      </>
    );
  }
  export default page;  