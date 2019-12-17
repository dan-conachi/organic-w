-- user
CREATE TABLE IF NOT EXISTS app_user
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,                  -- Id
  email VARCHAR(255) NOT NULL,                     -- email
  password VARCHAR(255) NOT NULL DEFAULT ' ',      -- password
  super_user BOOLEAN NOT NULL DEFAULT FALSE,       -- super_user
  subscriber SMALLINT NOT NULL DEFAULT 0,          -- subscriber
  creation_date TIMESTAMP NOT NULL,
  last_modified_date TIMESTAMP NOT NULL,
  -- null
  first_name VARCHAR(255) NULL,                     -- first_name
  last_name VARCHAR(255) NULL,
  confirmation_hashcode VARCHAR(255),
  enabled BOOLEAN NOT NULL DEFAULT FALSE
);
-- Unique Keys: email

-- account
CREATE TABLE IF NOT EXISTS account
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  domain VARCHAR(255),
  personal BOOLEAN NOT NULL DEFAULT FALSE,
  creation_date TIMESTAMP NOT NULL,
  last_modified_date TIMESTAMP NOT NULL,
  date_format_type VARCHAR(8) NOT NULL DEFAULT 'DF1',
  -- null
  business_name VARCHAR(75) NULL,
  email VARCHAR(255) NULL,
  phone VARCHAR(50) NULL,
  mobile_phone VARCHAR(50) NULL,
  fax VARCHAR(50) NULL,
  url VARCHAR(255) NULL,
  color VARCHAR(50) NULL,
  logo VARCHAR(255) NULL,
  company_type_id INT NULL,
  industry_id INT NULL,
  currency_id INT NULL,
  country_id INT NULL,
  time_zone_id INT NULL,
  address_id INT NULL,
  setup BOOLEAN NOT NULL DEFAULT FALSE
);
-- Unique Keys: domain
-- Foreign Keys: user_id, industry_id, company_type_id, currency_id, country_id, time_zone_id, address_id


-- role
CREATE TABLE IF NOT EXISTS role
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
-- Unique Keys: name


-- permission
CREATE TABLE IF NOT EXISTS permission
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
-- Unique Keys: name


-- permission_to_role
CREATE TABLE IF NOT EXISTS permission_to_role
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  role_id INT NOT NULL,
  permission_id INT NOT NULL
);
-- Unique Keys: Role_id_Permission_id
-- Foreign Keys: role_id, permission_id


-- account_to_user
CREATE TABLE IF NOT EXISTS account_to_user
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INT NOT NULL,
  user_id INT NOT NULL,
  role VARCHAR(32) NOT NULL,
  creation_date TIMESTAMP NOT NULL
);
-- Unique Keys: Account_id_User_id
-- Foreign Keys: account_id, user_id, role_id


-- company_type
CREATE TABLE IF NOT EXISTS company_type
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
-- Unique Keys: name


-- industry
CREATE TABLE IF NOT EXISTS industry
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
-- Unique Keys: name


-- currency
CREATE TABLE IF NOT EXISTS currency
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  code VARCHAR(20) NOT NULL,
  -- null
  symbol VARCHAR(20) NULL
);
-- Unique Keys: code


-- country
CREATE TABLE IF NOT EXISTS country
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  code VARCHAR(3) NOT NULL,
  -- null
  currency_id INT NULL
);
-- Unique Keys: name


-- address
CREATE TABLE IF NOT EXISTS address
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  -- null
  address1 VARCHAR(100) NULL,
  address2 VARCHAR(100) NULL,
  city VARCHAR(100) NULL,
  province VARCHAR(100) NULL,
  postal_code VARCHAR(50) NULL,
  country_id INT NULL
);
-- Foreign Keys: country_id

-- tax
CREATE TABLE IF NOT EXISTS tax
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  rate DECIMAL(4,2) NOT NULL,
  removed BOOLEAN NOT NULL DEFAULT FALSE,
  -- null
  registration_number VARCHAR(255) NULL
);
-- Foreign Keys: account_id

CREATE TABLE IF NOT EXISTS time_zone
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  gmt VARCHAR(6) NOT NULL,
  region VARCHAR(255) NOT NULL
);
-- Unique Keys: region

-- expense_category
CREATE TABLE IF NOT EXISTS expense_category
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,      -- Id
  name VARCHAR(75) NOT NULL,                       -- name
  -- null
  account_id INT NULL,
  parent_id INT NULL,
  creation_date TIMESTAMP NULL,
  last_modified_date TIMESTAMP NULL
);
-- Foreign Keys: account_id, parent_id


-- expense
CREATE TABLE IF NOT EXISTS expense
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,       -- id
  account_to_user_id INT NOT NULL,                  -- account_to_user_id
  amount DECIMAL(10,2) NOT NULL,                    -- amount
  date TIMESTAMP NOT NULL,                           -- date
  expense_category_id INT NOT NULL,                 -- expense_category_id
  -- null
  vendor_id INT NULL,                               -- vendor_id
  client_id INT NULL,                              
  notes VARCHAR(100) NULL,                          -- notes
  verified BOOLEAN NOT NULL DEFAULT FALSE,                  -- verified
  archived BOOLEAN NOT NULL DEFAULT FALSE,                  -- archived
  deleted BOOLEAN NOT NULL DEFAULT FALSE,                   -- deleted
  receipt VARCHAR(255) NULL,                        -- receipt
  recur_frequency VARCHAR(30) NULL,                 -- recur_frequency
  recur_until VARCHAR(30) NULL,                     -- recur_until
  recur_enddate TIMESTAMP NULL,                      -- recur_enddate
  creation_date TIMESTAMP NULL,                      -- creation_date
  last_modified_date TIMESTAMP NULL                  -- last_modified_date
);
-- Foreign Keys: expense_category_id, vendor_id, account_to_user_id

-- tax_to_expense
CREATE TABLE IF NOT EXISTS tax_to_expense
(
  id SERIAL PRIMARY KEY NOT NULL,       -- id
  expense_id INT NOT NULL,                          -- expense_id
  tax_id INT NOT NULL,                              -- tax_id
  tax_rate DECIMAL(4,2) NOT NULL                    -- tax_rate
);
-- Foreign Keys: expense_id, tax_id
-- Unique Keys: expense_id_tax_id

-- vendor
CREATE TABLE IF NOT EXISTS vendor
(
  id SERIAL PRIMARY KEY NOT NULL,       -- id
  name VARCHAR(255) NOT NULL,                       -- name
  account_id INT NOT NULL                           -- account
);
-- Foreign Keys: account_id
-- Unique Keys: name

-- subscription
CREATE TABLE IF NOT EXISTS subscription
(
  -- not null
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INT NOT NULL,
  subscription_type VARCHAR(32) NOT NULL DEFAULT 'FREE',
  active BOOLEAN NOT NULL DEFAULT FALSE,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL
);
-- Foreign Keys: account_id
-- Unique Keys: account_id
ALTER TABLE subscription ADD CONSTRAINT subscription_account_id_idx UNIQUE (account_id);
ALTER TABLE subscription ADD CONSTRAINT subscription_account_id_fkey FOREIGN KEY (account_id) REFERENCES account (id) ON DELETE RESTRICT;

-- client
CREATE TABLE IF NOT EXISTS client
(
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INT NOT NULL REFERENCES account ON DELETE CASCADE,
  title VARCHAR(32) NOT NULL DEFAULT 'MR',
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(50) NULL,
  email VARCHAR(255) NOT NULL,
  passport_id VARCHAR(50) NULL,
  phone VARCHAR(50) NULL,
  mobile_phone VARCHAR(50) NULL,
  company_name VARCHAR(75) NULL,
  company_vat VARCHAR(32) NULL,
  note VARCHAR(100) NULL,
  by_mail BOOLEAN NOT NULL DEFAULT TRUE,
  by_snailmail BOOLEAN NOT NULL DEFAULT FALSE,
  archived BOOLEAN NOT NULL DEFAULT FALSE,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  country_id INT NULL REFERENCES country ON DELETE SET NULL,
  address_id INT NULL REFERENCES address ON DELETE SET NULL
);
-- Foreign Keys: account_id, country_id, address_id