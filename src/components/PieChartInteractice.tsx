import {Label, PolarRadiusAxis, RadialBar, RadialBarChart} from "recharts"

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
    {
        month: "january",
        active: 1770,
        expired: 300,
        inactive: 200,
        blocked: 100,
        lost: 80,
    }
]

const chartConfig = {
    active: {
        label: "Active",
        color: "#01A4AF",
    },
    expired: {
        label: "Expired",
        color: "#FFBA24",
    },
    inactive: {
        label: "Inactive",
        color: "#014DAF",
    },
    blocked: {
        label: "Blocked",
        color: "#8020E7",
    },
    lost: {
        label: "Lost",
        color: "#FF4457",
    },
} satisfies ChartConfig

export function PieChartComponent() {
    const totalCards = chartData[0].active + chartData[0].expired + chartData[0].inactive + chartData[0].blocked + chartData[0].lost

    return (
        <Card className="flex flex-col">
            <CardHeader className="mt-3">
                <CardTitle>Card Status Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={360}
                        innerRadius={80}
                        outerRadius={130}
                        barGap={5}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 10}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Cards
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 20}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {totalCards.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="expired"
                            fill="var(--color-expired)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                            maxBarSize={10}
                        />
                        <RadialBar
                            dataKey="active"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--color-active)"
                            className="stroke-transparent stroke-2"
                            maxBarSize={10}
                        />
                        <RadialBar
                            dataKey="inactive"
                            fill="var(--color-inactive)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                            maxBarSize={10}
                        />
                        <RadialBar
                            dataKey="blocked"
                            fill="var(--color-blocked)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                            maxBarSize={10}
                        />
                        <RadialBar
                            dataKey="lost"
                            fill="var(--color-lost)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                            maxBarSize={10}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
