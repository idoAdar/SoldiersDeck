------------------------------------------------
soldiers Table:
------------------------------------------------
CREATE TABLE soldiers(
    id INT NOT NULL AUTO_INCREMENT,
    soldier_name VARCHAR(55) NOT NULL,
    role VARCHAR(55) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (id)
);
------------------------------------------------
jobs Table:
------------------------------------------------
CREATE TABLE jobs(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(55) NOT NULL,
    PRIMARY KEY (id)
);
------------------------------------------------
divisions Table:
------------------------------------------------
CREATE TABLE divisions(
    id INT NOT NULL AUTO_INCREMENT,
    soldier_id INT NOT NULL,
    job_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (soldier_id) REFERENCES soldiers(id),
    FOREIGN KEY (job_id) REFERENCES jobs(id)
);