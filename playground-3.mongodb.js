//Create Operation for Accounts Collection
use('BS'); 
db.Accounts.insertMany([
  {
    "account_number": "1234567890",
    "owner_id": "5ed33a8f995a3d3e2a1c9357",
    "balance": 5000.00
  },
  {
    "account_number": "2345678901",
    "owner_id": "5ed33a8f995a3d3e2a1c9358",
    "balance": 3500.00
  },

]);

//Read Operation for Accounts Collection

use ('BS'); 
db.Accounts.find({});



//Update Operation for Accounts Collection

use('BS'); 
db.Accounts.updateMany(
  { "owner_id": "5ed33a8f995a3d3e2a1c9357" }, 
  {
    $set: {
      "balance": 6666.00, 
    }
  }
);


//Delete Operation for Accounts Collection

use('BS'); 
db.Accounts.deleteOne(
  { "owner_id": "5ed33a8f995a3d3e2a1c9357" } 
);


// aggregation pipeline for Accounts
use('BS'); 
db.Accounts.aggregate([
  {
    $group: {
      _id: "$owner_id",
      total_balance: { $sum: "$balance" }
    }
  }
])




//// aggregation pipeline for Customers

use('BS'); 
db.Customers.aggregate([
  {
    $group: {
      _id: { $substr: ["$name", 0, 1] }, // Extract the first letter of the name
      count: { $sum: 1 } // Count the occurrences
    }
  },
  {
    $sort: {
      _id: 1 // Sort by the first letter
    }
  }
])


//aggregation pipeline for Loans

use('BS'); 
db.Loans.aggregate([
  {
    $group: {
      _id: "$customer_id",
      total_loan_amount: { $sum: "$loan_amount" },
      average_interest_rate: { $avg: "$interest_rate" }
    }
  }
])

//aggregation pipeline for Transactions

use('BS'); 

db.Transactions.aggregate([
  {
    $group: {
      _id: "$account_id",
      total_deposits: {
        $sum: {
          $cond: {
            if: { $eq: ["$transaction_type", "deposit"] },
            then: "$amount",
            else: 0
          }
        }
      },
      total_withdrawals: {
        $sum: {
          $cond: {
            if: { $eq: ["$transaction_type", "withdrawal"] },
            then: "$amount",
            else: 0
          }
        }
      }
    }
  }
])
