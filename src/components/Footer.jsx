import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  
  return (
    <div className='myFooter bottom-0 w-full'>

        <div className="flex flex-col-reverse md:flex-row justify-between p-2">
            <div className="md:w-1/2 font-bold flex justify-center text-white" style={{background:''}}>
                Copyright &copy; {date} Pitoff (Software Dev). 
            </div>

            <div className="md:w-1/2"  style={{background:''}}>
            
                <div class="flex justify-center space-x-4">
                    <a href="#">
                        <img src="img/icon-facebook.svg" alt="" class="h-8"></img>
                    </a>
                    <a href="#">
                        <img src="img/icon-youtube.svg" alt="" class="h-8"></img>
                    </a>
                    <a href="#">
                        <img src="img/icon-twitter.svg" alt="" class="h-8"></img>
                    </a>
                    <a href="#">
                        <img src="img/icon-pinterest.svg" alt="" class="h-8"></img>
                    </a>
                    <a href="#">
                        <img src="img/icon-instagram.svg" alt="" class="h-8"></img>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer