
import { ResponsiveLine } from '@nivo/line';
import { mockLineData as data } from '../../data/mockData';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
const LineChart=({isdashboard=false})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return(
<ResponsiveLine
        data={data}
        
        theme={{
            
            tooltip: {
              container: {
                background: colors.primary[400],
                color: colors.primary[100],
              },
            },
            axis: {
                ticks: {
                  text: {
                    fill: colors.primary[100],
                  },
                },
                legend:{
                    text:{
                        fill:colors.grey[100]
                    }
                },
              },
            
          }}
          color={isdashboard?{datum:"color"}:{scheme:"nivo"}}
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
            legend: isdashboard?undefined:'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isdashboard?undefined:'count',
            legendOffset: -40,
            legendPosition: 'middle',
           
         
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={
            isdashboard?undefined:[
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
                itemTextColor:colors.primary[100],
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemTextColor:colors.primary[100],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
}
export default LineChart;