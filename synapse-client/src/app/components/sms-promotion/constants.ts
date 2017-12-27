export enum CreateState{
  Success='SUCCESS',
  Failure='FAIILURE',
  Pending='PENDING',
  Initial='INITIAL'
}
export const CREATE_STATUS_LABELS = {
  [CreateState.Success] : 'Promo code request completed succesfully!',
  [CreateState.Failure]: 'Promo code request failed. Please try again.',
  [CreateState.Pending]: 'Processing your request',
  [CreateState.Initial]: ''
}