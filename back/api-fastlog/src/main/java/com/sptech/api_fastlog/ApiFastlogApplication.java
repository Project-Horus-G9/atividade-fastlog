package com.sptech.api_fastlog;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import com.sptech.api_fastlog.s3integration.S3JsonReader;

@SpringBootApplication
public class ApiFastlogApplication implements CommandLineRunner {

	@Autowired
	private S3JsonReader s3JsonReader;

	public static void main(String[] args) {
		SpringApplication.run(ApiFastlogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Este método será chamado automaticamente na inicialização do Spring Boot
		s3JsonReader.readJsonFromS3();
	}
}
