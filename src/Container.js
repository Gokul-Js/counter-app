import React from 'react'

const Container = () => {
  return (
    <div className ="form">
      <form>
       <input type="text" placeholder="Name" name="user_name" />
       <input type="text" placeholder="Subject" name="user_subject" />
       <input type="text" placeholder="Email" name="user_email" />
       <textarea rows="8" placeholder="Message" name="Message"/>
       <button>Submit</button>
      
     </form>
   </div>
    
  )
}
export default Container