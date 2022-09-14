import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'

const Barstack = () => {
  const Barstackdata = [
    {
      "country": "AD",
      "hot dog": 193,
      "hot dogColor": "hsl(157, 70%, 50%)",
      "burger": 157,
      "burgerColor": "hsl(96, 70%, 50%)",
      "sandwich": 193,
      "sandwichColor": "hsl(166, 70%, 50%)",
      "kebab": 167,
      "kebabColor": "hsl(315, 70%, 50%)",
      "fries": 21,
      "friesColor": "hsl(318, 70%, 50%)",
      "donut": 54,
      "donutColor": "hsl(47, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 36,
      "hot dogColor": "hsl(345, 70%, 50%)",
      "burger": 158,
      "burgerColor": "hsl(51, 70%, 50%)",
      "sandwich": 100,
      "sandwichColor": "hsl(15, 70%, 50%)",
      "kebab": 83,
      "kebabColor": "hsl(179, 70%, 50%)",
      "fries": 7,
      "friesColor": "hsl(319, 70%, 50%)",
      "donut": 121,
      "donutColor": "hsl(332, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 42,
      "hot dogColor": "hsl(84, 70%, 50%)",
      "burger": 179,
      "burgerColor": "hsl(297, 70%, 50%)",
      "sandwich": 171,
      "sandwichColor": "hsl(89, 70%, 50%)",
      "kebab": 65,
      "kebabColor": "hsl(24, 70%, 50%)",
      "fries": 44,
      "friesColor": "hsl(261, 70%, 50%)",
      "donut": 82,
      "donutColor": "hsl(59, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 53,
      "hot dogColor": "hsl(211, 70%, 50%)",
      "burger": 155,
      "burgerColor": "hsl(258, 70%, 50%)",
      "sandwich": 145,
      "sandwichColor": "hsl(24, 70%, 50%)",
      "kebab": 198,
      "kebabColor": "hsl(228, 70%, 50%)",
      "fries": 190,
      "friesColor": "hsl(8, 70%, 50%)",
      "donut": 31,
      "donutColor": "hsl(326, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 177,
      "hot dogColor": "hsl(281, 70%, 50%)",
      "burger": 80,
      "burgerColor": "hsl(62, 70%, 50%)",
      "sandwich": 75,
      "sandwichColor": "hsl(141, 70%, 50%)",
      "kebab": 144,
      "kebabColor": "hsl(47, 70%, 50%)",
      "fries": 112,
      "friesColor": "hsl(15, 70%, 50%)",
      "donut": 63,
      "donutColor": "hsl(24, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 61,
      "hot dogColor": "hsl(351, 70%, 50%)",
      "burger": 142,
      "burgerColor": "hsl(200, 70%, 50%)",
      "sandwich": 3,
      "sandwichColor": "hsl(207, 70%, 50%)",
      "kebab": 36,
      "kebabColor": "hsl(309, 70%, 50%)",
      "fries": 19,
      "friesColor": "hsl(192, 70%, 50%)",
      "donut": 160,
      "donutColor": "hsl(208, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 188,
      "hot dogColor": "hsl(32, 70%, 50%)",
      "burger": 106,
      "burgerColor": "hsl(346, 70%, 50%)",
      "sandwich": 181,
      "sandwichColor": "hsl(125, 70%, 50%)",
      "kebab": 28,
      "kebabColor": "hsl(69, 70%, 50%)",
      "fries": 121,
      "friesColor": "hsl(56, 70%, 50%)",
      "donut": 49,
      "donutColor": "hsl(105, 70%, 50%)"
    }
  ]


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
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
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
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
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
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
                <MyResponsiveBar
                    data={Barstackdata}
                     />
            </CCardBody>
        </CCard>
        </>
  )
}
export default Barstack