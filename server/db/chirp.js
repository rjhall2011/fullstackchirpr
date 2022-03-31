import { Query } from './index';

const one = (id) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const insert = async (userid, content, location) => Query('insert into chirps (userid, content, location) values (?,?,?)', [userid, content, location])
const del = async (id) => Query('delete from chirps where id = ?', [id])
const all = async (id) => Query('SELECT * FROM chirps');
const update = async (id, content) => Query('update chirps set content = ?', [id])
export default {
    all,
    one,
    insert,
    del,
    update
}