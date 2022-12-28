import React from 'react'

const Header = ({ title }) => {
    return (
        <div className=' text-primary-dark font-semibold  text-3xl tracking-wider '>
            {title.toUpperCase()}
        </div>
    )
}

export default Header