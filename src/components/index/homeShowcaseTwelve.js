import React from 'react'

//Images
import bexim from '../../images/homeImages/Bexim.svg'
import lighton from '../../images/homeImages/Lighton.svg'
import dismis from '../../images/homeImages/Dismis.svg'
import rosimo from '../../images/homeImages/Rosimo.svg'
import dallas from '../../images/homeImages/Dallas.svg'


const homeShowcaseTwelve = () => {
  return (
    <>
        <div className='bg-S12'>
            <div className='ContainerRegular'>
                <div className='companies'>
                    <img src={bexim} alt="bexim" />
                    <img src={lighton} alt="lighton" />
                    <img src={dismis} alt="dismis" />
                    <img src={rosimo} alt="rosimo" />
                    <img src={dallas} alt="dallas" />
                </div>
            </div>
        </div>
    </>
  )
}

export default homeShowcaseTwelve