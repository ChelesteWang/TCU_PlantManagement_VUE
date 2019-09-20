const req = require('../utils/axios')
module.exports = {
    // 用户信息
    user: {
        delete(id) { return req.postParam('api/ent/user', { 'judge': 2, 'id': id }) },
        update(id, c) { return req.postParam('api/ent/user', { 'judge': 3, 'id': id, 'condition': c }) },
        updateType(id, t) { return req.postParam('api/ent/user', { 'judge': 3, 'id': id, 'type': t }) },
        login(sid, p) { return req.postParam('api/ent/user', { 'judge': 4, 'stu_id': sid, 'pass': p }) },

        findAndCountAll(o, l) { return req.postParam('api/ass/user', { 'judge': 0, 'offset': o, 'limit': l }) }
    },
    // 树木清单
    list: {
        // delete(id) { return req.postParam('api/ent/user', { 'judge': 2, 'id': id }) },
        // update(id, c) { return req.postParam('api/ent/user', { 'judge': 3, 'id': id, 'condition': c }) },

        findAndCountAll(o, l) { return req.postParam('api/ass/list', { 'judge': 0, 'offset': o, 'limit': l }) }
    }
}