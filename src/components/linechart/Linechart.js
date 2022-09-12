import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Linechart = () => {
  const Linechartdata = [
    {
      "id": "japan",
      "color": "hsl(194, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 248
        },
        {
          "x": "helicopter",
          "y": 146
        },
        {
          "x": "boat",
          "y": 217
        },
        {
          "x": "train",
          "y": 278
        },
        {
          "x": "subway",
          "y": 149
        },
        {
          "x": "bus",
          "y": 142
        },
        {
          "x": "car",
          "y": 53
        },
        {
          "x": "moto",
          "y": 78
        },
        {
          "x": "bicycle",
          "y": 242
        },
        {
          "x": "horse",
          "y": 196
        },
        {
          "x": "skateboard",
          "y": 71
        },
        {
          "x": "others",
          "y": 67
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(126, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 245
        },
        {
          "x": "helicopter",
          "y": 43
        },
        {
          "x": "boat",
          "y": 198
        },
        {
          "x": "train",
          "y": 283
        },
        {
          "x": "subway",
          "y": 288
        },
        {
          "x": "bus",
          "y": 158
        },
        {
          "x": "car",
          "y": 122
        },
        {
          "x": "moto",
          "y": 60
        },
        {
          "x": "bicycle",
          "y": 296
        },
        {
          "x": "horse",
          "y": 248
        },
        {
          "x": "skateboard",
          "y": 177
        },
        {
          "x": "others",
          "y": 40
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(213, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 194
        },
        {
          "x": "helicopter",
          "y": 273
        },
        {
          "x": "boat",
          "y": 232
        },
        {
          "x": "train",
          "y": 127
        },
        {
          "x": "subway",
          "y": 208
        },
        {
          "x": "bus",
          "y": 128
        },
        {
          "x": "car",
          "y": 99
        },
        {
          "x": "moto",
          "y": 98
        },
        {
          "x": "bicycle",
          "y": 270
        },
        {
          "x": "horse",
          "y": 105
        },
        {
          "x": "skateboard",
          "y": 70
        },
        {
          "x": "others",
          "y": 58
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(232, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 254
        },
        {
          "x": "helicopter",
          "y": 148
        },
        {
          "x": "boat",
          "y": 181
        },
        {
          "x": "train",
          "y": 132
        },
        {
          "x": "subway",
          "y": 259
        },
        {
          "x": "bus",
          "y": 166
        },
        {
          "x": "car",
          "y": 138
        },
        {
          "x": "moto",
          "y": 39
        },
        {
          "x": "bicycle",
          "y": 232
        },
        {
          "x": "horse",
          "y": 227
        },
        {
          "x": "skateboard",
          "y": 88
        },
        {
          "x": "others",
          "y": 221
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(309, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 134
        },
        {
          "x": "boat",
          "y": 186
        },
        {
          "x": "train",
          "y": 62
        },
        {
          "x": "subway",
          "y": 277
        },
        {
          "x": "bus",
          "y": 51
        },
        {
          "x": "car",
          "y": 212
        },
        {
          "x": "moto",
          "y": 206
        },
        {
          "x": "bicycle",
          "y": 204
        },
        {
          "x": "horse",
          "y": 105
        },
        {
          "x": "skateboard",
          "y": 279
        },
        {
          "x": "others",
          "y": 86
        }
      ]
    }
  ]

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsiveLine = ({ data /* see data tab */ }) => (
      <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
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
                <MyResponsiveLine
                    data={Linechartdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Linechart