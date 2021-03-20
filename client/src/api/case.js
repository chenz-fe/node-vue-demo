import axios from '@/utils/request'

export function getCaseList() {
  return axios.get('/case/list')
}