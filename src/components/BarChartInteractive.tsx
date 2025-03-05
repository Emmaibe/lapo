import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    ChartConfig,
    ChartContainer, ChartLegend, ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart"

const chartData = [
    { date: "May", personalized: 10, instant: 36 },
    { date: "Jun", personalized: 20, instant: 45 },
    { date: "Jul", personalized: 6, instant: 19 },
    { date: "Aug", personalized: 8, instant: 52 },
    { date: "Sep", personalized: 10, instant: 35 },
    { date: "Oct", personalized: 20, instant: 62 },
    { date: "Nov", personalized: 10, instant: 58 },
]

const chartConfig = {
    instant: {
        label: "Instant",
        color: "#B2DDFF",
    },
    personalized: {
        label: "Personalized",
        color: "#014DAF",
    },
} satisfies ChartConfig

export function BarChartComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-medium max-sm:text-base">Monthly Insurance</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value}`}
                            tickCount={6}
                        />
                        <CartesianGrid vertical={false} stroke={"#DCDCDC"} />
                        <Bar
                            dataKey="personalized"
                            stackId="a"
                            fill="var(--color-personalized)"
                            radius={[0, 0, 0, 0]}
                            barSize={30}
                        />
                        <Bar
                            dataKey="instant"
                            stackId="a"
                            fill="var(--color-instant)"
                            radius={[8, 8, 0, 0]}
                            barSize={30}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent labelKey="activities" indicator="line" />
                            }
                            cursor={false}
                            defaultIndex={1}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
