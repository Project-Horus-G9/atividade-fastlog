package com.sptech.api_fastlog.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import java.util.List;  // Adicionar import para List

@Entity
@Setter
@Getter
public class Entrega {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEntrega;

    @NotBlank
    private String codigoEntrega;

    @NotBlank
    private String nomeEntrega;

    @OneToMany(mappedBy = "entrega", cascade = CascadeType.ALL)  // Mapear a relação corretamente
    private List<Status> statusEntrega;  // Alterar para uma lista
}
