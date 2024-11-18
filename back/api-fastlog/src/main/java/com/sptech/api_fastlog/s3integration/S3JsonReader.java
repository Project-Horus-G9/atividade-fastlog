package com.sptech.api_fastlog.s3integration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.core.sync.ResponseTransformer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sptech.api_fastlog.domain.Entrega;
import com.sptech.api_fastlog.domain.Status;
import com.sptech.api_fastlog.repository.EntregaRepository;
import com.sptech.api_fastlog.repository.StatusRepository;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;

@Service
public class S3JsonReader {

    private static final String BUCKET_NAME = "seu-bucket";
    private static final String FILE_KEY = "seu-arquivo.json";

    @Autowired
    private EntregaRepository entregaRepository;

    @Autowired
    private StatusRepository statusRepository;

    public void readJsonFromS3() {
        S3Client s3 = S3Client.builder()
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build();

        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(BUCKET_NAME)
                .key(FILE_KEY)
                .build();

        try {
            GetObjectResponse response = s3.getObject(getObjectRequest, ResponseTransformer.toFile(Paths.get("output.json")));
            ObjectMapper objectMapper = new ObjectMapper();
            // Lê o JSON do arquivo
            List<Entrega> entregas = objectMapper.readValue(Paths.get("output.json").toFile(), objectMapper.getTypeFactory().constructCollectionType(List.class, Entrega.class));

            // Salva as entregas no banco de dados H2
            for (Entrega entrega : entregas) {
                Entrega savedEntrega = entregaRepository.save(entrega);

                // Agora, salve os status
                for (Status status : entrega.getStatusEntrega()) {
                    status.setEntrega(savedEntrega);
                    statusRepository.save(status);
                }
            }

            System.out.println("Dados inseridos no banco de dados H2.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
