import React from 'react';
import { select } from '../../constant'
import WhyChooseUsItems from './WhyChooseUsItems'
import styles from './WhyChooseUs.module.css'

const WhyChooseUs = () => {
    return(
        <div className={styles.mainChoose}>
            <h1 className={styles.us}>Почему выбирают нас:</h1>
        <div className={styles.chooseFlex}>
          {
              select.map((item,id)=> {
                  return(                                     
                      <WhyChooseUsItems
                      imgSelect={item.imgSelect}
                      title={item.title}
                      titleDesc={item.titleDesc}
                      />
                  )
                  
              })
          }
                  </div>
        </div>
    )    
            
}

export default WhyChooseUs;