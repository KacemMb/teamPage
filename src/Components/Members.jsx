import React from 'react'
import MemberCard from './MemberCard'
import '../Styles/Members.css'

const Members = () => {
  return (
    <div className='Members'>
      <div className='memberList'>
        <MemberCard imageUrl="./Images/fatma.jpeg" Name='Fatma Ezzahra' Post='Frontend Developer' eMail='email@email.com' />
        <MemberCard imageUrl='./Images/imaag.jpg' Name='Gassoum' post='fullstack developer' eMail='mqlsdkjfq@gmail.com' />
        <MemberCard imageUrl='./Images/viejo.jpeg' Name='viejo bassoumi' post='fullstack developer' eMail='amlkej@gmail.com'/>
      </div>
      <div className='memberCV'>
        
      </div>
    </div>
  )
}

export default Members
//{imageUrl,Name,Post,eMail}