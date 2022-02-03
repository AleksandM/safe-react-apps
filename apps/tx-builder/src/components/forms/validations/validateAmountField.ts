import { ValidateResult } from 'react-hook-form';

import { isInputValueValid } from '../../../utils';

function validateAmountField(value: string): ValidateResult {
  if (!isInputValueValid(value)) {
    return 'Invalid amount value';
  }
}

export default validateAmountField;
