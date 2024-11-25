package com.sptech.api_fastlog.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HourlyResponseTimeDTO {

    @JsonProperty("hour")
    private int hour;

    @JsonProperty("averageResponseTime")
    private double averageResponseTime;

    // Construtor
    public HourlyResponseTimeDTO(int hour, double averageResponseTime) {
        this.hour = hour;
        this.averageResponseTime = averageResponseTime;
    }

    // Getters e Setters
    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    public double getAverageResponseTime() {
        return averageResponseTime;
    }

    public void setAverageResponseTime(double averageResponseTime) {
        this.averageResponseTime = averageResponseTime;
    }
}

