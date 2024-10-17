package com.nt.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@Entity
@Table(name = "EMP")
@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class EmpClass {
		
	@Id
	@NonNull
	private Integer empno;
	
	private String ename;
	
	private String job;
	
	private Float sal;
	
	private Integer deptno;
	
	
	
	
}
