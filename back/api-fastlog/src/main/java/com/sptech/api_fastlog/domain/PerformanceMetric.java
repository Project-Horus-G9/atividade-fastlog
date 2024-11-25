package com.sptech.api_fastlog.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "performance_metrics")
@Getter
@Setter
public class PerformanceMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 10)
    private String name;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal valor;

    @Column(length = 5)
    private String unit;

    @Column(nullable = false, length = 50)
    private String category;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @Column(length = 255)
    private String page;

    @Lob
    private String userAgent;

    @Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    // Construtor sem argumentos (necessário para o JPA)
    public PerformanceMetric() {
    }

    // Construtor com todos os argumentos (usado para criação de instâncias)
    public PerformanceMetric(Long id, String name, BigDecimal valor, String unit, String category,
                             LocalDateTime timestamp, String page, String userAgent, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.valor = valor;
        this.unit = unit;
        this.category = category;
        this.timestamp = timestamp;
        this.page = page;
        this.userAgent = userAgent;
        this.createdAt = createdAt;
    }

}