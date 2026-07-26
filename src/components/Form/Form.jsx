import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const { tg } = useTelegram();

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street])


  useEffect(() => {
    tg.MainButton.setParams({
      text: "Malumotlari jonatish"
    })
  }, [])



  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }


  return (
    <div className={"form"}>
      <h3>Malumoti kiriting</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Davlat'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'address'}
        value={street}
        onChange={onChangeStreet}
      />

      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'physical'}>Jis.Shaxs</option>
        <option value={'legal'}>Yur.Shaxs</option>
      </select>

    </div>
  );
};

export default Form;


