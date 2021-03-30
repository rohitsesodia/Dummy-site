import react from 'react';
import './box.css'
import BoxInner from './box/box-inner';

function Box (){
    return (

        <div className="box_main">
            <div className="container">
            <h2>Props Uses</h2>
            <div className="row">
               <BoxInner name_user="Ram" user_images="/images/videobg-area.png" />
               <BoxInner name_user="Mohan"  user_images="/images/2.jpg" />
               <BoxInner name_user="Sumit" user_images="/images/videobg-area.png"   />
            </div>
            </div>
        </div>

    )


}
export default Box;