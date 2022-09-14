import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveStream } from '@nivo/stream'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Stream = () => {
  const Streamdata = [
    {
      "Raoul": 83,
      "Josiane": 106,
      "Marcel": 121,
      "René": 176,
      "Paul": 146,
      "Jacques": 176
    },
    {
      "Raoul": 57,
      "Josiane": 107,
      "Marcel": 106,
      "René": 197,
      "Paul": 164,
      "Jacques": 126
    },
    {
      "Raoul": 84,
      "Josiane": 30,
      "Marcel": 165,
      "René": 110,
      "Paul": 93,
      "Jacques": 84
    },
    {
      "Raoul": 134,
      "Josiane": 60,
      "Marcel": 20,
      "René": 130,
      "Paul": 28,
      "Jacques": 131
    },
    {
      "Raoul": 179,
      "Josiane": 12,
      "Marcel": 24,
      "René": 37,
      "Paul": 125,
      "Jacques": 98
    },
    {
      "Raoul": 20,
      "Josiane": 100,
      "Marcel": 162,
      "René": 121,
      "Paul": 11,
      "Jacques": 197
    },
    {
      "Raoul": 63,
      "Josiane": 31,
      "Marcel": 134,
      "René": 128,
      "Paul": 66,
      "Jacques": 165
    },
    {
      "Raoul": 144,
      "Josiane": 147,
      "Marcel": 71,
      "René": 169,
      "Paul": 160,
      "Jacques": 158
    },
    {
      "Raoul": 152,
      "Josiane": 107,
      "Marcel": 135,
      "René": 168,
      "Paul": 190,
      "Jacques": 90
    }
  ]

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsiveStream = ({ data /* see data tab */ }) => (
      <ResponsiveStream
          data={data}
          keys={[
              'Raoul',
              'Josiane',
              'Marcel',
              'René',
              'Paul',
              'Jacques'
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: 36
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: -40
          }}
          enableGridX={true}
          enableGridY={false}
          offsetType="silhouette"
          colors={{ scheme: 'nivo' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#2c998f',
                  size: 4,
                  padding: 2,
                  stagger: true
              },
              {
                  id: 'squares',
                  type: 'patternSquares',
                  background: 'inherit',
                  color: '#e4c912',
                  size: 6,
                  padding: 2,
                  stagger: true
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'Paul'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'Marcel'
                  },
                  id: 'squares'
              }
          ]}
          dotSize={8}
          dotColor={{ from: 'color' }}
          dotBorderWidth={2}
          dotBorderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.7
                  ]
              ]
          }}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 100,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: '#999999',
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000000'
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
                <MyResponsiveStream
                    data={Streamdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Stream