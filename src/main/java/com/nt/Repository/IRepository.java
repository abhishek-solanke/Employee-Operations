package com.nt.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nt.Model.EmpClass;

@Repository
public interface IRepository extends JpaRepository<EmpClass,Integer>{
	
}
