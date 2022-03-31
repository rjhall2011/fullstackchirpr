import * as mysql from 'mysql';
import chirps from './chirp'


export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprlab',
    password: 'Macbfac2011$',
    database: 'c16_chirpr'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results)
        });

    });
};

export default {
    chirps
}