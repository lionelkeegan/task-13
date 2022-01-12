// import model student
const Student = require('../models/Students');

class StudentController {
    // index student
    async index(req, res) {
        const student = await Student.all();

        if (student[0]) {
            const data = {
                message: "Menampilkan data student",
                data: student
            }

            res.status(200).json(data);
        } else {
            const data = {
                message: `Data tidak ada`,
            }

            res.status(404).json(data);
        }
    }

    async store(req, res) {
        // jalankan method create dari Model student
        // kirim data student / menambahkan data student
        const student = await Student.create(req.body);
        const data = {
            message: `Menambahkan data student`,
            data: student
        }
        res.status(201).json(data);
    }

    async update(req, res) {
        // method update 
        const {
            id
        } = req.params

        const student = await Student.find(id);

        console.log(student[0]);

        if (student[0]) {
            // update data student
            const studentUpdated = await Student.update(id, req.body);

            const data = {
                message: `Update data student`,
                data: studentUpdated
            }
            res.status(200).json(data);
        } else {
            // kirim data tidak ada

            const data = {
                message: `Data tidak ada`,
            }
            res.status(400).json(data);
        }
    }

    async destroy(req, res) {
        //method destroy / hapus data student
        const {
            id
        } = req.params;

        const student = await Student.find(id);

        if (student[0]) {
            // hapus data
            await Student.delete(id);

            const data = {
                message: `Data berhasil dihapus`,
            }

            res.status(200).json(data);
        } else {
            const data = {
                message: `Data tidak ada`,
            }

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        // method cari / menampilkan data
        const {
            id
        } = req.params;

        // cari data by id
        const student = await Student.find(id);

        if (student[0]) {
            const data = {
                message: "Menampilkan data student",
                data: student
            }

            res.status(200).json(data);
        } else {
            const data = {
                message: `Data tidak ada`,
            }

            res.status(404).json(data);
        }
    }
}

// buat object
const object = new StudentController();

module.exports = object;