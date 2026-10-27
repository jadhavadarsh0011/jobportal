
import React, { useEffect, useState } from 'react'

const Api = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("companyInfo.json")
            const result = await api.json()
            setData(result)
        }

        fetchData()
    }, [])

    return (
        <>
            <h1>IT & Software</h1>

            {/* <h2>Total Users: {data.filter((user) => user.role === "Software Developer").length}</h2> */}
            <div className='filds'>
                  {data.filter((user) => user.role === "Software Developer").map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>companyName: {user.companyName}</p>
                    <p>role: {user.role}</p>
                    <p>interviewPlace: {user.interviewPlace}</p>
                    <p>packageLpa: {user.packageLpa}</p>
                    <p>location: {user.location}</p>
                    <p>mode: {user.mode}</p>
                    <hr />
                </div>
            ))}

            </div>
          
        </>
    )
}

export default Api
