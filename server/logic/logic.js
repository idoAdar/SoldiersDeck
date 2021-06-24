const db = require('../utills/database');

exports.newSoldier = async (req, res, next) => {
    const soldierName = req.body.soldierName;
    const age = req.body.age;
    const role = req.body.role;
    const query = `INSERT INTO soldiers(soldier_name, age, role) VALUES (?, ?, ?)`;

    try {
        await db.query(query, [soldierName, age, role]);
        return res.status(200).json({ soldierName, age, role });
    } catch (error) {
        next(error);
    }
};

exports.newJob = async (req, res, next) => {
    const title = req.body.title;
    const status = req.body.status;
    const query = `INSERT INTO jobs(title, status) VALUES (?, ?)`;

    try {
        await db.query(query, [title, status]);
        return res.status(200).json({ title, status });
    } catch (error) {
        next(error);
    }
}

exports.fetchSoliders = async (req, res, next) => {
    const queryA = `SELECT * FROM soldiers`;
    const queryB = `SELECT * FROM jobs`;

    try {
        const [soldiers] = await db.query(queryA);
        const [jobs] = await db.query(queryB);
        return res.status(200).json({ soldiers, jobs });
    } catch (error) {
        next(error);
    }
}

exports.fetchSolidersPerJob = async (req, res, next) => {
    const jobId = req.params.id;
    const query = `SELECT soldiers.id, soldier_name, age, role 
                   FROM soldiers 
                   JOIN divisions ON divisions.soldier_id = soldiers.id 
                   WHERE divisions.job_id = ?`;

    try {
        const [soldiers] = await db.query(query, jobId);
        return res.status(200).json(soldiers);
    } catch (error) {
        next(error);
    }
};

exports.addSoliderPerJob = async (req, res, next) => {
    const soliderId = req.body.soliderId;
    const jobId = req.body.jobId;

    const query = `INSERT INTO divisions(soldier_id, job_id) VALUES (?, ?)`;

    try {
        await db.query(query, [soliderId, jobId]);
        return res.status(200).json({ message: `Job number ${jobId} was updated!` });
    } catch (error) {
        next(error);
    }

}

exports.removeSoliersFromJob = async (req, res, next) => {
    const soliderId = req.params.sId;
    const jobId = req.params.jId;
    const query = `DELETE FROM divisions WHERE soldier_id = ? && job_id = ?`;

    try {
        await db.query(query, [soliderId, jobId]);
        return res.status(200).json({ message: `Soldier ${soliderId} was removed from the selected job` });
    } catch (error) {
        next(error);
    }
};