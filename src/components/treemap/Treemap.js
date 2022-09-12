import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveTreeMap } from '@nivo/treemap'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Treemap = () => {
  const Treemapdata = {
    "name": "nivo",
    "color": "hsl(299, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(219, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(53, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(355, 70%, 50%)",
                "loc": 123229
              },
              {
                "name": "xAxis",
                "color": "hsl(282, 70%, 50%)",
                "loc": 97229
              },
              {
                "name": "yAxis",
                "color": "hsl(217, 70%, 50%)",
                "loc": 70183
              },
              {
                "name": "layers",
                "color": "hsl(156, 70%, 50%)",
                "loc": 149686
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(239, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(255, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(158, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(252, 70%, 50%)",
                        "loc": 4544
                      },
                      {
                        "name": "slices",
                        "color": "hsl(322, 70%, 50%)",
                        "loc": 72209
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(217, 70%, 50%)",
                        "loc": 44348
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(272, 70%, 50%)",
                    "loc": 119036
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(180, 70%, 50%)",
                    "loc": 6088
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(68, 70%, 50%)",
                "loc": 84443
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(219, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(200, 70%, 50%)",
            "loc": 146519
          },
          {
            "name": "hsl",
            "color": "hsl(282, 70%, 50%)",
            "loc": 131803
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(208, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(145, 70%, 50%)",
            "loc": 60077
          },
          {
            "name": "resetClock",
            "color": "hsl(343, 70%, 50%)",
            "loc": 94962
          },
          {
            "name": "noop",
            "color": "hsl(130, 70%, 50%)",
            "loc": 134218
          },
          {
            "name": "tick",
            "color": "hsl(16, 70%, 50%)",
            "loc": 30865
          },
          {
            "name": "forceGC",
            "color": "hsl(225, 70%, 50%)",
            "loc": 82932
          },
          {
            "name": "stackTrace",
            "color": "hsl(321, 70%, 50%)",
            "loc": 165579
          },
          {
            "name": "dbg",
            "color": "hsl(184, 70%, 50%)",
            "loc": 140781
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(120, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(115, 70%, 50%)",
            "loc": 77846
          },
          {
            "name": "city",
            "color": "hsl(70, 70%, 50%)",
            "loc": 140763
          },
          {
            "name": "animal",
            "color": "hsl(327, 70%, 50%)",
            "loc": 49185
          },
          {
            "name": "movie",
            "color": "hsl(123, 70%, 50%)",
            "loc": 62860
          },
          {
            "name": "user",
            "color": "hsl(224, 70%, 50%)",
            "loc": 51193
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(284, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(85, 70%, 50%)",
            "loc": 61379
          },
          {
            "name": "intersect",
            "color": "hsl(87, 70%, 50%)",
            "loc": 149957
          },
          {
            "name": "merge",
            "color": "hsl(262, 70%, 50%)",
            "loc": 132720
          },
          {
            "name": "reverse",
            "color": "hsl(38, 70%, 50%)",
            "loc": 138169
          },
          {
            "name": "toArray",
            "color": "hsl(104, 70%, 50%)",
            "loc": 148209
          },
          {
            "name": "toObject",
            "color": "hsl(198, 70%, 50%)",
            "loc": 20172
          },
          {
            "name": "fromCSV",
            "color": "hsl(136, 70%, 50%)",
            "loc": 162370
          },
          {
            "name": "slice",
            "color": "hsl(8, 70%, 50%)",
            "loc": 104951
          },
          {
            "name": "append",
            "color": "hsl(11, 70%, 50%)",
            "loc": 192188
          },
          {
            "name": "prepend",
            "color": "hsl(110, 70%, 50%)",
            "loc": 165284
          },
          {
            "name": "shuffle",
            "color": "hsl(302, 70%, 50%)",
            "loc": 140278
          },
          {
            "name": "pick",
            "color": "hsl(31, 70%, 50%)",
            "loc": 55815
          },
          {
            "name": "plouc",
            "color": "hsl(18, 70%, 50%)",
            "loc": 80752
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(167, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(108, 70%, 50%)",
            "loc": 155195
          },
          {
            "name": "slugify",
            "color": "hsl(0, 70%, 50%)",
            "loc": 167405
          },
          {
            "name": "snakeCase",
            "color": "hsl(115, 70%, 50%)",
            "loc": 100682
          },
          {
            "name": "camelCase",
            "color": "hsl(174, 70%, 50%)",
            "loc": 114017
          },
          {
            "name": "repeat",
            "color": "hsl(256, 70%, 50%)",
            "loc": 126938
          },
          {
            "name": "padLeft",
            "color": "hsl(290, 70%, 50%)",
            "loc": 171504
          },
          {
            "name": "padRight",
            "color": "hsl(343, 70%, 50%)",
            "loc": 188067
          },
          {
            "name": "sanitize",
            "color": "hsl(347, 70%, 50%)",
            "loc": 174861
          },
          {
            "name": "ploucify",
            "color": "hsl(253, 70%, 50%)",
            "loc": 109081
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(22, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(219, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(117, 70%, 50%)",
                "loc": 181136
              },
              {
                "name": "HOWDY",
                "color": "hsl(330, 70%, 50%)",
                "loc": 172849
              },
              {
                "name": "aloha",
                "color": "hsl(335, 70%, 50%)",
                "loc": 70446
              },
              {
                "name": "AHOY",
                "color": "hsl(111, 70%, 50%)",
                "loc": 143267
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(321, 70%, 50%)",
            "loc": 56974
          },
          {
            "name": "path",
            "color": "hsl(28, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(356, 70%, 50%)",
                "loc": 56076
              },
              {
                "name": "pathB",
                "color": "hsl(52, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(96, 70%, 50%)",
                    "loc": 77130
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(321, 70%, 50%)",
                    "loc": 194502
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(2, 70%, 50%)",
                    "loc": 90974
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(164, 70%, 50%)",
                    "loc": 75805
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(193, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(14, 70%, 50%)",
                    "loc": 150024
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(77, 70%, 50%)",
                    "loc": 85836
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(68, 70%, 50%)",
                    "loc": 16927
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(243, 70%, 50%)",
                    "loc": 128175
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(14, 70%, 50%)",
                    "loc": 78520
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(190, 70%, 50%)",
                    "loc": 99848
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(331, 70%, 50%)",
                    "loc": 70973
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(71, 70%, 50%)",
                    "loc": 18568
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(346, 70%, 50%)",
                    "loc": 147638
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
  const MyResponsiveTreeMap = ({ data /* see data tab */ }) => (
      <ResponsiveTreeMap
          data={data}
          identity="name"
          value="loc"
          valueFormat=".02s"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.2
                  ]
              ]
          }}
          parentLabelPosition="left"
          parentLabelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      2
                  ]
              ]
          }}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.1
                  ]
              ]
          }}
          motionConfig="molasses"
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
                <MyResponsiveTreeMap
                    data={Treemapdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Treemap