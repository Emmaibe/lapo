import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart"

export const description = "An interactive area chart with average data for months, days, and years"

const monthlyData = [
    { date: "Jan", desktop: 300 },
    { date: "Feb", desktop: 120 },
    { date: "Mar", desktop: 340 },
    { date: "Apr", desktop: 260 },
    { date: "May", desktop: 380 },
    { date: "Jun", desktop: 500 },
    { date: "Jul", desktop: 320 },
    { date: "Aug", desktop: 640 },
    { date: "Sep", desktop: 460 },
    { date: "Oct", desktop: 280 },
    { date: "Nov", desktop: 500 },
    { date: "Dec", desktop: 420 },
]

const dailyData = [
    { date: "Mon", desktop: 350 },
    { date: "Tue", desktop: 380 },
    { date: "Wed", desktop: 410 },
    { date: "Thu", desktop: 440 },
    { date: "Fri", desktop: 470 },
    { date: "Sat", desktop: 500 },
    { date: "Sun", desktop: 530 },
]

const yearlyData = [
    { date: "2019", desktop: 28000 },
    { date: "2020", desktop: 30000 },
    { date: "2021", desktop: 32000 },
    { date: "2022", desktop: 34000 },
    { date: "2023", desktop: 36000 },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    }
} satisfies ChartConfig

export function ChartAreaComponent() {
    const [dataRange] = React.useState("monthly")

    const getChartData = () => {
        switch (dataRange) {
            case "monthly":
                return monthlyData
            case "weekly":
                return dailyData
            case "yearly":
                return yearlyData
            default:
                return monthlyData
        }
    }

    const getChartTitle = () => {
        switch (dataRange) {
            case "monthly":
                return "This Month’s Income"
            case "weekly":
                return "This Week’s Income"
            case "yearly":
                return "This Year’s Income"
            default:
                return "Income"
        }
    }

    return (
        <Card className="bg-neutral-100 rounded-[10px]">
            <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
                <div className="flex items-center gap-3 text-center sm:text-left mt-2">
                    <CardTitle>{getChartTitle()}</CardTitle>
                </div>
                {/*<Select value={dataRange} onValueChange={setDataRange}>*/}
                {/*    <SelectTrigger*/}
                {/*        className="w-[160px] rounded-lg sm:ml-auto"*/}
                {/*        aria-label="Select data range"*/}
                {/*    >*/}
                {/*        <SelectValue placeholder="Select range" />*/}
                {/*    </SelectTrigger>*/}
                {/*    <SelectContent className="rounded-xl">*/}
                {/*        <SelectItem value="monthly" className="rounded-lg">*/}
                {/*            Monthly*/}
                {/*        </SelectItem>*/}
                {/*        <SelectItem value="weekly" className="rounded-lg">*/}
                {/*            Weekly*/}
                {/*        </SelectItem>*/}
                {/*        <SelectItem value="yearly" className="rounded-lg">*/}
                {/*            Yearly*/}
                {/*        </SelectItem>*/}
                {/*    </SelectContent>*/}
                {/*</Select>*/}
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={getChartData()} margin={{top: 0, right: 0, bottom: 0, left: -22}}>
                        <defs>
                            <linearGradient id="" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="#FF7A00"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#FF7A00"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke={"#DCDCDC"} />
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
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="desktop"
                            type="monotone"
                            fill="url(#fillDesktop)"
                            stroke="#FF7A00"
                            strokeWidth={2}
                            fillOpacity={0.6}
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
