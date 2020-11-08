import { createStore } from 'easy-peasy'
import { User } from '@generated/graphql'
import { layoutModel, LayoutModel } from './layout'

export interface StoreModel {
  user: Partial<User>
  layout: LayoutModel
}

const storeModel: StoreModel = {
  user: {},
  layout: layoutModel,
}

const store = createStore(storeModel)

export default store
