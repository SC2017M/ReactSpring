package com.salonapi.repository.slot;

import org.springframework.data.jpa.repository.JpaRepository;
import com.salonapi.data.*;
import org.springframework.stereotype.Repository;

@Repository
//@Component
public interface SlotRepository extends JpaRepository<Slot, Long> 
{

}
