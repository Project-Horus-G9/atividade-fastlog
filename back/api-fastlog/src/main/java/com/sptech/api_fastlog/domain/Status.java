package com.sptech.api_fastlog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStatus;

    @NotBlank
    private String descricao;

    @NotBlank
    private String tipo;

    @JsonIgnore  // Ignora a referência recursiva
    @ManyToOne
    private Entrega entrega;
}
