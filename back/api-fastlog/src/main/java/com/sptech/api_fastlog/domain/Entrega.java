package com.sptech.api_fastlog.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class Entrega {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEntrega;

    @NotBlank
    private String codigoEntrega;

    @NotBlank
    private String nomeEntrega;

    @OneToMany(mappedBy = "entrega", cascade = CascadeType.ALL)
    private List<Status> statusEntrega;

    // Getters and Setters
    public Long getIdEntrega() {
        return idEntrega;
    }

    public void setIdEntrega(Long idEntrega) {
        this.idEntrega = idEntrega;
    }

    public String getCodigoEntrega() {
        return codigoEntrega;
    }

    public void setCodigoEntrega(String codigoEntrega) {
        this.codigoEntrega = codigoEntrega;
    }

    public String getNomeEntrega() {
        return nomeEntrega;
    }

    public void setNomeEntrega(String nomeEntrega) {
        this.nomeEntrega = nomeEntrega;
    }

    public List<Status> getStatusEntrega() {
        return statusEntrega;
    }

    public void setStatusEntrega(List<Status> statusEntrega) {
        this.statusEntrega = statusEntrega;
    }
}
