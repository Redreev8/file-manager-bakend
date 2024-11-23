import { Router } from 'express'
import {
    rename,
    create,
    find,
    remove,
    check,
} from './controler'
import { body } from 'express-validator'
import checkUrlNameFile from './middleware/check-url-name-folder'

const router = Router()
export const urlFolderRouter = 'folders'


router.get(`/check/${urlFolderRouter}/*`, [checkUrlNameFile], check)
router.get(`/${urlFolderRouter}(/*)?`, [checkUrlNameFile], find)
router.post(`/${urlFolderRouter}/*`, [checkUrlNameFile], create)
router.put(
    `/rename/${urlFolderRouter}/*`,
    [body('name', '').isString().isLength({ min: 2, max: 255 }), checkUrlNameFile],
    rename,
)
router.delete(`/${urlFolderRouter}/*`, [checkUrlNameFile], remove)

export default router
