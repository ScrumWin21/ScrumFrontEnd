import React from 'react'

//Images
import line from "../../images/homeImages/sqiggleLine.svg"
import beximlogo from "../../images/homeImages/BeximLogo.svg"
import beximman from "../../images/homeImages/BeximMan.svg"
import lightonlogo from "../../images/homeImages/LightonLogo.svg"
import lightonwoman from "../../images/homeImages/LightonWoman.svg"
import rosimologo from "../../images/homeImages/RosimoLogo.svg"
import rosimofeet from "../../images/homeImages/RosimoFeet.svg"

const homeShowcaseEight = () => {
  return (
    <>
        <div className='bg-S8'>
            <div className='ContainerRegular'>
                <div className='S8Headers'>
                    <div className='S8Header'>
                        <span id='S8Top'>TOP</span> 
                        <span id='S8Sellers'>SELLERS</span>
                    </div>
                    <img src={line} />
                    <p>Check out our weekly top sellers in all categories</p>
                </div>
                <div className='S8Content'>
                    <div className='S8LeftContent'>
                        <img id='beximlogo' src={beximlogo} alt="" />
                        <img src={beximman} alt="" />
                        <div className='S8ContentFooters'>
                            <p>Men's denim shirts full</p>
                        </div>
                    </div>
                    <div className='S8RightContent'>
                        <div className='S8RightTopContent'>
                            <img id='lightonlogo' src={lightonlogo} alt="" />
                            <img src={lightonwoman} alt="" />
                                <div className='S8ContentFooters'>
                                    <p>Women's leather bag and shoe</p>
                                </div>
                        </div>
                        <div className='S8RightBottomContent'>
                        <img id='rosimologo' src={rosimologo} alt="" />
                        <img src={rosimofeet} alt="" />
                        <div className='S8ContentFooters'>
                            <p>Men's sneakers</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default homeShowcaseEight