package com.sptech.api_fastlog.domain;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "performance_metrics")
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

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
