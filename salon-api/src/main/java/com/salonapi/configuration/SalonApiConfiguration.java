/**
 * 
 */
package com.salonapi.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;



/**
 * @author SCLARKSO
 *
 */
@Configuration

@PropertySource(value = { "classpath:application.properties" })
public class SalonApiConfiguration 
{
	@Value("${name}")
	private String name;
	@Value("${address}")
	private String address;
	@Value("${city}")
	private String city;
	@Value("${state}")
	private String state;
	@Value("${zipcode}")
	private String zipcode;
	@Value("${phone}")
	private String phone;
}
