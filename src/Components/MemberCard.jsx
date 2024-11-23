import React from 'react'
import '../Styles/MemberCard.css'
const MemberCard = ({imageUrl,Name,Post,eMail}) => {
  return (
    <div className='MemberCard'>
        <div className='MemberCardHead'>
            <img src={imageUrl} alt="" />
            <h2>{Name}</h2>
        </div>
        <div className='Contact'>
            <h3>{Post}</h3>
            <p>email: {eMail}</p>
        </div>
      
    </div>
  )
}

export default MemberCard
