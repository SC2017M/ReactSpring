package com.salonapi;

import org.springframework.boot.SpringApplication;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.salonapi.repository.SalonServiceDetailRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = SalonServiceDetailRepository.class)
@EnableSwagger2
//@ComponentScan({"com.salonapi.controller"})
@ComponentScan(basePackages = "com.salonapi")
public class SalonApiApplication {

	public static void main(String[] args) {
		//SpringApplication.run(SalonapiApplication.class, args);
		
		SpringApplication app = new SpringApplication(SalonApiApplication.class);
		
		app.setLogStartupInfo(true);
		
		app.run(args);
		
		
		
		
	}
	
	@Bean
	   public Docket productApi() {
	      return new Docket(DocumentationType.SWAGGER_2).select()
	         .apis(RequestHandlerSelectors.basePackage("com.salonapi")).build();
	   }
	
	


}
