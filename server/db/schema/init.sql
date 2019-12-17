-- Index Keys

-- EOF Index Keys


-- Unique Keys
ALTER TABLE app_user ADD CONSTRAINT user_email_idx UNIQUE (email);
ALTER TABLE account ADD CONSTRAINT account_subomain_idx UNIQUE (domain);
ALTER TABLE role ADD CONSTRAINT role_name_idx UNIQUE (name);
ALTER TABLE permission ADD CONSTRAINT permission_name_idx UNIQUE (name);
ALTER TABLE permission_to_role ADD CONSTRAINT permission_to_role_id_permission_id_idx UNIQUE (role_id, permission_id);
ALTER TABLE account_to_user ADD CONSTRAINT account_to_user_account_id_user_id_idx UNIQUE (account_id, user_id);
ALTER TABLE company_type ADD CONSTRAINT company_type_name_idx UNIQUE (name);
ALTER TABLE industry ADD CONSTRAINT industry_name_idx UNIQUE (name);
ALTER TABLE currency ADD CONSTRAINT currency_code_idx UNIQUE (code);
ALTER TABLE country ADD CONSTRAINT country_name_idx UNIQUE (name);
ALTER TABLE time_zone ADD CONSTRAINT time_zone_region_idx UNIQUE (region);
ALTER TABLE tax_to_expense ADD CONSTRAINT tax_to_expense_tax_id_expense_id_idx UNIQUE (tax_id, expense_id);
ALTER TABLE vendor ADD CONSTRAINT vendor_name_account_id_idx UNIQUE (name, account_id);
ALTER TABLE subscription ADD CONSTRAINT subscription_account_id_idx UNIQUE (account_id);
-- EOF Unique Keys


-- Foreign Keys
ALTER TABLE expense ADD CONSTRAINT expense_client_Id_fkey FOREIGN KEY (client_id) REFERENCES client (id);

ALTER TABLE account ADD CONSTRAINT account_userId_FK FOREIGN KEY (user_id) REFERENCES app_user (id);
ALTER TABLE account ADD CONSTRAINT account_industryId_FK FOREIGN KEY (industry_id) REFERENCES industry (id);
ALTER TABLE account ADD CONSTRAINT account_companyTypeId_FK FOREIGN KEY (company_type_id) REFERENCES company_type (id);
ALTER TABLE account ADD CONSTRAINT account_currencyId_FK FOREIGN KEY (currency_id) REFERENCES currency (id);
ALTER TABLE account ADD CONSTRAINT account_countryId_FK FOREIGN KEY (country_id) REFERENCES country (id);
ALTER TABLE account ADD CONSTRAINT account_timeZoneId_FK FOREIGN KEY (time_zone_id) REFERENCES time_zone (id);
ALTER TABLE account ADD CONSTRAINT account_addressId_FK FOREIGN KEY (address_id) REFERENCES address (id);

ALTER TABLE permission_to_role ADD CONSTRAINT permissionToRole_roleId_FK FOREIGN KEY (role_id) REFERENCES role (id);
ALTER TABLE permission_to_role ADD CONSTRAINT permissionToRole_permissionId_FK FOREIGN KEY (permission_id) REFERENCES permission (id);

ALTER TABLE account_to_user ADD CONSTRAINT accountToUser_accountId_FK FOREIGN KEY (account_id) REFERENCES account (id);
ALTER TABLE account_to_user ADD CONSTRAINT accountToUser_userId_FK FOREIGN KEY (user_id) REFERENCES app_user (id);

ALTER TABLE tax ADD CONSTRAINT tax_accountId_FK FOREIGN KEY (account_id) REFERENCES account (id);

ALTER TABLE country ADD CONSTRAINT country_currencyId_FK FOREIGN KEY (currency_id) REFERENCES currency (id);

ALTER TABLE expense_category ADD CONSTRAINT expense_category_accountId_FK FOREIGN KEY (account_id) REFERENCES account (id);
ALTER TABLE expense_category ADD CONSTRAINT expense_category_parentId_FK FOREIGN KEY (parent_id) REFERENCES expense_category (id);

ALTER TABLE expense ADD CONSTRAINT expense_accountToUserId_FK FOREIGN KEY (account_to_user_id) REFERENCES account_to_user (id);
ALTER TABLE expense ADD CONSTRAINT expense_expenseCategoryId_FK FOREIGN KEY (expense_category_id) REFERENCES expense_category (id);

ALTER TABLE tax_to_expense ADD CONSTRAINT taxToExpense_expenseId_FK FOREIGN KEY (expense_id) REFERENCES expense (id);
ALTER TABLE tax_to_expense ADD CONSTRAINT taxToExpense_taxId_FK FOREIGN KEY (tax_id) REFERENCES tax (id);

ALTER TABLE vendor ADD CONSTRAINT vendor_accountId_FK FOREIGN KEY (account_id) REFERENCES account (id);

ALTER TABLE subscription ADD CONSTRAINT subscription_accountId_FK FOREIGN KEY (account_id) REFERENCES account (id);

ALTER TABLE address ADD CONSTRAINT address_country_id_fkey FOREIGN KEY (country_id) REFERENCES country (id) ON DELETE SET NULL;
-- EOF Foreign Keys





-- role
INSERT INTO role (name) VALUES ('ROLE_ADMIN');
INSERT INTO role (name) VALUES ('ROLE_STAFF');
INSERT INTO role (name) VALUES ('ROLE_ACCOUNT_MANAGER');
-- EOF role

INSERT INTO currency (code, name, symbol) VALUES ('EUR', 'Euro', '€');
INSERT INTO currency (code, name, symbol) VALUES ('GBP', 'United Kingdom Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('USD', 'United States Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('CAD', 'Canada Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('AUD', 'Australia Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('LKR', 'Sri Lanka Rupee', 'රු');
INSERT INTO currency (code, name, symbol) VALUES ('AED', 'United Arab Emirates Dirham', 'د.إ');
INSERT INTO currency (code, name, symbol) VALUES ('AFN', 'Afghanistan Afghani', '؋');
INSERT INTO currency (code, name, symbol) VALUES ('ALL', 'Albania Lek', 'Lek');
INSERT INTO currency (code, name, symbol) VALUES ('AMD', 'Armenia Dram', 'AMD');
INSERT INTO currency (code, name, symbol) VALUES ('ANG', 'Netherlands Antilles Guilder', 'ƒ');
INSERT INTO currency (code, name, symbol) VALUES ('AOA', 'Angola Kwanza', 'AOA');
INSERT INTO currency (code, name, symbol) VALUES ('ARS', 'Argentina Peso', '$');
INSERT INTO currency (code, name, symbol) VALUES ('AWG', 'Aruba Guilder', 'ƒ');
INSERT INTO currency (code, name, symbol) VALUES ('AZN', 'Azerbaijan Manat', '₼');
INSERT INTO currency (code, name, symbol) VALUES ('BAM', 'Bosnia and Herzegovina Convertible Marka', 'KM');
INSERT INTO currency (code, name, symbol) VALUES ('BBD', 'Barbados Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('BDT', 'Bangladesh Taka', 'BDT');
INSERT INTO currency (code, name, symbol) VALUES ('BGN', 'Bulgaria Lev', 'лв');
INSERT INTO currency (code, name, symbol) VALUES ('BHD', 'Bahrain Dinar', 'BHD');
INSERT INTO currency (code, name, symbol) VALUES ('BIF', 'Burundi Franc', 'BIF');
INSERT INTO currency (code, name, symbol) VALUES ('BMD', 'Bermuda Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('BND', 'Brunei Darussalam Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('BOB', 'Bolivia Bolíviano', '$b');
INSERT INTO currency (code, name, symbol) VALUES ('BRL', 'Brazil Real', 'R$');
INSERT INTO currency (code, name, symbol) VALUES ('BSD', 'Bahamas Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('BTN', 'Bhutan Ngultrum', 'BTN');
INSERT INTO currency (code, name, symbol) VALUES ('BWP', 'Botswana Pula', 'P');
INSERT INTO currency (code, name, symbol) VALUES ('BYN', 'Belarus Ruble', 'Br');
INSERT INTO currency (code, name, symbol) VALUES ('BZD', 'Belize Dollar', 'BZ$');
INSERT INTO currency (code, name, symbol) VALUES ('CDF', 'Congo/Kinshasa Franc', 'CDF');
INSERT INTO currency (code, name, symbol) VALUES ('CHF', 'Switzerland Franc', 'CHF');
INSERT INTO currency (code, name, symbol) VALUES ('CLP', 'Chile Peso', '$');
INSERT INTO currency (code, name, symbol) VALUES ('CNY', 'China Yuan Renminbi', '¥');
INSERT INTO currency (code, name, symbol) VALUES ('COP', 'Colombia Peso', '$');
INSERT INTO currency (code, name, symbol) VALUES ('CRC', 'Costa Rica Colon', '₡');
INSERT INTO currency (code, name, symbol) VALUES ('CUC', 'Cuba Convertible Peso', 'CUC');
INSERT INTO currency (code, name, symbol) VALUES ('CUP', 'Cuba Peso', '₱');
INSERT INTO currency (code, name, symbol) VALUES ('CVE', 'Cape Verde Escudo', 'CVE');
INSERT INTO currency (code, name, symbol) VALUES ('CZK', 'Czech Republic Koruna', 'Kč');
INSERT INTO currency (code, name, symbol) VALUES ('DJF', 'Djibouti Franc', 'DJF');
INSERT INTO currency (code, name, symbol) VALUES ('DKK', 'Denmark Krone', 'kr');
INSERT INTO currency (code, name, symbol) VALUES ('DOP', 'Dominican Republic Peso', 'RD$');
INSERT INTO currency (code, name, symbol) VALUES ('DZD', 'Algeria Dinar', 'DZD');
INSERT INTO currency (code, name, symbol) VALUES ('EGP', 'Egypt Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('ERN', 'Eritrea Nakfa', 'ERN');
INSERT INTO currency (code, name, symbol) VALUES ('ETB', 'Ethiopia Birr', 'ETB');
INSERT INTO currency (code, name, symbol) VALUES ('FJD', 'Fiji Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('FKP', 'Falkland Islands (Malvinas) Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('GEL', 'Georgia Lari', 'GEL');
INSERT INTO currency (code, name, symbol) VALUES ('GGP', 'Guernsey Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('GHS', 'Ghana Cedi', '¢');
INSERT INTO currency (code, name, symbol) VALUES ('GIP', 'Gibraltar Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('GMD', 'Gambia Dalasi', 'GMD');
INSERT INTO currency (code, name, symbol) VALUES ('GNF', 'Guinea Franc', 'GNF');
INSERT INTO currency (code, name, symbol) VALUES ('GTQ', 'Guatemala Quetzal', 'Q');
INSERT INTO currency (code, name, symbol) VALUES ('GYD', 'Guyana Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('HKD', 'Hong Kong Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('HNL', 'Honduras Lempira', 'L');
INSERT INTO currency (code, name, symbol) VALUES ('HRK', 'Croatia Kuna', 'kn');
INSERT INTO currency (code, name, symbol) VALUES ('HTG', 'Haiti Gourde', 'HTG');
INSERT INTO currency (code, name, symbol) VALUES ('HUF', 'Hungary Forint', 'Ft');
INSERT INTO currency (code, name, symbol) VALUES ('IDR', 'Indonesia Rupiah', 'Rp');
INSERT INTO currency (code, name, symbol) VALUES ('ILS', 'Israel Shekel', '₪');
INSERT INTO currency (code, name, symbol) VALUES ('IMP', 'Isle of Man Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('INR', 'India Rupee', 'INR');
INSERT INTO currency (code, name, symbol) VALUES ('IQD', 'Iraq Dinar', 'IQD');
INSERT INTO currency (code, name, symbol) VALUES ('IRR', 'Iran Rial', '﷼');
INSERT INTO currency (code, name, symbol) VALUES ('ISK', 'Iceland Krona', 'kr');
INSERT INTO currency (code, name, symbol) VALUES ('JEP', 'Jersey Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('JMD', 'Jamaica Dollar', 'J$');
INSERT INTO currency (code, name, symbol) VALUES ('JOD', 'Jordan Dinar', 'JOD');
INSERT INTO currency (code, name, symbol) VALUES ('JPY', 'Japan Yen', '¥');
INSERT INTO currency (code, name, symbol) VALUES ('KES', 'Kenya Shilling', 'KES');
INSERT INTO currency (code, name, symbol) VALUES ('KGS', 'Kyrgyzstan Som', 'лв');
INSERT INTO currency (code, name, symbol) VALUES ('KHR', 'Cambodia Riel', '៛');
INSERT INTO currency (code, name, symbol) VALUES ('KMF', 'Comorian Franc', 'KMF');
INSERT INTO currency (code, name, symbol) VALUES ('KPW', 'Korea (North) Won', '₩');
INSERT INTO currency (code, name, symbol) VALUES ('KRW', 'Korea (South) Won', '₩');
INSERT INTO currency (code, name, symbol) VALUES ('KWD', 'Kuwait Dinar', 'KWD');
INSERT INTO currency (code, name, symbol) VALUES ('KYD', 'Cayman Islands Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('KZT', 'Kazakhstan Tenge', 'лв');
INSERT INTO currency (code, name, symbol) VALUES ('LAK', 'Laos Kip', '₭');
INSERT INTO currency (code, name, symbol) VALUES ('LBP', 'Lebanon Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('LRD', 'Liberia Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('LSL', 'Lesotho Loti', 'LSL');
INSERT INTO currency (code, name, symbol) VALUES ('LYD', 'Libya Dinar', 'LYD');
INSERT INTO currency (code, name, symbol) VALUES ('MAD', 'Morocco Dirham', 'MAD');
INSERT INTO currency (code, name, symbol) VALUES ('MDL', 'Moldova Leu', 'MDL');
INSERT INTO currency (code, name, symbol) VALUES ('MGA', 'Madagascar Ariary', 'MGA');
INSERT INTO currency (code, name, symbol) VALUES ('MKD', 'Macedonia Denar', 'ден');
INSERT INTO currency (code, name, symbol) VALUES ('MMK', 'Myanmar (Burma) Kyat', 'MMK');
INSERT INTO currency (code, name, symbol) VALUES ('MNT', 'Mongolia Tughrik', '₮');
INSERT INTO currency (code, name, symbol) VALUES ('MOP', 'Macau Pataca', 'MOP');
INSERT INTO currency (code, name, symbol) VALUES ('MRU', 'Mauritania Ouguiya', 'MRU');
INSERT INTO currency (code, name, symbol) VALUES ('MUR', 'Mauritius Rupee', '₨');
INSERT INTO currency (code, name, symbol) VALUES ('MVR', 'Maldives (Maldive Islands) Rufiyaa', 'MVR');
INSERT INTO currency (code, name, symbol) VALUES ('MWK', 'Malawi Kwacha', 'MWK');
INSERT INTO currency (code, name, symbol) VALUES ('MXN', 'Mexico Peso', '$');
INSERT INTO currency (code, name, symbol) VALUES ('MYR', 'Malaysia Ringgit', 'RM');
INSERT INTO currency (code, name, symbol) VALUES ('MZN', 'Mozambique Metical', 'MT');
INSERT INTO currency (code, name, symbol) VALUES ('NAD', 'Namibia Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('NGN', 'Nigeria Naira', '₦');
INSERT INTO currency (code, name, symbol) VALUES ('NIO', 'Nicaragua Cordoba', 'C$');
INSERT INTO currency (code, name, symbol) VALUES ('NOK', 'Norway Krone', 'NOK');
INSERT INTO currency (code, name, symbol) VALUES ('NPR', 'Nepal Rupee', '₨');
INSERT INTO currency (code, name, symbol) VALUES ('NZD', 'New Zealand Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('OMR', 'Oman Rial', '﷼');
INSERT INTO currency (code, name, symbol) VALUES ('PAB', 'Panama Balboa', 'B/.');
INSERT INTO currency (code, name, symbol) VALUES ('PEN', 'Peru Sol', 'S/.');
INSERT INTO currency (code, name, symbol) VALUES ('PGK', 'Papua New Guinea Kina', 'PGK');
INSERT INTO currency (code, name, symbol) VALUES ('PHP', 'Philippines Piso', '₱');
INSERT INTO currency (code, name, symbol) VALUES ('PKR', 'Pakistan Rupee', '₨');
INSERT INTO currency (code, name, symbol) VALUES ('PLN', 'Poland Zloty', 'zł');
INSERT INTO currency (code, name, symbol) VALUES ('PYG', 'Paraguay Guarani', 'Gs');
INSERT INTO currency (code, name, symbol) VALUES ('QAR', 'Qatar Riyal', '﷼');
INSERT INTO currency (code, name, symbol) VALUES ('RON', 'Romania Leu', 'lei');
INSERT INTO currency (code, name, symbol) VALUES ('RSD', 'Serbia Dinar', 'Дин.');
INSERT INTO currency (code, name, symbol) VALUES ('RUB', 'Russia Ruble', '₽');
INSERT INTO currency (code, name, symbol) VALUES ('RWF', 'Rwanda Franc', 'රු');
INSERT INTO currency (code, name, symbol) VALUES ('SAR', 'Saudi Arabia Riyal', '﷼');
INSERT INTO currency (code, name, symbol) VALUES ('SBD', 'Solomon Islands Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('SCR', 'Seychelles Rupee', '₨');
INSERT INTO currency (code, name, symbol) VALUES ('SDG', 'Sudan Pound', 'SDG');
INSERT INTO currency (code, name, symbol) VALUES ('SEK', 'Sweden Krona', 'kr');
INSERT INTO currency (code, name, symbol) VALUES ('SGD', 'Singapore Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('SHP', 'Saint Helena Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('SLL', 'Sierra Leone Leone', 'SLL');
INSERT INTO currency (code, name, symbol) VALUES ('SOS', 'Somalia Shilling', 'SOS');
INSERT INTO currency (code, name, symbol) VALUES ('SPL', 'Seborga Luigino', 'SPL');
INSERT INTO currency (code, name, symbol) VALUES ('SRD', 'Suriname Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('STN', 'São Tomé and Príncipe Dobra', 'STN');
INSERT INTO currency (code, name, symbol) VALUES ('SVC', 'El Salvador Colon', 'SVC');
INSERT INTO currency (code, name, symbol) VALUES ('SYP', 'Syria Pound', '£');
INSERT INTO currency (code, name, symbol) VALUES ('SZL', 'Swaziland Lilangeni', 'SZL');
INSERT INTO currency (code, name, symbol) VALUES ('THB', 'Thailand Baht', 'THB');
INSERT INTO currency (code, name, symbol) VALUES ('TMT', 'Turkmenistan Manat', 'THB');
INSERT INTO currency (code, name, symbol) VALUES ('TND', 'Tunisia Dinar', '฿');
INSERT INTO currency (code, name, symbol) VALUES ('TOP', 'Tonga Pa''anga', 'TOP');
INSERT INTO currency (code, name, symbol) VALUES ('TRY', 'Turkey Lira', 'TRY');
INSERT INTO currency (code, name, symbol) VALUES ('TTD', 'Trinidad and Tobago Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('TVD', 'Tuvalu Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('TWD', 'Taiwan New Dollar', '$');
INSERT INTO currency (code, name, symbol) VALUES ('TZS', 'Tanzania Shilling', 'TZS');
INSERT INTO currency (code, name, symbol) VALUES ('UAH', 'Ukraine Hryvnia', '₴');
INSERT INTO currency (code, name, symbol) VALUES ('UGX', 'Uganda Shilling', 'UGX');
INSERT INTO currency (code, name, symbol) VALUES ('UYU', 'Uruguay Peso', '$U');
INSERT INTO currency (code, name, symbol) VALUES ('UZS', 'Uzbekistan Som', 'UZS');
INSERT INTO currency (code, name, symbol) VALUES ('VEF', 'Venezuela Bolívar', 'Bs');
INSERT INTO currency (code, name, symbol) VALUES ('VND', 'Viet Nam Dong', '₫');
INSERT INTO currency (code, name, symbol) VALUES ('VUV', 'Vanuatu Vatu', 'VUV');
INSERT INTO currency (code, name, symbol) VALUES ('WST', 'Samoa Tala', 'WST');
INSERT INTO currency (code, name, symbol) VALUES ('XAF', 'Communauté Financière Africaine Franc', 'XAF');
INSERT INTO currency (code, name, symbol) VALUES ('XCD', 'East Caribbean Dollar', 'XCD');
INSERT INTO currency (code, name, symbol) VALUES ('XOF', 'Communauté Financière Africaine Franc', 'XOF');
INSERT INTO currency (code, name, symbol) VALUES ('XPF', 'Comptoirs Français du Pacifique (CFP) Franc', 'XPF');
INSERT INTO currency (code, name, symbol) VALUES ('YER', 'Yemen Rial', 'YER');
INSERT INTO currency (code, name, symbol) VALUES ('ZAR', 'South Africa Rand', 'R');
INSERT INTO currency (code, name, symbol) VALUES ('ZMW', 'Zambia Kwacha', 'ZMW');
INSERT INTO currency (code, name, symbol) VALUES ('ZWD', 'Zimbabwe Dollar', 'Z$');
-- EOF currency

-- industry
INSERT INTO industry (name) VALUES ('Advertising');
INSERT INTO industry (name) VALUES ('Agriculture');
INSERT INTO industry (name) VALUES ('Architecture');
INSERT INTO industry (name) VALUES ('Beauty Saloon services');
INSERT INTO industry (name) VALUES ('Bed and Breakfast Accommodations');
INSERT INTO industry (name) VALUES ('Building Maintenance');
INSERT INTO industry (name) VALUES ('Catering service');
INSERT INTO industry (name) VALUES ('Education and Training');
INSERT INTO industry (name) VALUES ('Health and wellness');
INSERT INTO industry (name) VALUES ('IT consultancy');
INSERT INTO industry (name) VALUES ('Retail');
-- EOFIndustry

-- Company Type
INSERT INTO company_type (name) VALUES ('Sole trader');
INSERT INTO company_type (name) VALUES ('Ltd company');
INSERT INTO company_type (name) VALUES ('Partnership');
-- EOFCompany Type

-- Time Zone
INSERT INTO time_zone (gmt, region) VALUES (-12, 'International Date Line West');
INSERT INTO time_zone (gmt, region) VALUES (-11, 'Midway Island Samoa');
INSERT INTO time_zone (gmt, region) VALUES (-10, 'Hawaii');
INSERT INTO time_zone (gmt, region) VALUES (-8, 'Pacific Time (US &amp; Canada); Tijuana');
INSERT INTO time_zone (gmt, region) VALUES (-7, 'Arizona');
INSERT INTO time_zone (gmt, region) VALUES (-7, 'Chihuahua, La Paz, Mazatlan');
INSERT INTO time_zone (gmt, region) VALUES (-7, 'Mountain Time (US &amp; Canada)');
INSERT INTO time_zone (gmt, region) VALUES (-6, 'Central America');
INSERT INTO time_zone (gmt, region) VALUES (-6, 'Central Time (US &amp; Canada)');
INSERT INTO time_zone (gmt, region) VALUES (-6, 'Guadalajara, Mexico City, Monterrey');
INSERT INTO time_zone (gmt, region) VALUES (-6, 'Saskatchewan');
-- EOF Time Zone


-- country
INSERT INTO country (code, name, currency_id) SELECT 'AFG', 'Afghanistan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ALA', 'Åland Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ALB', 'Albania', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DZA', 'Algeria', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ASM', 'American Samoa', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AND', 'Andorra', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AGO', 'Angola', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AIA', 'Anguilla', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ATA', 'Antarctica', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ATG', 'Antigua and Barbuda', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ARG', 'Argentina', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ARM', 'Armenia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ABW', 'Aruba', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AUS', 'Australia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AUT', 'Austria', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'AZE', 'Azerbaijan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BHS', 'Bahamas', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BHR', 'Bahrain', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BGD', 'Bangladesh', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BRB', 'Barbados', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BLR', 'Belarus', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BEL', 'Belgium', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BLZ', 'Belize', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BEN', 'Benin', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BMU', 'Bermuda', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BTN', 'Bhutan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BOL', 'Bolivia, Plurinational State of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BES', 'Bonaire, Sint Eustatius and Saba', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BIH', 'Bosnia and Herzegovina', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BWA', 'Botswana', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BVT', 'Bouvet Island', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BRA', 'Brazil', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IOT', 'British Indian Ocean Territory', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BRN', 'Brunei Darussalam', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BGR', 'Bulgaria', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BFA', 'Burkina Faso', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BDI', 'Burundi', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KHM', 'Cambodia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CMR', 'Cameroon', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CAN', 'Canada', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CPV', 'Cape Verde', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CYM', 'Cayman Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CAF', 'Central African Republic', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TCD', 'Chad', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CHL', 'Chile', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CHN', 'China', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CXR', 'Christmas Island', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CCK', 'Cocos (Keeling) Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'COL', 'Colombia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'COM', 'Comoros', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'COG', 'Congo', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'COD', 'Congo, the Democratic Republic of the', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'COK', 'Cook Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CRI', 'Costa Rica', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CIV', 'Côte d''Ivoire', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HRV', 'Croatia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CUB', 'Cuba', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CUW', 'Curaçao', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CYP', 'Cyprus', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CZE', 'Czech Republic', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DNK', 'Denmark', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DJI', 'Djibouti', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DMA', 'Dominica', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DOM', 'Dominican Republic', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ECU', 'Ecuador', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'EGY', 'Egypt', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SLV', 'El Salvador', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GNQ', 'Equatorial Guinea', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ERI', 'Eritrea', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'EST', 'Estonia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ETH', 'Ethiopia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FLK', 'Falkland Islands (Malvinas)', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FRO', 'Faroe Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FJI', 'Fiji', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FIN', 'Finland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FRA', 'France', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GUF', 'French Guiana', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PYF', 'French Polynesia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ATF', 'French Southern Territories', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GAB', 'Gabon', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GMB', 'Gambia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GEO', 'Georgia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'DEU', 'Germany', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GHA', 'Ghana', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GIB', 'Gibraltar', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GRC', 'Greece', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GRL', 'Greenland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GRD', 'Grenada', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GLP', 'Guadeloupe', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GUM', 'Guam', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GTM', 'Guatemala', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GGY', 'Guernsey', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GIN', 'Guinea', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GNB', 'Guinea-Bissau', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GUY', 'Guyana', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HTI', 'Haiti', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HMD', 'Heard Island and McDonald Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VAT', 'Holy See (Vatican City State)', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HND', 'Honduras', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HKG', 'Hong Kong', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'HUN', 'Hungary', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ISL', 'Iceland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IND', 'India', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IDN', 'Indonesia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IRN', 'Iran, Islamic Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IRQ', 'Iraq', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IRL', 'Ireland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'IMN', 'Isle of Man', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ISR', 'Israel', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ITA', 'Italy', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'JAM', 'Jamaica', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'JPN', 'Japan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'JEY', 'Jersey', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'JOR', 'Jordan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KAZ', 'Kazakhstan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KEN', 'Kenya', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KIR', 'Kiribati', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PRK', 'Korea, Democratic People''s Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KOR', 'Korea, Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KWT', 'Kuwait', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KGZ', 'Kyrgyzstan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LAO', 'Lao People''s Democratic Republic', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LVA', 'Latvia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LBN', 'Lebanon', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LSO', 'Lesotho', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LBR', 'Liberia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LBY', 'Libya', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LIE', 'Liechtenstein', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LTU', 'Lithuania', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LUX', 'Luxembourg', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MAC', 'Macao', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MKD', 'Macedonia, the former Yugoslav Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MDG', 'Madagascar', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MWI', 'Malawi', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MYS', 'Malaysia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MDV', 'Maldives', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MLI', 'Mali', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MLT', 'Malta', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MHL', 'Marshall Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MTQ', 'Martinique', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MRT', 'Mauritania', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MUS', 'Mauritius', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MYT', 'Mayotte', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MEX', 'Mexico', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'FSM', 'Micronesia, Federated States of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MDA', 'Moldova, Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MCO', 'Monaco', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MNG', 'Mongolia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MNE', 'Montenegro', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MSR', 'Montserrat', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MAR', 'Morocco', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MOZ', 'Mozambique', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MMR', 'Myanmar', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NAM', 'Namibia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NRU', 'Nauru', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NPL', 'Nepal', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NLD', 'Netherlands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NCL', 'New Caledonia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NZL', 'New Zealand', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NIC', 'Nicaragua', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NER', 'Niger', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NGA', 'Nigeria', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NIU', 'Niue', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NFK', 'Norfolk Island', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MNP', 'Northern Mariana Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'NOR', 'Norway', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'OMN', 'Oman', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PAK', 'Pakistan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PLW', 'Palau', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PSE', 'Palestinian Territory, Occupied', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PAN', 'Panama', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PNG', 'Papua New Guinea', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PRY', 'Paraguay', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PER', 'Peru', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PHL', 'Philippines', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PCN', 'Pitcairn', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'POL', 'Poland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PRT', 'Portugal', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'PRI', 'Puerto Rico', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'QAT', 'Qatar', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'REU', 'Réunion', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ROU', 'Romania', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'RUS', 'Russian Federation', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'RWA', 'Rwanda', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'BLM', 'Saint Barthélemy', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SHN', 'Saint Helena, Ascension and Tristan da Cunha', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'KNA', 'Saint Kitts and Nevis', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LCA', 'Saint Lucia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'MAF', 'Saint Martin (French part)', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SPM', 'Saint Pierre and Miquelon', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VCT', 'Saint Vincent and the Grenadines', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'WSM', 'Samoa', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SMR', 'San Marino', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'STP', 'Sao Tome and Principe', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SAU', 'Saudi Arabia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SEN', 'Senegal', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SRB', 'Serbia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SYC', 'Seychelles', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SLE', 'Sierra Leone', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SGP', 'Singapore', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SXM', 'Sint Maarten (Dutch part)', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SVK', 'Slovakia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SVN', 'Slovenia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SLB', 'Solomon Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SOM', 'Somalia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ZAF', 'South Africa', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SGS', 'South Georgia and the South Sandwich Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SSD', 'South Sudan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ESP', 'Spain', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'LKA', 'Sri Lanka', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SDN', 'Sudan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SUR', 'Suriname', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SJM', 'Svalbard and Jan Mayen', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SWZ', 'Swaziland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SWE', 'Sweden', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'CHE', 'Switzerland', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'SYR', 'Syrian Arab Republic', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TWN', 'Taiwan, Province of China', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TJK', 'Tajikistan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TZA', 'Tanzania, United Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'THA', 'Thailand', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TLS', 'Timor-Leste', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TGO', 'Togo', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TKL', 'Tokelau', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TON', 'Tonga', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TTO', 'Trinidad and Tobago', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TUN', 'Tunisia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TUR', 'Turkey', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TKM', 'Turkmenistan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TCA', 'Turks and Caicos Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'TUV', 'Tuvalu', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'UGA', 'Uganda', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'UKR', 'Ukraine', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ARE', 'United Arab Emirates', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'GBR', 'United Kingdom', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'USA', 'United States', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'UMI', 'United States Minor Outlying Islands', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'URY', 'Uruguay', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'UZB', 'Uzbekistan', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VUT', 'Vanuatu', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VEN', 'Venezuela, Bolivarian Republic of', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VNM', 'Viet Nam', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VGB', 'Virgin Islands, British', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'VIR', 'Virgin Islands, U.S.', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'WLF', 'Wallis and Futuna', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ESH', 'Western Sahara', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'YEM', 'Yemen', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ZMB', 'Zambia', id FROM currency WHERE code = 'EUR';
INSERT INTO country (code, name, currency_id) SELECT 'ZWE', 'Zimbabwe', id FROM currency WHERE code = 'EUR';
-- EOFCountry

-- expense_category
INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Advertising', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Visitng Cards', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Advertising';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Brochures', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Advertising';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Promotional materials', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Advertising';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Contractors', now(), now());

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Employee Benefits', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Uniforms', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Employee Benefits';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Food & Beverage', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Vegetables', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Fruits', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Meat', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Confectionery', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Dairy', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Snacks', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Soft drinks', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Alcoholic Beverage', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Water', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Food & Beverage';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Insurance', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Building Insurance', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Insurance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Health Insurance', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Insurance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Life Insurance', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Insurance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Home Insurance', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Insurance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Vehicle Insurance', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Insurance';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Maintenance', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Cleaning', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Maintenance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Plumbing', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Maintenance';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Repair Equipments', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Maintenance';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Meals & Entertainment', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Lunch with Customer', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Meals & Entertainment';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Dinner with Customer', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Meals & Entertainment';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Staff party', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Meals & Entertainment';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Office Expenses', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Stationary', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Furniture', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Postage', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Shipping & Couriers', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Hardware', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Software', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Office Expenses';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Professional Services', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Accountant', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Professional Services';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Legal', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Professional Services';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Rent or Lease', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Equipment', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Rent or Lease';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Machinery', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Rent or Lease';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Office Space', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Rent or Lease';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Vehicles', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Rent or Lease';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Supplies', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Linen', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Supplies';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Travel', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Hotel/Accomadation', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Travel';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Bus', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Travel';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Train', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Travel';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Airfare', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Travel';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Taxi', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Travel';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Utilities', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Electricity', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Utilities';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Water', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Utilities';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Internet', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Utilities';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Telephone', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Utilities';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Gas', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Utilities';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Other Expenses', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Bank Fees', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Commissions', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Taxes & Licenses', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Interest - Mortgage', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Interest - Other', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Memberships', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Other Expenses';

INSERT INTO expense_category (name, creation_date, last_modified_date) VALUES ('Fixed Assets', now(), now());
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Furniture and fixtures', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Fixed Assets';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Office equipment', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Fixed Assets';
INSERT INTO expense_category (name, parent_id, creation_date, last_modified_date)
  SELECT 'Land', ec.id, now(), now() FROM expense_category ec WHERE ec.name = 'Fixed Assets';
-- EOF expense_category


