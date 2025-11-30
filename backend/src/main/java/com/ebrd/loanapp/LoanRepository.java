package com.ebrd.loanapp;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoanRepository extends MongoRepository<LoanRequest, String> {
}
