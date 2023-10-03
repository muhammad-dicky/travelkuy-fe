'use client'
import React from 'react'

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {

    const handleClick = () => {
        alert(`user Id : ${userId}`)
    }


    return (
        <>

            <button onClick={handleClick}>View User Button</button>
        </>
    )
}

export default ViewUserButton;