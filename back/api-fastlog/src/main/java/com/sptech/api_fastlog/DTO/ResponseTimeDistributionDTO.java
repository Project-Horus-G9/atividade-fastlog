package com.sptech.api_fastlog.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseTimeDistributionDTO {
    @JsonProperty("range")
    private String range;

    @JsonProperty("count")
    private int count;

    public ResponseTimeDistributionDTO(String range, int count) {
        this.range = range;
        this.count = count;
    }
}
