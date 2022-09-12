import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveSunburst } from '@nivo/sunburst'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Sunburst = () => {
  const Sunburstdata = {
    "name": "nivo",
    "color": "hsl(81, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(313, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(8, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(258, 70%, 50%)",
                "loc": 122234
              },
              {
                "name": "xAxis",
                "color": "hsl(311, 70%, 50%)",
                "loc": 86788
              },
              {
                "name": "yAxis",
                "color": "hsl(67, 70%, 50%)",
                "loc": 185678
              },
              {
                "name": "layers",
                "color": "hsl(254, 70%, 50%)",
                "loc": 147861
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(112, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(269, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(239, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(340, 70%, 50%)",
                        "loc": 143289
                      },
                      {
                        "name": "slices",
                        "color": "hsl(86, 70%, 50%)",
                        "loc": 28109
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(290, 70%, 50%)",
                        "loc": 105146
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(55, 70%, 50%)",
                    "loc": 15418
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(87, 70%, 50%)",
                    "loc": 68743
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(135, 70%, 50%)",
                "loc": 60877
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(335, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(163, 70%, 50%)",
            "loc": 22574
          },
          {
            "name": "hsl",
            "color": "hsl(88, 70%, 50%)",
            "loc": 49749
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(185, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(30, 70%, 50%)",
            "loc": 17801
          },
          {
            "name": "resetClock",
            "color": "hsl(307, 70%, 50%)",
            "loc": 166435
          },
          {
            "name": "noop",
            "color": "hsl(248, 70%, 50%)",
            "loc": 195183
          },
          {
            "name": "tick",
            "color": "hsl(235, 70%, 50%)",
            "loc": 106381
          },
          {
            "name": "forceGC",
            "color": "hsl(48, 70%, 50%)",
            "loc": 155502
          },
          {
            "name": "stackTrace",
            "color": "hsl(193, 70%, 50%)",
            "loc": 41714
          },
          {
            "name": "dbg",
            "color": "hsl(259, 70%, 50%)",
            "loc": 195433
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(102, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(313, 70%, 50%)",
            "loc": 193882
          },
          {
            "name": "city",
            "color": "hsl(236, 70%, 50%)",
            "loc": 131730
          },
          {
            "name": "animal",
            "color": "hsl(243, 70%, 50%)",
            "loc": 176846
          },
          {
            "name": "movie",
            "color": "hsl(170, 70%, 50%)",
            "loc": 84863
          },
          {
            "name": "user",
            "color": "hsl(305, 70%, 50%)",
            "loc": 36785
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(35, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(6, 70%, 50%)",
            "loc": 167830
          },
          {
            "name": "intersect",
            "color": "hsl(339, 70%, 50%)",
            "loc": 121414
          },
          {
            "name": "merge",
            "color": "hsl(207, 70%, 50%)",
            "loc": 154776
          },
          {
            "name": "reverse",
            "color": "hsl(271, 70%, 50%)",
            "loc": 90017
          },
          {
            "name": "toArray",
            "color": "hsl(312, 70%, 50%)",
            "loc": 82251
          },
          {
            "name": "toObject",
            "color": "hsl(280, 70%, 50%)",
            "loc": 84169
          },
          {
            "name": "fromCSV",
            "color": "hsl(35, 70%, 50%)",
            "loc": 174421
          },
          {
            "name": "slice",
            "color": "hsl(269, 70%, 50%)",
            "loc": 170602
          },
          {
            "name": "append",
            "color": "hsl(218, 70%, 50%)",
            "loc": 70394
          },
          {
            "name": "prepend",
            "color": "hsl(50, 70%, 50%)",
            "loc": 194027
          },
          {
            "name": "shuffle",
            "color": "hsl(132, 70%, 50%)",
            "loc": 100901
          },
          {
            "name": "pick",
            "color": "hsl(170, 70%, 50%)",
            "loc": 52319
          },
          {
            "name": "plouc",
            "color": "hsl(223, 70%, 50%)",
            "loc": 141455
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(175, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(337, 70%, 50%)",
            "loc": 21623
          },
          {
            "name": "slugify",
            "color": "hsl(4, 70%, 50%)",
            "loc": 12161
          },
          {
            "name": "snakeCase",
            "color": "hsl(281, 70%, 50%)",
            "loc": 96206
          },
          {
            "name": "camelCase",
            "color": "hsl(238, 70%, 50%)",
            "loc": 92831
          },
          {
            "name": "repeat",
            "color": "hsl(360, 70%, 50%)",
            "loc": 4432
          },
          {
            "name": "padLeft",
            "color": "hsl(330, 70%, 50%)",
            "loc": 172725
          },
          {
            "name": "padRight",
            "color": "hsl(200, 70%, 50%)",
            "loc": 133248
          },
          {
            "name": "sanitize",
            "color": "hsl(207, 70%, 50%)",
            "loc": 10106
          },
          {
            "name": "ploucify",
            "color": "hsl(11, 70%, 50%)",
            "loc": 154868
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(15, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(305, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(235, 70%, 50%)",
                "loc": 87562
              },
              {
                "name": "HOWDY",
                "color": "hsl(154, 70%, 50%)",
                "loc": 125515
              },
              {
                "name": "aloha",
                "color": "hsl(101, 70%, 50%)",
                "loc": 33252
              },
              {
                "name": "AHOY",
                "color": "hsl(274, 70%, 50%)",
                "loc": 22369
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(26, 70%, 50%)",
            "loc": 61411
          },
          {
            "name": "path",
            "color": "hsl(157, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(132, 70%, 50%)",
                "loc": 64961
              },
              {
                "name": "pathB",
                "color": "hsl(184, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(133, 70%, 50%)",
                    "loc": 13703
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(198, 70%, 50%)",
                    "loc": 185494
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(80, 70%, 50%)",
                    "loc": 15069
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(77, 70%, 50%)",
                    "loc": 148676
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(97, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(201, 70%, 50%)",
                    "loc": 81812
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(78, 70%, 50%)",
                    "loc": 38489
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(291, 70%, 50%)",
                    "loc": 134476
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(287, 70%, 50%)",
                    "loc": 102026
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(302, 70%, 50%)",
                    "loc": 108957
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(321, 70%, 50%)",
                    "loc": 127874
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(228, 70%, 50%)",
                    "loc": 83044
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(241, 70%, 50%)",
                    "loc": 178936
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(222, 70%, 50%)",
                    "loc": 159678
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsiveSunburst = ({ data /* see data tab */ }) => (
    <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.1
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabel="id"
        arcLabelsRadiusOffset={0}
        arcLabelsSkipAngle={9}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.5'
                ]
            ]
        }}
        motionConfig="slow"
        transitionMode="centerRadius"
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
                <MyResponsiveSunburst
                    data={Sunburstdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Sunburst