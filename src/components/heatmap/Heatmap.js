import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveHeatMap } from '@nivo/heatmap'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Heatmap = () => {
  const Heatmapdata = [
    {
      "id": "Japan",
      "data": [
        {
          "x": "Train",
          "y": -3716
        },
        {
          "x": "Subway",
          "y": -89972
        },
        {
          "x": "Bus",
          "y": 86534
        },
        {
          "x": "Car",
          "y": -60685
        },
        {
          "x": "Boat",
          "y": 94044
        },
        {
          "x": "Moto",
          "y": 40625
        },
        {
          "x": "Moped",
          "y": -80578
        },
        {
          "x": "Bicycle",
          "y": 49619
        },
        {
          "x": "Others",
          "y": 69193
        }
      ]
    },
    {
      "id": "France",
      "data": [
        {
          "x": "Train",
          "y": -38732
        },
        {
          "x": "Subway",
          "y": -27052
        },
        {
          "x": "Bus",
          "y": 72627
        },
        {
          "x": "Car",
          "y": -41184
        },
        {
          "x": "Boat",
          "y": -98297
        },
        {
          "x": "Moto",
          "y": -59481
        },
        {
          "x": "Moped",
          "y": 4382
        },
        {
          "x": "Bicycle",
          "y": 51359
        },
        {
          "x": "Others",
          "y": -99588
        }
      ]
    },
    {
      "id": "US",
      "data": [
        {
          "x": "Train",
          "y": 32486
        },
        {
          "x": "Subway",
          "y": -61006
        },
        {
          "x": "Bus",
          "y": -95768
        },
        {
          "x": "Car",
          "y": -82770
        },
        {
          "x": "Boat",
          "y": 5855
        },
        {
          "x": "Moto",
          "y": 389
        },
        {
          "x": "Moped",
          "y": -84768
        },
        {
          "x": "Bicycle",
          "y": -55515
        },
        {
          "x": "Others",
          "y": -85443
        }
      ]
    },
    {
      "id": "Germany",
      "data": [
        {
          "x": "Train",
          "y": -33472
        },
        {
          "x": "Subway",
          "y": -23961
        },
        {
          "x": "Bus",
          "y": -60274
        },
        {
          "x": "Car",
          "y": -90793
        },
        {
          "x": "Boat",
          "y": -54394
        },
        {
          "x": "Moto",
          "y": 87106
        },
        {
          "x": "Moped",
          "y": 27028
        },
        {
          "x": "Bicycle",
          "y": -55759
        },
        {
          "x": "Others",
          "y": -93617
        }
      ]
    },
    {
      "id": "Norway",
      "data": [
        {
          "x": "Train",
          "y": 37284
        },
        {
          "x": "Subway",
          "y": -58574
        },
        {
          "x": "Bus",
          "y": -13772
        },
        {
          "x": "Car",
          "y": 49792
        },
        {
          "x": "Boat",
          "y": -88679
        },
        {
          "x": "Moto",
          "y": -57707
        },
        {
          "x": "Moped",
          "y": 73911
        },
        {
          "x": "Bicycle",
          "y": -16253
        },
        {
          "x": "Others",
          "y": 76516
        }
      ]
    },
    {
      "id": "Iceland",
      "data": [
        {
          "x": "Train",
          "y": -39681
        },
        {
          "x": "Subway",
          "y": 57481
        },
        {
          "x": "Bus",
          "y": 6943
        },
        {
          "x": "Car",
          "y": -60120
        },
        {
          "x": "Boat",
          "y": 1668
        },
        {
          "x": "Moto",
          "y": 55876
        },
        {
          "x": "Moped",
          "y": -60312
        },
        {
          "x": "Bicycle",
          "y": -29743
        },
        {
          "x": "Others",
          "y": -30759
        }
      ]
    },
    {
      "id": "UK",
      "data": [
        {
          "x": "Train",
          "y": -37146
        },
        {
          "x": "Subway",
          "y": 99380
        },
        {
          "x": "Bus",
          "y": -21382
        },
        {
          "x": "Car",
          "y": 60211
        },
        {
          "x": "Boat",
          "y": -5131
        },
        {
          "x": "Moto",
          "y": 59407
        },
        {
          "x": "Moped",
          "y": 58608
        },
        {
          "x": "Bicycle",
          "y": 40240
        },
        {
          "x": "Others",
          "y": 73455
        }
      ]
    },
    {
      "id": "Vietnam",
      "data": [
        {
          "x": "Train",
          "y": 89113
        },
        {
          "x": "Subway",
          "y": 87647
        },
        {
          "x": "Bus",
          "y": 93047
        },
        {
          "x": "Car",
          "y": -60361
        },
        {
          "x": "Boat",
          "y": -7292
        },
        {
          "x": "Moto",
          "y": 19328
        },
        {
          "x": "Moped",
          "y": -35039
        },
        {
          "x": "Bicycle",
          "y": 86070
        },
        {
          "x": "Others",
          "y": -55756
        }
      ]
    }
  ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveHeatMap = ({ data /* see data tab */ }) => (
    <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'diverging',
            scheme: 'red_yellow_blue',
            divergeAt: 0.5,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
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
                <MyResponsiveHeatMap
                    data={Heatmapdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Heatmap