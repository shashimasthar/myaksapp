package com.ebrd.loanapp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Document(collection = "loans")
public class LoanRequest {
    @Id
    private String id;

    @NotBlank(message = "Name is required")
    private String applicantName;

    @NotNull(message = "Amount is required")
    @Min(value = 1000, message = "Minimum loan amount is 1000")
    private Double amount;

    @NotNull(message = "Interest rate is required")
    private Double interestRate;

    @NotNull(message = "Tenure is required")
    @Min(value = 6, message = "Minimum tenure is 6 months")
    private Integer tenureMonths;

    private Double monthlyEmi;
    private String status = "PENDING";
}
