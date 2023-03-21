import s from './DailyCaloriesForm.module.scss';

import { useState, FC, ChangeEvent } from 'react';

interface IRadioField {
  name: string;
  getTypeBlood: Function;
}

const RadioField: FC<IRadioField> = ({ name, getTypeBlood }) => {
  const [radioResult, setActiveCheckbox] = useState<Number | null>(null);
  const [typeBlood, setTypeBlood] = useState<String | null>(null);

  getTypeBlood(typeBlood);

  return (
    <>
      <div className={s.radioBlock}>
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className={s.listRadio}>
            <label className={s.label}>
              <input
                className={s.checkbox}
                type="radio"
                name={name}
                checked={idx === radioResult}
                onClick={() => setActiveCheckbox(idx)}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTypeBlood(e.target.value)
                }
                value={idx + 1}
                placeholder="Blood type"
              />
              <span className={s.fake}></span>
              <span className={s.text}>{idx + 1}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioField;
