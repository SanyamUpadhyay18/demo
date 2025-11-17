-- Users Table for Authentication
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'installer',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Add user_id to substations table
ALTER TABLE substations ADD COLUMN user_id INTEGER REFERENCES users(id);

-- Create index for faster lookups
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- Update trigger for users table
CREATE TRIGGER update_users_updated_at 
BEFORE UPDATE ON users 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();



-- Table for Substation Details
CREATE TABLE substations (
    id SERIAL PRIMARY KEY,
    gss VARCHAR(100) NOT NULL,
    mv_feeder VARCHAR(100) NOT NULL,
    gis_location VARCHAR(200) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    dt_name VARCHAR(100) NOT NULL,
    mkit_serial_no VARCHAR(100) NOT NULL UNIQUE,
    installation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    installer_name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lv_feeders (
    id SERIAL PRIMARY KEY,
    substation_id INTEGER REFERENCES substations(id) ON DELETE CASCADE,
    mkit_serial_no VARCHAR(100) REFERENCES substations(mkit_serial_no),
    feeder_number INTEGER NOT NULL,
    feeder_name VARCHAR(100) NOT NULL,
    ampacity VARCHAR(50) NOT NULL,
    gis_location VARCHAR(200) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_substation_serial ON substations(mkit_serial_no);
CREATE INDEX idx_substation_status ON substations(status);
CREATE INDEX idx_lv_feeder_substation ON lv_feeders(substation_id);
CREATE INDEX idx_lv_feeder_serial ON lv_feeders(mkit_serial_no);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_substations_updated_at BEFORE UPDATE ON substations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_lv_feeders_updated_at BEFORE UPDATE ON lv_feeders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE VIEW installation_complete_view AS
SELECT 
    s.id as substation_id, s.gss, s.mv_feeder, s.dt_name, s.mkit_serial_no,
    s.gis_location as substation_location, s.latitude as sub_latitude, s.longitude as sub_longitude,
    s.installation_date, s.installer_name, s.status, COUNT(lf.id) as total_lv_feeders,
    json_agg(
        json_build_object(
            'feeder_id', lf.id, 'feeder_number', lf.feeder_number, 'feeder_name', lf.feeder_name,
            'ampacity', lf.ampacity, 'gis_location', lf.gis_location, 'latitude', lf.latitude, 'longitude', lf.longitude
        ) ORDER BY lf.feeder_number
    ) as lv_feeders
FROM substations s
LEFT JOIN lv_feeders lf ON s.id = lf.substation_id
WHERE s.status = 'Active'
GROUP BY s.id, s.gss, s.mv_feeder, s.dt_name, s.mkit_serial_no, s.gis_location, s.latitude, s.longitude, s.installation_date, s.installer_name, s.status;