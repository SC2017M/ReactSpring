package com.salonapi.data;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table( name = "slot" )
public class Slot 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String ID;
	private String confirmed_at;
	private String looked_at;
	private String slot_for;
	private String status;
	private String stylist_name;
	private String selected_service_id;

	public Slot()
	{
		
	}

	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getConfirmed_at() {
		return confirmed_at;
	}
	public void setConfirmed_at(String confirmed_at) {
		this.confirmed_at = confirmed_at;
	}
	public String getLooked_at() {
		return looked_at;
	}
	public void setLooked_at(String looked_at) {
		this.looked_at = looked_at;
	}
	public String getSlot_for() {
		return slot_for;
	}
	public void setSlot_for(String slot_for) {
		this.slot_for = slot_for;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStylist_name() {
		return stylist_name;
	}
	public void setStylist_name(String stylist_name) {
		this.stylist_name = stylist_name;
	}
	public String getSelected_service_id() {
		return selected_service_id;
	}
	public void setSelected_service_id(String selected_service_id) {
		this.selected_service_id = selected_service_id;
	}
	
	 @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;
	        Slot slot = (Slot) o;
	        return Objects.equals(ID, slot.ID) &&
	                Objects.equals(looked_at, slot.looked_at) &&
	                Objects.equals(selected_service_id, slot.selected_service_id) &&
	                Objects.equals(slot_for, slot.slot_for) &&
	                Objects.equals(status, slot.status) &&
	                Objects.equals(stylist_name, slot.stylist_name);
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(ID, looked_at, selected_service_id, slot_for,status, stylist_name);
	    }

	    @Override
	    public String toString() {
	        final StringBuilder sb = new StringBuilder("Slot{");
	        sb.append("ID=").append(ID);
	        sb.append(", looked_at='").append(looked_at).append('\'');
	        sb.append(", selected_service_id='").append(selected_service_id).append('\'');
	        sb.append(", slot_for='").append(slot_for).append('\'');
	        sb.append(", status='").append(status).append('\'');
	        sb.append(", stylist_name='").append(stylist_name).append('\'');
	        sb.append('}');
	        return sb.toString();
	    }



	
	
}
