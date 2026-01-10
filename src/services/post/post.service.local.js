import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'

const STORAGE_KEY = 'post'

export const postService = {
    query,
    save,
    remove,
    getById
}

_createDemoPosts()

async function query() {
    return storageService.query(STORAGE_KEY)
}

async function getById(postId) {
    return storageService.get(STORAGE_KEY, postId)
}

async function remove(postId) {
    return storageService.remove(STORAGE_KEY, postId)
}

async function save(postToSave) {
    if (postToSave._id) return storageService.put(STORAGE_KEY, postToSave)
    return storageService.post(STORAGE_KEY, _getEmptyPost(postToSave))
}

function _getEmptyPost(postToSave = {}) {
    return {
        _id: makeId(),
        caption: postToSave.caption || '',
        imgUrl: postToSave.imgUrl || '/img/sunflowers.jpg',
        createdAt: Date.now(),
        by: postToSave.by || {
            _id: 'u101',
            username: 'ben',
            fullname: 'Ben',
            imgUrl: ''
        },
        likedBy: [],
        comments: []
    }
}

function _createDemoPosts() {
    const posts = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (posts && posts.length) return

    const demo = [
        {
            _id: makeId(),
            caption: 'First post 🔥',
            imgUrl: '/img/sunflowers.jpg',
            createdAt: Date.now() - 1000 * 60 * 60,
            by: { _id: 'u201', username: 'david', fullname: 'David', imgUrl: '' },
            likedBy: [],
            comments: []
        },
        {
            _id: makeId(),
            caption: 'Hello from Sprint 4',
            imgUrl: '/img/sunflowers.jpg',
            createdAt: Date.now() - 1000 * 60 * 120,
            by: { _id: 'u202', username: 'gal', fullname: 'Gal', imgUrl: '' },
            likedBy: [],
            comments: []
        }
    ]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(demo))
}
