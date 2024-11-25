package com.sptech.api_fastlog.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HourlyResponseTimeDTO {
    @JsonProperty("hour")
    private int hour;

    @JsonProperty("averageResponseTime")
    private double averageResponseTime;

    public HourlyResponseTimeDTO(int hour, double averageResponseTime) {
        this.hour = hour;
        this.averageResponseTime = averageResponseTime;
    }

}
