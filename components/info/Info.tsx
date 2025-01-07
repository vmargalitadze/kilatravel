import React from 'react'
import first from '@/public/2/ticket.svg'
import sec from '@/public/2/hot-air-balloon.svg'
import mesame from '@/public/2/diamond.svg'
import meotxe from '@/public/2/medal.svg'
import Image from 'next/image'
import './info.css'
function Info() {
  return (
 <>
 <div className="layout-pt-xl layout-pb-xl">
   <div className="container mx-auto py-8">

<div className="flex flex-col text-center gap-4 mb-8 ">

<h2 data-aos="fade-up" className="text_header ">რატომ უნდა იმოგზაუროთ ჩვენთან ერთად? </h2>

    
</div>

<div className="flex items-start justify-start flex-wrap gap-16 p-4">

    <div className="card">

        <Image width={60} height={60} src={first} alt="icon" className=" rounded-full object-cover " />
       
       
        <div className="text-gray-600 font-bold">მისაღები ფასები</div>
        
        <div className="text-gray-600 text-center">ჩვენი შეთავაზებები გათვლილია ყველა ბიუჯეტზე</div>
        
      

    </div>

   

    <div className="card">

<Image width={60} height={60} src={sec} alt="icon" className=" rounded-full object-cover " />
{/* transition duration-200 hover:scale-110 */}

<div className="text-gray-600 font-bold ">დაუვიწყარი გამოცდილებები</div>

<div className="text-gray-600 text-center">ჩვენ ვუზრუნველყოფთ საუკეთესო მოგონებებს</div>



</div>

 
<div className="card">

<Image width={60} height={60} src={mesame} alt="icon" className=" rounded-full object-cover " />


<div className="text-gray-600 font-bold">ხარისხი</div>

<div className="text-gray-600 text-center">ხარისხი არის ჩვენი სერვისის მთავარი პრიორიტეტი</div>



</div>

<div className="card">

<Image width={60} height={60} src={meotxe} alt="icon" className=" rounded-full object-cover " />
{/* transition duration-200 hover:scale-110 */}

<div className="text-gray-600 font-bold">მუდმივი მხარდაჭერა</div>

<div className="text-gray-600 text-center">ჩვენ აქ ვართ, რათა დავეხმაროთ ნებისმიერ დროს</div>



</div>

 

</div>

</div>



 </div>
 
 </>
  )
}

export default Info