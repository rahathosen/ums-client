"use client"

import { useEffect, useState } from "react"
import { Cloud, Droplets, Wind, Sun, CloudRain, Snowflake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WeatherData {
  temperature: number
  humidity: number
  windSpeed: number
  condition: string
  airQuality: {
    pm25: number
    status: "good" | "moderate" | "poor"
  }
  location: string
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return Sun
    case "rainy":
      return CloudRain
    case "snow":
      return Snowflake
    case "haze":
      return Cloud
    default:
      return Cloud
  }
}

const getAirQualityColor = (status: string) => {
  switch (status) {
    case "good":
      return "text-green-500"
    case "moderate":
      return "text-yellow-500"
    case "poor":
      return "text-red-500"
    default:
      return "text-gray-500"
  }
}




export default function WeatherWidget() {
  const [weather] = useState<WeatherData>({
    temperature: 14.09,
    humidity: 58,
    windSpeed: 3.09,
    condition: "Haze",
    airQuality: {
      pm25: 64.64,
      status: "moderate",
    },
    location: "New Delhi",
  })
  
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const WeatherIcon = getWeatherIcon(weather.condition)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  if (isLoading) {
    return (
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-600 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 mb-6"></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-8 bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-10 bg-gray-600 rounded w-1/2"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <WeatherIcon className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-medium">{weather.location}</span>
          </div>
          <span className="text-xs text-gray-400 hover:text-gray-300 transition-colors">Source: OpenWeather</span>
        </div>

        {/* Time Section */}
        <div className="text-sm text-gray-300 mb-4">{formatDate(currentTime)}</div>

        {/* Main Weather Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="text-2xl font-bold mb-2 text-primary transition-all duration-300 hover:text-primary">
              {weather.condition}
            </div>
            <div className="text-3xl font-bold text-primary transition-all duration-300 hover:scale-105">
              {weather.temperature}°C
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-sm bg-[#363C42] rounded-md p-2 transition-all duration-300 hover:bg-[#404549]">
              <Droplets className="h-4 w-4 mr-2 text-blue-400" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center text-sm bg-[#363C42] rounded-md p-2 transition-all duration-300 hover:bg-[#404549]">
              <Wind className="h-4 w-4 mr-2 text-gray-400" />
              <span>Wind: {weather.windSpeed}km/h</span>
            </div>
          </div>
        </div>

        {/* Air Quality Section */}
        <div className="relative overflow-hidden rounded-lg bg-[#363C42] transition-all duration-300 hover:bg-[#404549]">
          <div
            className="absolute top-0 left-0 h-1 bg-primary"
            style={{
              width: `${(weather.airQuality.pm25 / 100) * 100}%`,
            }}
          />
          <div className="p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Air Quality (PM2.5)</span>
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2">{weather.airQuality.pm25}</span>
                <span className={cn("transition-colors duration-300", getAirQualityColor(weather.airQuality.status))}>
                  ❤
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400">Source: CPCB</div>
              <div className={cn("text-xs px-2 py-1 rounded-full", getAirQualityColor(weather.airQuality.status))}>
                {weather.airQuality.status.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Refresh Indicator */}
        <div className="mt-2 text-right">
          <button
            onClick={() => setIsLoading(true)}
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
          >
            Last updated: {new Date().toLocaleTimeString()}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

