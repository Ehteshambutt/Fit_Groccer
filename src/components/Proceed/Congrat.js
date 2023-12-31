import React from 'react'
import './cograt.css'
import {  useNavigate } from "react-router-dom";

export const Congrat = () => {
    const navigate=useNavigate()

  return (<>
    <div className='body22'>
        
        <div class="contain">
	<div class="congrats">
		<h1>Congrat<span class="hide">ulation</span>s !Your   Order Has Been Placed!</h1>
		<div class="done">

			</div>
		<div class="text">
	<img src='https://res.cloudinary.com/alpja/image/upload/v1704040296/rider_2_1_kmypsp.png' alt='bb'/>
			<p color='#A1A1A1' className='text1'>Thank you for choosing our services! Your order has been successfully
                 placed and is now being processed. We appreciate your trust in us and look forward to serving you.
			</p>
			</div>
            <button type="button" class="btn btn-lg text-light"
          onClick={()=>navigate('/')}
          style={{
background: '#E74C1B',
width: '255px',

padding: '12px 24px',
borderRadius: '50px',
}}>Return Home</button>
</div>


</div>

    </div>
        
 
</>
  )
}
