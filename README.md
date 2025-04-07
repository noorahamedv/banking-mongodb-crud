# 🏦 Banking System Analytics using MongoDB Atlas

This project implemented a realistic banking scenario using **MongoDB Atlas** to manage small scale financial transactions, customer profiles, and account activity. Stimulated real-world business transactions with a NoSQL schema and includes CRUD operations and aggregations.

---

## 🚀 Project Features

- Built a MongoDB database for a banking business case
- Defined **4 core collections**:
  - `BS.Customers`
  - `BS.Accounts`
  - `BS.Loans`
  - `BS.Transactions`
- Populated each collection with 10+ documents
- Exported data as **CSV files** from MongoDB Compass
- Exported **collection schemas** as JSON and described each in Word
- Used **MongoDB Playgrounds** in VS Code for CRUD & Aggregation

---

## 🔧 Tools Used

| Tool               | Purpose                                |
|--------------------|----------------------------------------|
| MongoDB Atlas      | Cloud-hosted NoSQL database            |
| MongoDB Compass    | Visual schema design and data export   |
| MongoDB Playground | CRUD + Aggregation logic in VS Code    |
| Visual Studio Code | MongoDB Playground IDE                 |
| MS Word            | Schema documentation and analysis      |

---

## 🧱 Collections & Purpose

1. **Customers**  
   - Stores customer identity, contact info, and KYC details.
   - Keys: `customer_id`, `name`, `email`, `phone`, `dob`, `address`

2. **Accounts**  
   - Contains account numbers, balance info, type (e.g., savings/current), and links to customers.
   - Keys: `account_id`, `customer_id`, `account_type`, `balance`

3. **Loans**  
   - Captures loan type, amount, repayment status and links to customers.
   - Keys: `loan_id`, `customer_id`, `amount`, `interest_rate`, `status`

4. **Transactions**  
   - Tracks deposit/withdrawal operations with timestamps and descriptions.
   - Keys: `transaction_id`, `account_id`, `amount`, `type`, `timestamp`, `description`

---

## 🔨 CRUD Operations (in MongoDB Playground)

Each collection has full support for:

- `insertOne()`, `insertMany()`
- `findOne()`, `find()`
- `updateOne()`, `updateMany()`
- `deleteOne()`, `deleteMany()`

### ✅ Example:
```js
// Read all customers
db.getCollection('BS.Customers').find();

// Update customer phone number
db.getCollection('BS.Customers').updateOne(
  { customer_id: "C1001" },
  { $set: { phone: "+1-999-888-7777" } }
);
