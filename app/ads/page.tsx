import React from 'react'
import Outbrain from '@/components/ads/outbrain'

const page = () => {
  return (
    <div>
       <aside className="max-w-7xl mx-auto">
                    <div
                      className="OUTBRAIN outbrain-desktop"
                      data-widget-id="AR_2"
                    ></div>
                    <div
                      className="OUTBRAIN outbrain-mobile"
                      data-widget-id="CRMB_2"
                    ></div>
                  </aside>


                  <aside className="max-w-7xl mx-auto">
                    <div
                      className="OUTBRAIN outbrain-desktop"
                      data-widget-id="AR_1"
                    ></div>
                    <div
                      className="OUTBRAIN outbrain-mobile"
                      data-widget-id="CRMB_1"
                    ></div>
                  </aside>


                  <Outbrain/>
    </div>
  )
}

export default page
