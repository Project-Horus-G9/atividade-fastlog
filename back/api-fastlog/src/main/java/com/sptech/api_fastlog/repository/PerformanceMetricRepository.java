package com.sptech.api_fastlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.sptech.api_fastlog.domain.PerformanceMetric;

@Repository
public interface PerformanceMetricRepository extends JpaRepository<PerformanceMetric, Long> {

    // 1. Tempo Médio de Resposta por Requisição
    @Query("SELECT AVG(p.valor) FROM PerformanceMetric p WHERE p.name = :metricName")
    Double findAverageResponseTime(String metricName);

    // 2. Distribuição de Tempo de Resposta
    @Query("""
           SELECT CASE
                    WHEN p.valor < 100 THEN '<100ms'
                    WHEN p.valor BETWEEN 100 AND 500 THEN '100–500ms'
                    ELSE '>500ms'
                  END AS range,
                  COUNT(p) AS count
           FROM PerformanceMetric p
           WHERE p.name = :metricName
           GROUP BY CASE
                      WHEN p.valor < 100 THEN '<100ms'
                      WHEN p.valor BETWEEN 100 AND 500 THEN '100–500ms'
                      ELSE '>500ms'
                    END
           """)
    List<Object[]> findResponseTimeDistribution(String metricName);

    // 4. Tempo de Resposta por Hora
    @Query("SELECT HOUR(p.timestamp) AS hour, AVG(p.valor) AS avgResponseTime FROM PerformanceMetric p WHERE p.name = :metricName GROUP BY HOUR(p.timestamp)")
    List<Object[]> findAverageResponseTimeByHour(String metricName);

    // 6. Picos de Latência
    @Query("SELECT p FROM PerformanceMetric p WHERE p.valor > :threshold AND p.name = :metricName")
    List<PerformanceMetric> findLatencyPeaks(String metricName, Double threshold);
}
