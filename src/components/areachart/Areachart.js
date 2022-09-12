import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveAreaBump } from '@nivo/bump'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Areachart = () => {
  const Areachartdata = [
    {
      "id": "JavaScript",
      "data": [
        {
          "x": 2000,
          "y": 20
        },
        {
          "x": 2001,
          "y": 10
        },
        {
          "x": 2002,
          "y": 28
        },
        {
          "x": 2003,
          "y": 19
        },
        {
          "x": 2004,
          "y": 26
        },
        {
          "x": 2005,
          "y": 26
        }
      ]
    },
    {
      "id": "ReasonML",
      "data": [
        {
          "x": 2000,
          "y": 12
        },
        {
          "x": 2001,
          "y": 28
        },
        {
          "x": 2002,
          "y": 20
        },
        {
          "x": 2003,
          "y": 23
        },
        {
          "x": 2004,
          "y": 10
        },
        {
          "x": 2005,
          "y": 18
        }
      ]
    },
    {
      "id": "TypeScript",
      "data": [
        {
          "x": 2000,
          "y": 18
        },
        {
          "x": 2001,
          "y": 19
        },
        {
          "x": 2002,
          "y": 30
        },
        {
          "x": 2003,
          "y": 28
        },
        {
          "x": 2004,
          "y": 12
        },
        {
          "x": 2005,
          "y": 21
        }
      ]
    },
    {
      "id": "Elm",
      "data": [
        {
          "x": 2000,
          "y": 13
        },
        {
          "x": 2001,
          "y": 26
        },
        {
          "x": 2002,
          "y": 13
        },
        {
          "x": 2003,
          "y": 23
        },
        {
          "x": 2004,
          "y": 26
        },
        {
          "x": 2005,
          "y": 28
        }
      ]
    },
    {
      "id": "CoffeeScript",
      "data": [
        {
          "x": 2000,
          "y": 23
        },
        {
          "x": 2001,
          "y": 13
        },
        {
          "x": 2002,
          "y": 16
        },
        {
          "x": 2003,
          "y": 28
        },
        {
          "x": 2004,
          "y": 27
        },
        {
          "x": 2005,
          "y": 25
        }
      ]
    }
  ]


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveAreaBump = ({ data /* see data tab */ }) => (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'opacity',
                    '2.7'
                ]
            ]
        }}
        startLabel="id"
        startLabelPadding={19}
        startLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        endLabel="id"
        endLabelPadding={19}
        endLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.9'
                ]
            ]
        }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
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
                <MyResponsiveAreaBump
                    data={Areachartdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Areachart