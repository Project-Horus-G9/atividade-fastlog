package com.sptech.api_fastlog.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseTimeDistributionDTO {

    @JsonProperty("range")
    private String range;

    @JsonProperty("count")
    private int count;

    // Construtor
    public ResponseTimeDistributionDTO(String range, int count) {
        this.range = range;
        this.count = count;
    }

    // Getters e Setters
    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}

