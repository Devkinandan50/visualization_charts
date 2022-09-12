import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Scatterplot = () => {
  const Scatterplotdata = [
    {
      "id": "group A",
      "data": [
        {
          "x": 24,
          "y": 40
        },
        {
          "x": 31,
          "y": 115
        },
        {
          "x": 48,
          "y": 58
        },
        {
          "x": 58,
          "y": 91
        },
        {
          "x": 70,
          "y": 89
        },
        {
          "x": 71,
          "y": 9
        },
        {
          "x": 98,
          "y": 1
        },
        {
          "x": 55,
          "y": 34
        },
        {
          "x": 52,
          "y": 70
        },
        {
          "x": 69,
          "y": 117
        },
        {
          "x": 84,
          "y": 31
        },
        {
          "x": 12,
          "y": 109
        },
        {
          "x": 61,
          "y": 100
        },
        {
          "x": 4,
          "y": 55
        },
        {
          "x": 51,
          "y": 101
        },
        {
          "x": 9,
          "y": 100
        },
        {
          "x": 91,
          "y": 93
        },
        {
          "x": 3,
          "y": 29
        },
        {
          "x": 96,
          "y": 67
        },
        {
          "x": 52,
          "y": 32
        },
        {
          "x": 32,
          "y": 58
        },
        {
          "x": 46,
          "y": 95
        },
        {
          "x": 37,
          "y": 38
        },
        {
          "x": 68,
          "y": 51
        },
        {
          "x": 19,
          "y": 89
        },
        {
          "x": 88,
          "y": 10
        },
        {
          "x": 58,
          "y": 6
        },
        {
          "x": 9,
          "y": 73
        },
        {
          "x": 3,
          "y": 99
        },
        {
          "x": 44,
          "y": 64
        },
        {
          "x": 50,
          "y": 39
        },
        {
          "x": 78,
          "y": 2
        },
        {
          "x": 33,
          "y": 24
        },
        {
          "x": 33,
          "y": 3
        },
        {
          "x": 47,
          "y": 113
        },
        {
          "x": 52,
          "y": 34
        },
        {
          "x": 24,
          "y": 120
        },
        {
          "x": 78,
          "y": 59
        },
        {
          "x": 13,
          "y": 15
        },
        {
          "x": 23,
          "y": 103
        },
        {
          "x": 67,
          "y": 88
        },
        {
          "x": 12,
          "y": 65
        },
        {
          "x": 90,
          "y": 67
        },
        {
          "x": 38,
          "y": 86
        },
        {
          "x": 14,
          "y": 41
        },
        {
          "x": 80,
          "y": 25
        },
        {
          "x": 62,
          "y": 11
        },
        {
          "x": 4,
          "y": 17
        },
        {
          "x": 62,
          "y": 88
        },
        {
          "x": 25,
          "y": 109
        }
      ]
    },
    {
      "id": "group B",
      "data": [
        {
          "x": 74,
          "y": 40
        },
        {
          "x": 42,
          "y": 41
        },
        {
          "x": 28,
          "y": 44
        },
        {
          "x": 16,
          "y": 85
        },
        {
          "x": 0,
          "y": 87
        },
        {
          "x": 47,
          "y": 24
        },
        {
          "x": 32,
          "y": 79
        },
        {
          "x": 10,
          "y": 8
        },
        {
          "x": 91,
          "y": 31
        },
        {
          "x": 48,
          "y": 119
        },
        {
          "x": 94,
          "y": 76
        },
        {
          "x": 79,
          "y": 13
        },
        {
          "x": 20,
          "y": 86
        },
        {
          "x": 71,
          "y": 55
        },
        {
          "x": 1,
          "y": 104
        },
        {
          "x": 76,
          "y": 117
        },
        {
          "x": 72,
          "y": 74
        },
        {
          "x": 2,
          "y": 17
        },
        {
          "x": 34,
          "y": 77
        },
        {
          "x": 29,
          "y": 51
        },
        {
          "x": 68,
          "y": 101
        },
        {
          "x": 75,
          "y": 6
        },
        {
          "x": 88,
          "y": 95
        },
        {
          "x": 41,
          "y": 49
        },
        {
          "x": 59,
          "y": 79
        },
        {
          "x": 30,
          "y": 69
        },
        {
          "x": 93,
          "y": 106
        },
        {
          "x": 60,
          "y": 67
        },
        {
          "x": 6,
          "y": 22
        },
        {
          "x": 99,
          "y": 95
        },
        {
          "x": 62,
          "y": 102
        },
        {
          "x": 3,
          "y": 65
        },
        {
          "x": 38,
          "y": 5
        },
        {
          "x": 24,
          "y": 58
        },
        {
          "x": 13,
          "y": 102
        },
        {
          "x": 15,
          "y": 52
        },
        {
          "x": 70,
          "y": 16
        },
        {
          "x": 20,
          "y": 25
        },
        {
          "x": 71,
          "y": 56
        },
        {
          "x": 100,
          "y": 48
        },
        {
          "x": 53,
          "y": 91
        },
        {
          "x": 79,
          "y": 69
        },
        {
          "x": 52,
          "y": 93
        },
        {
          "x": 64,
          "y": 78
        },
        {
          "x": 22,
          "y": 51
        },
        {
          "x": 61,
          "y": 2
        },
        {
          "x": 2,
          "y": 49
        },
        {
          "x": 15,
          "y": 107
        },
        {
          "x": 53,
          "y": 63
        },
        {
          "x": 32,
          "y": 88
        }
      ]
    },
    {
      "id": "group C",
      "data": [
        {
          "x": 63,
          "y": 71
        },
        {
          "x": 45,
          "y": 82
        },
        {
          "x": 84,
          "y": 2
        },
        {
          "x": 42,
          "y": 38
        },
        {
          "x": 29,
          "y": 93
        },
        {
          "x": 25,
          "y": 26
        },
        {
          "x": 0,
          "y": 68
        },
        {
          "x": 98,
          "y": 64
        },
        {
          "x": 52,
          "y": 38
        },
        {
          "x": 89,
          "y": 53
        },
        {
          "x": 9,
          "y": 97
        },
        {
          "x": 0,
          "y": 87
        },
        {
          "x": 18,
          "y": 16
        },
        {
          "x": 77,
          "y": 97
        },
        {
          "x": 100,
          "y": 24
        },
        {
          "x": 100,
          "y": 87
        },
        {
          "x": 54,
          "y": 110
        },
        {
          "x": 86,
          "y": 14
        },
        {
          "x": 77,
          "y": 101
        },
        {
          "x": 73,
          "y": 52
        },
        {
          "x": 86,
          "y": 87
        },
        {
          "x": 89,
          "y": 0
        },
        {
          "x": 30,
          "y": 84
        },
        {
          "x": 80,
          "y": 10
        },
        {
          "x": 46,
          "y": 102
        },
        {
          "x": 53,
          "y": 83
        },
        {
          "x": 100,
          "y": 109
        },
        {
          "x": 31,
          "y": 94
        },
        {
          "x": 12,
          "y": 57
        },
        {
          "x": 40,
          "y": 93
        },
        {
          "x": 39,
          "y": 6
        },
        {
          "x": 55,
          "y": 101
        },
        {
          "x": 53,
          "y": 38
        },
        {
          "x": 18,
          "y": 109
        },
        {
          "x": 22,
          "y": 9
        },
        {
          "x": 26,
          "y": 112
        },
        {
          "x": 60,
          "y": 39
        },
        {
          "x": 98,
          "y": 80
        },
        {
          "x": 44,
          "y": 7
        },
        {
          "x": 67,
          "y": 84
        },
        {
          "x": 89,
          "y": 91
        },
        {
          "x": 96,
          "y": 103
        },
        {
          "x": 99,
          "y": 87
        },
        {
          "x": 87,
          "y": 73
        },
        {
          "x": 76,
          "y": 107
        },
        {
          "x": 73,
          "y": 37
        },
        {
          "x": 77,
          "y": 87
        },
        {
          "x": 55,
          "y": 19
        },
        {
          "x": 74,
          "y": 58
        },
        {
          "x": 62,
          "y": 23
        }
      ]
    },
    {
      "id": "group D",
      "data": [
        {
          "x": 48,
          "y": 42
        },
        {
          "x": 90,
          "y": 105
        },
        {
          "x": 24,
          "y": 4
        },
        {
          "x": 83,
          "y": 69
        },
        {
          "x": 75,
          "y": 29
        },
        {
          "x": 90,
          "y": 39
        },
        {
          "x": 44,
          "y": 33
        },
        {
          "x": 4,
          "y": 43
        },
        {
          "x": 53,
          "y": 111
        },
        {
          "x": 62,
          "y": 69
        },
        {
          "x": 16,
          "y": 119
        },
        {
          "x": 15,
          "y": 97
        },
        {
          "x": 53,
          "y": 90
        },
        {
          "x": 12,
          "y": 116
        },
        {
          "x": 86,
          "y": 4
        },
        {
          "x": 8,
          "y": 50
        },
        {
          "x": 1,
          "y": 22
        },
        {
          "x": 98,
          "y": 11
        },
        {
          "x": 89,
          "y": 12
        },
        {
          "x": 43,
          "y": 54
        },
        {
          "x": 2,
          "y": 90
        },
        {
          "x": 45,
          "y": 38
        },
        {
          "x": 16,
          "y": 13
        },
        {
          "x": 9,
          "y": 66
        },
        {
          "x": 60,
          "y": 86
        },
        {
          "x": 12,
          "y": 28
        },
        {
          "x": 64,
          "y": 115
        },
        {
          "x": 63,
          "y": 7
        },
        {
          "x": 13,
          "y": 103
        },
        {
          "x": 84,
          "y": 12
        },
        {
          "x": 61,
          "y": 74
        },
        {
          "x": 33,
          "y": 91
        },
        {
          "x": 77,
          "y": 56
        },
        {
          "x": 99,
          "y": 108
        },
        {
          "x": 10,
          "y": 82
        },
        {
          "x": 38,
          "y": 29
        },
        {
          "x": 54,
          "y": 83
        },
        {
          "x": 71,
          "y": 82
        },
        {
          "x": 48,
          "y": 87
        },
        {
          "x": 80,
          "y": 80
        },
        {
          "x": 63,
          "y": 115
        },
        {
          "x": 32,
          "y": 116
        },
        {
          "x": 78,
          "y": 72
        },
        {
          "x": 82,
          "y": 2
        },
        {
          "x": 90,
          "y": 56
        },
        {
          "x": 7,
          "y": 87
        },
        {
          "x": 13,
          "y": 51
        },
        {
          "x": 75,
          "y": 108
        },
        {
          "x": 79,
          "y": 81
        },
        {
          "x": 70,
          "y": 99
        }
      ]
    },
    {
      "id": "group E",
      "data": [
        {
          "x": 67,
          "y": 34
        },
        {
          "x": 63,
          "y": 108
        },
        {
          "x": 22,
          "y": 60
        },
        {
          "x": 10,
          "y": 17
        },
        {
          "x": 58,
          "y": 36
        },
        {
          "x": 20,
          "y": 84
        },
        {
          "x": 35,
          "y": 49
        },
        {
          "x": 78,
          "y": 62
        },
        {
          "x": 80,
          "y": 114
        },
        {
          "x": 67,
          "y": 56
        },
        {
          "x": 9,
          "y": 56
        },
        {
          "x": 35,
          "y": 44
        },
        {
          "x": 44,
          "y": 15
        },
        {
          "x": 35,
          "y": 8
        },
        {
          "x": 19,
          "y": 39
        },
        {
          "x": 25,
          "y": 47
        },
        {
          "x": 88,
          "y": 106
        },
        {
          "x": 50,
          "y": 48
        },
        {
          "x": 83,
          "y": 20
        },
        {
          "x": 61,
          "y": 98
        },
        {
          "x": 31,
          "y": 32
        },
        {
          "x": 81,
          "y": 75
        },
        {
          "x": 4,
          "y": 34
        },
        {
          "x": 48,
          "y": 68
        },
        {
          "x": 80,
          "y": 19
        },
        {
          "x": 54,
          "y": 38
        },
        {
          "x": 76,
          "y": 61
        },
        {
          "x": 12,
          "y": 55
        },
        {
          "x": 8,
          "y": 76
        },
        {
          "x": 60,
          "y": 40
        },
        {
          "x": 69,
          "y": 24
        },
        {
          "x": 72,
          "y": 31
        },
        {
          "x": 89,
          "y": 48
        },
        {
          "x": 46,
          "y": 87
        },
        {
          "x": 50,
          "y": 45
        },
        {
          "x": 21,
          "y": 117
        },
        {
          "x": 24,
          "y": 15
        },
        {
          "x": 6,
          "y": 21
        },
        {
          "x": 8,
          "y": 47
        },
        {
          "x": 13,
          "y": 109
        },
        {
          "x": 88,
          "y": 96
        },
        {
          "x": 34,
          "y": 65
        },
        {
          "x": 45,
          "y": 7
        },
        {
          "x": 41,
          "y": 44
        },
        {
          "x": 85,
          "y": 57
        },
        {
          "x": 68,
          "y": 50
        },
        {
          "x": 17,
          "y": 96
        },
        {
          "x": 56,
          "y": 71
        },
        {
          "x": 6,
          "y": 44
        },
        {
          "x": 26,
          "y": 46
        }
      ]
    }
  ]

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsiveScatterPlot = ({ data /* see data tab */ }) => (
      <ResponsiveScatterPlot
          data={data}
          margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          xFormat=">-.2f"
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          yFormat=">-.2f"
          blendMode="multiply"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'weight',
              legendPosition: 'middle',
              legendOffset: 46
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'size',
              legendPosition: 'middle',
              legendOffset: -60
          }}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 130,
                  translateY: 0,
                  itemWidth: 100,
                  itemHeight: 12,
                  itemsSpacing: 5,
                  itemDirection: 'left-to-right',
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
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
                <MyResponsiveScatterPlot
                    data={Scatterplotdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Scatterplot