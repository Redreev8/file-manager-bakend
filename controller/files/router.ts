import { Router } from 'express'
import { rename, create, find, remove, check, change } from './controler'
import { body } from 'express-validator'
import checkUrlNameFile from './middleware/chec-url-name-file'

const router = Router()
export const urlFileRouter = 'files'

router.get(`/check/${urlFileRouter}/*`, [checkUrlNameFile], check)
router.get(`/${urlFileRouter}/*`, [checkUrlNameFile], find)
router.post(`/${urlFileRouter}/*`, [checkUrlNameFile], create)
router.put(
    `/${urlFileRouter}/*`,
    [body('content', '').isString(), checkUrlNameFile],
    change,
)
router.put(
    `/rename/${urlFileRouter}/*`,
    [
        body('name', '').isString().isLength({ min: 2, max: 255 }),
        checkUrlNameFile,
    ],
    rename,
)
router.delete(`/${urlFileRouter}/*`, [checkUrlNameFile], remove)
export default router
