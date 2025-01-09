import { ElMessage, ElMessageBox } from 'element-plus'
import { saveSurvey, updateSurvey, deleteSurvey } from '@/api/surveyApi'
// 类型
import type { EditorStore } from '@/types'
// 保存问卷
export function save(store: EditorStore) {
  return new Promise((resolve, reject) => {
    ElMessageBox.prompt('请输入问卷标题', '提示', {
      confirmButtonText: '保存',
      cancelButtonText: '取消',
      type: 'info',
    })
      .then(async ({ value }) => {
        const surveyToSave = {
          title: value,
          surveyCount: store.surveyCount,
          coms: JSON.stringify(store.coms),
        }
        console.log(surveyToSave)

        const data = await saveSurvey(surveyToSave)

        if (data.code === 200) {
          resolve(data.data.id)
          ElMessage({
            type: 'success',
            message: '已保存',
          })
          store.setCurrentComponentIndex(-1)
        } else {
          reject(data)
          console.log('保存失败')
        }
      })
      .catch((e) => {
        console.log(e)
        console.log('取消保存')
      })
  })
}

// 更新问卷
export function update(store: EditorStore, id: number) {
  return new Promise((resolve, reject) => {
    updateSurvey(id, {
      surveyCount: store.surveyCount,
      coms: JSON.stringify(store.coms),
    })
      .then(() => {
        resolve(void 0)
        ElMessage({
          type: 'success',
          message: '已保存',
        })
        store.setCurrentComponentIndex(-1)
      })
      .catch((e) => {
        reject(e)
        console.log('取消更新')
      })
  })
}

// 删除问卷
export function remove(id: number) {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm('确定删除该问卷吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        deleteSurvey(id)
          .then(() => {
            resolve(void 0)
            ElMessage.success('删除成功')
          })
          .catch((e) => {
            reject(e)
            console.log('保存失败')
          })
      })
      .catch(() => {
        console.log('取消删除')
      })
  })
}
