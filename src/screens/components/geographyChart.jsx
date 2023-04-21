import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData as data } from '../../data/mockData';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { geoFeatures } from '../../data/mockGeoFeatures';
const GeographyChart=({isdashboard=false})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (
<ResponsiveChoropleth
        data={data}
        features={geoFeatures.features}
        theme={{
            tooltip: {
                container: {
                  background: colors.primary[400],
                  color: colors.primary[100],
                },
              },
        }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isdashboard?40:150}
        projectionTranslation={isdashboard?[0.49,0.6]:[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
       
        borderWidth={1.5}
        borderColor="#152538"
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
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={
            isdashboard?undefined:[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.primary[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
}
export default GeographyChart;