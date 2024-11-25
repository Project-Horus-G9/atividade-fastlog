package com.sptech.api_fastlog.controller;

import com.sptech.api_fastlog.DTO.HourlyResponseTimeDTO;
import com.sptech.api_fastlog.DTO.ResponseTimeDistributionDTO;
import com.sptech.api_fastlog.domain.PerformanceMetric;
import com.sptech.api_fastlog.service.PerformanceMetricService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/metrics")
public class PerformanceMetricController {

    @Autowired
    private PerformanceMetricService service;

    @GetMapping
    public List<PerformanceMetric> getAllMetrics() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerformanceMetric> getMetricById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PerformanceMetric createMetric(@RequestBody PerformanceMetric metric) {
        return service.save(metric);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMetric(@PathVariable Long id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // 1. Tempo Médio de Resposta por Requisição
    @GetMapping("/average-response-time")
    public Double getAverageResponseTime(@RequestParam String metricName) {
        return service.getAverageResponseTime(metricName);
    }

    // 2. Distribuição de Tempo de Resposta
    @GetMapping("/response-time-distribution")
    public List<ResponseTimeDistributionDTO> getResponseTimeDistribution(@RequestParam String metricName) {
        return service.getResponseTimeDistribution(metricName);
    }

    // 4. Tempo de Resposta por Hora
    @GetMapping("/average-response-time-by-hour")
    public List<HourlyResponseTimeDTO> getAverageResponseTimeByHour(@RequestParam String metricName) {
        return service.getAverageResponseTimeByHour(metricName);
    }

    // 6. Picos de Latência
    @GetMapping("/latency-peaks")
    public List<PerformanceMetric> getLatencyPeaks(@RequestParam String metricName, @RequestParam Double threshold) {
        return service.getLatencyPeaks(metricName, threshold);
    }
}
