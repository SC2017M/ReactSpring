package com.salonapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.salonapi.data.SalonServiceDetail;



@Repository
//@Component
public interface SalonServiceDetailRepository extends JpaRepository<SalonServiceDetail, Long> 
{

	public List<SalonServiceDetail> findByName(String name);
	
	@Query("SELECT ssd FROM salon_service_detail ssd ")    
	public List<SalonServiceDetail> findAllSalonServiceDetail();
	
	
	
}

//@Query("select ssd.id, ssd.name, ssd.description, ssd.price, ssd.time_in_minutes from SalonServiceDetail ssd")
//public List<SalonServiceDetail> findAll();

