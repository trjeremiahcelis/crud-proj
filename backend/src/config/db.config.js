module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "my_inventory",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

/* Max max no. off conection in pool
   Idle max time in milliscnds, that a conn can be idle before release */