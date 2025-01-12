export interface FormModel {
  expressionA: string;
  expressionB: string;
  operationSequence: '.' | ';';
  changeDescription: 'up' | 'down';
  fontSize: '10' | '20' | '30' | '40' | '50';
}
