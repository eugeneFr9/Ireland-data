DROP TABLE IF EXISTS Houses_Ireland;
CREATE TABLE Houses_Ireland (
Link varchar(255) NOT NULL,
Country varchar(255) NOT NULL,
City varchar(255) NOT NULL,
Address_ varchar(255) NOT NULL,
Lat float(10, 5) DEFAULT NULL,
Lng float(10, 5) DEFAULT NULL,
Parcel_m2 int(10) DEFAULT NULL,
Gross_m2 int(10) DEFAULT NULL,
Net_m2 int(10) DEFAULT NULL,
Rooms int(10) DEFAULT NULL,
Value_ int(15) DEFAULT NULL,
Currency varchar(255) DEFAULT NULL,
Description_ varchar(255) DEFAULT NULL,
Title varchar(255) DEFAULT NULL,
Market_date date,
PRIMARY KEY (Link)
);

DROP TABLE IF EXISTS Images;
CREATE TABLE Images (
  Img_id int NOT NULL AUTO_INCREMENT,
  Img_link varchar(255) NOT NULL,
  House_link varchar(255) NOT NULL,
  PRIMARY KEY (Img_id)
);