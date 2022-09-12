import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveRadar } from '@nivo/radar'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Radar = () => {
  const Radardata = [
    {
      "taste": "fruity",
      "chardonay": 23,
      "carmenere": 93,
      "syrah": 110
    },
    {
      "taste": "bitter",
      "chardonay": 98,
      "carmenere": 25,
      "syrah": 48
    },
    {
      "taste": "heavy",
      "chardonay": 24,
      "carmenere": 20,
      "syrah": 118
    },
    {
      "taste": "strong",
      "chardonay": 51,
      "carmenere": 77,
      "syrah": 92
    },
    {
      "taste": "sunny",
      "chardonay": 25,
      "carmenere": 109,
      "syrah": 74
    }
  ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data /* see data tab */ }) => (
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

  return (
    <>
        <CCard>
            <CCardHeader>
                {/* <CRow>
                    <CCol sm={6}>
                    <h4>Nivo Pie Graph</h4>
                    </CCol>
                    <CCol sm={3}>
                        <CButtonGroup>
                            {['Graph', 'Data'].map( (value) => (
                                <CButton 
                                color='outline-secondary'
                                active={value === viewType}
                                onClick={() => setViewType(value)}
                                key={value}>
                                    {value}
                                </CButton>
                            ))}
                        </CButtonGroup>
                    </CCol>
                    <CCol sm={3}>
                        <CButtonGroup>
                            {['horizontal', 'vertical'].map( (value) => (
                                <CButton 
                                color='outline-secondary'
                                active={value === vertOrHor}
                                onClick={() => setVertOrHor(value.toLowerCase())}
                                key={value}>
                                    {value}
                                </CButton>
                            ))}
                        </CButtonGroup>
                    </CCol>
                </CRow> */}
                
            </CCardHeader>
            <CCardBody style={{height:'600px'}}>
                <MyResponsiveRadar
                    data={Radardata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Radar