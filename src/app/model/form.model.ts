export interface FormModel {
  expressionA: string;
  expressionB: string;
  operationSequence: '.' | ';';
  change: 'up' | 'down';
  fontSize: '10' | '20' | '30' | '40' | '50';
}
