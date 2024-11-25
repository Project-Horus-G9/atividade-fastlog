package com.sptech.api_fastlog.service;

import com.sptech.api_fastlog.domain.PerformanceMetric;
import com.sptech.api_fastlog.repository.PerformanceMetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PerformanceMetricService {

    @Autowired
    private PerformanceMetricRepository repository;

    public List<PerformanceMetric> findAll() {
        return repository.findAll();
    }

    public Optional<PerformanceMetric> findById(Long id) {
        return repository.findById(id);
    }

    public PerformanceMetric save(PerformanceMetric metric) {
        return repository.save(metric);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
    // 1. Tempo Médio de Resposta por Requisição
    public Double getAverageResponseTime(String metricName) {
        return repository.findAverageResponseTime(metricName);
    }

    // 2. Distribuição de Tempo de Resposta
    public List<ResponseTimeDistribution> getResponseTimeDistribution(String metricName) {
        return repository.findResponseTimeDistribution(metricName).stream()
                .map(result -> new ResponseTimeDistribution(result[0].toString(), ((Long) result[1]).intValue()))
                .collect(Collectors.toList());
    }

    // 4. Tempo de Resposta por Hora
    public List<HourlyResponseTime> getAverageResponseTimeByHour(String metricName) {
        return repository.findAverageResponseTimeByHour(metricName).stream()
                .map(result -> new HourlyResponseTime((Integer) result[0], (Double) result[1]))
                .collect(Collectors.toList());
    }

    // 6. Picos de Latência
    public List<PerformanceMetric> getLatencyPeaks(String metricName, Double threshold) {
        return repository.findLatencyPeaks(metricName, threshold);
    }

    // DTOs
    public static class ResponseTimeDistribution {
        private String range;
        private int count;

        public ResponseTimeDistribution(String range, int count) {
            this.range = range;
            this.count = count;
        }

        // Getters e Setters
    }

    public static class HourlyResponseTime {
        private int hour;
        private double averageResponseTime;

        public HourlyResponseTime(int hour, double averageResponseTime) {
            this.hour = hour;
            this.averageResponseTime = averageResponseTime;
        }

        // Getters e Setters
    }
}
