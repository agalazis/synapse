import { TYPES } from '../constants'
import { inject, injectable } from 'inversify';
import { TYPES as COMMON_TYPES, interfaces as commonInterfaces  } from '../../common'
import { PROMOTIONS } from '../constants'
import * as moment from 'moment'
@injectable()
export class PromotionService {
  public async findCurrent() {
    // returning promise to future-proof the 
    // interface of the service since promotions
    // could come from db
    return new Promise((resolve, reject)=>{
      const timeKey: string = moment().format('A')
      resolve(PROMOTIONS[timeKey]);
    })

  }
}
