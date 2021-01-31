package com.salonapi.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.Table;




@Entity( name = "salon_service_detail" )
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalonServiceDetail 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	private String name;
	private String description;
	private String price;
	private String time_in_minutes;
	

	/*
    public SalonServiceDetail()
    {
    }

    public SalonServiceDetail(String id, String name, String description, String price, String time_in_minutes)
    {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.time_in_minutes = time_in_minutes;
    	
    }
	*/
    
    
	public String getid() {
		return id;
	}


	public void setid(String id) {
		id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	public String getTime_in_minutes() {
		return time_in_minutes;
	}


	public void setTime_in_minutes(String time_in_minutes) {
		this.time_in_minutes = time_in_minutes;
	}

	
	 @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;
	        SalonServiceDetail SSD = (SalonServiceDetail) o;
	        return Objects.equals(id, SSD.id) &&
	                Objects.equals(name, SSD.name) &&
	                Objects.equals(price, SSD.price) &&
	                Objects.equals(time_in_minutes, SSD.time_in_minutes);
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(id, name, price, time_in_minutes);
	    }

	    @Override
	    public String toString() {
	        final StringBuilder sb = new StringBuilder("SalonServiceDetail{");
	        sb.append("id=").append(id);
	        sb.append(", name='").append(name).append('\'');
	        sb.append(", price='").append(price).append('\'');
	        sb.append(", time_in_minutes='").append(time_in_minutes).append('\'');
	        sb.append('}');
	        return sb.toString();
	    }

 
}
